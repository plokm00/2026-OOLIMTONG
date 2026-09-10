"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import ArtistNoteWorkbench from "./artist-note-workbench";

const EDITOR_KEY = "oolimtong-artist-note-editor-id";

function editorIdForSession() {
  const saved = window.sessionStorage.getItem(EDITOR_KEY);
  if (saved) return saved;
  const created = window.crypto.randomUUID();
  window.sessionStorage.setItem(EDITOR_KEY, created);
  return created;
}

export default function ArtistNoteEditorPage({ expectedArtistId = "" }) {
  const [page, setPage] = useState({ status: "loading" });
  const [saveState, setSaveState] = useState("saved");
  const tokenRef = useRef("");
  const editorIdRef = useRef("");
  const revisionRef = useRef(0);
  const readyRef = useRef(false);
  const skipFirstRef = useRef(true);
  const saveTimerRef = useRef(null);
  const queuedAnswersRef = useRef(null);
  const savingRef = useRef(false);
  const pageStatusRef = useRef("loading");

  const flushSave = useCallback(async () => {
    if (savingRef.current || !readyRef.current) return;
    savingRef.current = true;

    while (queuedAnswersRef.current) {
      const answers = queuedAnswersRef.current;
      queuedAnswersRef.current = null;
      setSaveState("saving");

      try {
        const response = await fetch("/api/artist-note/access", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: tokenRef.current,
            editorId: editorIdRef.current,
            answers,
            revision: revisionRef.current,
          }),
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          readyRef.current = false;
          setSaveState(data.error === "locked" ? "locked" : "error");
          break;
        }
        revisionRef.current = data.revision;
        setSaveState("saved");
      } catch {
        setSaveState("error");
        break;
      }
    }

    savingRef.current = false;
  }, []);

  const queueSave = useCallback((answers) => {
    if (!readyRef.current) return;
    if (skipFirstRef.current) {
      skipFirstRef.current = false;
      return;
    }

    queuedAnswersRef.current = answers;
    setSaveState("pending");
    window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(flushSave, 800);
  }, [flushSave]);

  useEffect(() => {
    const token = window.location.hash.slice(1);
    const editorId = editorIdForSession();
    tokenRef.current = token;
    editorIdRef.current = editorId;

    const access = (updatePage = false) => fetch("/api/artist-note/access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, editorId }),
    }).then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "load_failed");
      if (expectedArtistId && data.artist?.id !== expectedArtistId) throw new Error("invalid_link");
      if (updatePage) return data;
      revisionRef.current = data.revision;
      const nextStatus = data.readOnly ? "locked" : "ready";
      readyRef.current = !data.readOnly;
      pageStatusRef.current = nextStatus;
      setPage({ status: nextStatus, data });
      return data;
    });

    access().catch((error) => {
      const nextStatus = error.message === "invalid_link" ? "invalid" : "error";
      pageStatusRef.current = nextStatus;
      setPage({ status: nextStatus });
    });

    const releaseOnPageHide = () => {
      if (!token || !editorId || !navigator.sendBeacon) return;
      const payload = new Blob(
        [JSON.stringify({ token, editorId, action: "release" })],
        { type: "application/json" },
      );
      navigator.sendBeacon("/api/artist-note/access", payload);
    };

    const reclaimOnPageShow = (event) => {
      if (event.persisted) access().catch(() => setSaveState("error"));
    };

    window.addEventListener("pagehide", releaseOnPageHide);
    window.addEventListener("pageshow", reclaimOnPageShow);

    const heartbeat = window.setInterval(() => {
      if (readyRef.current) access(true).catch(() => setSaveState("error"));
    }, 60_000);

    const lockRetry = window.setInterval(() => {
      if (pageStatusRef.current === "locked") access().catch(() => {});
    }, 10_000);

    return () => {
      readyRef.current = false;
      window.removeEventListener("pagehide", releaseOnPageHide);
      window.removeEventListener("pageshow", reclaimOnPageShow);
      window.clearInterval(heartbeat);
      window.clearInterval(lockRetry);
      window.clearTimeout(saveTimerRef.current);
      if (token && editorId) {
        fetch("/api/artist-note/access", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, editorId }),
          keepalive: true,
        }).catch(() => {});
      }
    };
  }, [expectedArtistId]);

  return (
    <main className="editor-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
        :root { --an-bg:#f6ede6; --an-bg2:#eee0d6; --an-bg3:#e4d0c4; --an-line:#ceb0a0; --an-accent:#c03828; --an-accent2:#8c2418; --an-text:#261410; --an-dim:#7a4c3c; }
        * { box-sizing:border-box; }
        body { margin:0; background:var(--an-bg); color:var(--an-text); font-family:'Noto Sans KR',sans-serif; }
        .editor-page { min-height:100vh; padding:48px 24px 100px; background:var(--an-bg); }
        .editor-shell { max-width:860px; margin:0 auto; }
        .editor-head { margin-bottom:30px; padding-bottom:24px; border-bottom:1px solid var(--an-line); }
        .editor-kicker { margin:0 0 10px; color:var(--an-accent); font-size:12px; font-weight:700; letter-spacing:.12em; }
        .editor-title { margin:0; font-family:'IBM Plex Sans KR',sans-serif; font-size:clamp(32px,6vw,54px); letter-spacing:-.04em; }
        .editor-note { margin:10px 0 0; color:var(--an-dim); font-size:14px; line-height:1.7; }
        .save-state { position:sticky; top:12px; z-index:20; width:max-content; margin:0 0 12px auto; padding:7px 12px; border:1px solid var(--an-line); border-radius:18px; background:rgba(255,252,248,.94); color:var(--an-dim); font-size:12px; }
        .editor-state { max-width:680px; margin:18vh auto 0; padding:34px; border:1px solid var(--an-line); background:#fffcf8; text-align:center; }
        .editor-state h1 { margin:0 0 12px; font-size:24px; }
        .editor-state p { margin:0; color:var(--an-dim); line-height:1.8; }
        .editor-state button { margin-top:20px; padding:10px 18px; border:0; background:var(--an-accent); color:white; cursor:pointer; }
        .locked-draft { margin-top:20px; padding-top:20px; border-top:1px solid var(--an-line); text-align:left; white-space:pre-wrap; }
      `}</style>

      {page.status === "loading" ? <div className="editor-state"><p>편집 문서를 불러오는 중입니다.</p></div> : null}
      {page.status === "invalid" ? <div className="editor-state"><h1>유효하지 않은 편집 링크입니다</h1><p>전달받은 링크 전체를 다시 확인해주세요.</p></div> : null}
      {page.status === "error" ? <div className="editor-state"><h1>문서를 불러오지 못했습니다</h1><p>저장소 연결을 확인한 뒤 다시 시도해주세요.</p><button type="button" onClick={() => window.location.reload()}>다시 불러오기</button></div> : null}
      {page.status === "locked" ? (
        <div className="editor-state">
          <h1>다른 분이 편집하고 있습니다</h1>
          <p>현재 저장된 내용은 안전하게 유지됩니다. 편집이 끝난 뒤 다시 불러오면 이어서 작성할 수 있습니다.</p>
          {page.data.aiDraft ? <div className="locked-draft">{page.data.aiDraft}</div> : null}
          <button type="button" onClick={() => window.location.reload()}>다시 확인하기</button>
        </div>
      ) : null}

      {page.status === "ready" ? (
        <div className="editor-shell">
          <header className="editor-head">
            <p className="editor-kicker">울림통-변주 2026 · 고유 편집 문서</p>
            <h1 className="editor-title">{page.data.artist.name} 작가 노트</h1>
            <p className="editor-note">답변은 자동으로 공동 저장됩니다. 이 링크를 받은 분은 같은 내용을 이어서 작성할 수 있습니다.</p>
          </header>
          <p className="save-state" aria-live="polite">
            {saveState === "saved" ? "저장됨" : saveState === "saving" ? "저장 중…" : saveState === "pending" ? "저장 대기 중…" : saveState === "locked" ? "다른 편집자가 열었습니다" : "저장 연결 확인 필요"}
          </p>
          <ArtistNoteWorkbench
            artist={page.data.artist}
            works={page.data.works}
            editToken={tokenRef.current}
            editorId={editorIdRef.current}
            initialAnswers={page.data.answers}
            initialDrafts={page.data.drafts}
            initialPublishedVersionId={page.data.publishedVersionId}
            initialPublishedText={page.data.publishedText}
            initialUsedCount={page.data.generationCount}
            onAnswersChange={queueSave}
          />
        </div>
      ) : null}
    </main>
  );
}
