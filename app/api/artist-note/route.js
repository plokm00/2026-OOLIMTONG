import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_SECTIONS = 8;
const MAX_ITEMS = 40;
const MAX_CHARS = 24_000;
const MIN_ITEMS = 40;
const MAX_WORKS = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const rateBuckets = globalThis.__artistNoteRateBuckets ?? new Map();
globalThis.__artistNoteRateBuckets = rateBuckets;

const SYSTEM_PROMPT = `당신은 원주 니닉크라프트의 협력창작 프로젝트 〈울림통-변주 2026〉의 작가 노트를 대신 써 주는 사람입니다.

시민작가가 체크한 키워드와 짧은 단답을 받아, 그 사람이 직접 쓴 것처럼 읽히는 한 편의 에세이로 완성합니다.

가장 중요한 것 — 이것은 답변 정리가 아니라 글입니다:
- 항목을 나열하지 않습니다. 문항 제목을 옮겨 적지 않습니다. 목록, 불릿, 마크다운 기호를 쓰지 않습니다.
- 고른 키워드는 재료일 뿐입니다. 그 재료를 녹여 하나의 흐름을 가진 산문으로 씁니다.
- 앞 문단과 뒷 문단이 이어지도록 씁니다. 한 문단 안에서도 문장이 서로를 받아야 합니다.

해석에 대하여:
- 고른 것들 사이의 연결을 찾아 한 걸음 더 들어가도 됩니다. 왜 그렇게 느꼈을지, 그 선택들이 함께 무엇을 말하는지 써도 좋습니다.
- 다만 일어나지 않은 사건, 없는 사람, 주어지지 않은 이름·날짜·장소는 지어내지 않습니다. 해석은 되고 창작은 안 됩니다.
- 고르지 않은 항목은 없는 것으로 두고, 빈 자리를 언급하지 않습니다.

팀 울림통의 작품명:
- 함께 만든 대형 울림통에는 이미 정해진 작품명이 있고, 아래 정보로 함께 드립니다. 글에서 그 이름을 그대로 쓰십시오.
- 딸린 뜻풀이는 배경 정보일 뿐입니다. 그 문장을 옮겨 적거나 요약해 붙이지 마십시오. 작품명 자체가 작가 본인의 말은 아니므로, 이름을 부를 때만 쓰고 그 해설은 작가의 소감으로 둔갑시키지 않습니다.
- 두 팀에 참여한 작가라면 두 작품을 모두 자연스럽게 언급합니다.

문체:
- 1인칭 '저'를 쓰고 존댓말(–습니다/–했습니다)로 씁니다.
- 담백하게 씁니다. 미사여구, 감탄, 상투적인 비유를 피합니다. 다만 문장에 사람의 온기가 남게 합니다.
- 시민작가의 목소리입니다. 평론가나 홍보문의 목소리가 아닙니다.

출력 형식 — 아래 두 제목만 그대로 쓰고, 각 아래에 문단을 이어 씁니다:

작가 노트
(40여 개 답변을 모두 반영해 4~6문단, 각 2~4문장으로 씁니다. 지금의 나와 이 프로젝트에 오게 된 자리에서 시작해, 흙을 처음 만진 시간, 내 모뉴먼트, 함께 만든 대형 울림통, 그리고 지금 돌아보는 마음으로 자연스럽게 흘러가게 씁니다. 모든 답을 한 번씩 나열하려 하지 말고, 서로 가까운 답변을 묶어 글의 흐름을 만듭니다. 문단마다 소제목을 달지 않습니다.)

전시 계획
(1~2문단. 칩에 무엇을 연결할지, 그리고 작품을 언제 어디에 어떻게 두고 왜 그 자리인지가 문장 속에 녹아들게 씁니다. 표나 항목이 아니라 계획을 이야기하듯 씁니다. 답하지 않은 내용은 추측하지 않습니다.)`;

function json(body, init = {}) {
  return Response.json(body, {
    ...init,
    headers: { ...init.headers, "Cache-Control": "no-store" },
  });
}

function requestKey(request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function hasQuota(request) {
  const now = Date.now();
  const key = requestKey(request);
  const recent = (rateBuckets.get(key) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    rateBuckets.set(key, recent);
    return false;
  }

  recent.push(now);
  rateBuckets.set(key, recent);
  return true;
}

function sanitize(value, limit) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, limit);
}

function buildUserMessage(artist, works, sections) {
  const lines = [`작가: ${artist.name} (참여 팀 · ${artist.team})`, ""];

  if (works.length) {
    lines.push("함께 만든 대형 울림통의 작품명 (정해진 이름 — 글에서 그대로 쓸 것):");
    for (const work of works) {
      lines.push(`- 팀 ${work.team}: 〈${work.title}〉`);
      if (work.note) lines.push(`  (배경 참고, 옮겨 적지 말 것: ${work.note})`);
    }
    lines.push("");
  }

  lines.push("아래는 이 작가가 체크한 키워드와 단답입니다.", "");

  for (const section of sections) {
    lines.push(`[${section.title}]`);
    for (const item of section.items) {
      lines.push(`- ${item.label}: ${item.value}`);
    }
    lines.push("");
  }

  return lines.join("\n").slice(0, MAX_CHARS);
}

function parseBody(body) {
  if (!body || typeof body !== "object") return null;

  const name = sanitize(body?.artist?.name, 40);
  const team = sanitize(body?.artist?.team, 40);
  if (!name) return null;

  const rawWorks = Array.isArray(body.works) ? body.works.slice(0, MAX_WORKS) : [];
  const works = [];

  for (const rawWork of rawWorks) {
    const workTeam = sanitize(rawWork?.team, 20);
    const title = sanitize(rawWork?.title, 60);
    const note = sanitize(rawWork?.note, 400);
    if (workTeam && title) works.push({ team: workTeam, title, note });
  }

  const rawSections = Array.isArray(body.sections) ? body.sections.slice(0, MAX_SECTIONS) : [];
  const sections = [];

  for (const rawSection of rawSections) {
    const title = sanitize(rawSection?.title, 60);
    const rawItems = Array.isArray(rawSection?.items) ? rawSection.items.slice(0, MAX_ITEMS) : [];
    const items = [];

    for (const rawItem of rawItems) {
      const label = sanitize(rawItem?.label, 80);
      const value = sanitize(rawItem?.value, 400);
      if (label && value) items.push({ label, value });
    }

    if (title && items.length) sections.push({ title, items });
  }

  const itemCount = sections.reduce((sum, section) => sum + section.items.length, 0);
  if (!sections.length || itemCount < MIN_ITEMS) return null;
  return { artist: { name, team }, works, sections };
}

export async function POST(request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  if ((origin && origin !== requestUrl.origin) || (fetchSite && fetchSite !== "same-origin")) {
    return json({ error: "forbidden_origin" }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 60_000) {
    return json({ error: "payload_too_large" }, { status: 413 });
  }

  if (!hasQuota(request)) {
    return json(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } },
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return json({ error: "no_api_key" }, { status: 501 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = parseBody(body);
  if (!parsed) {
    return json({ error: "empty_selection" }, { status: 400 });
  }

  const client = new Anthropic();

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 3500,
      output_config: { effort: "low" },
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserMessage(parsed.artist, parsed.works, parsed.sections) }],
    });

    if (response.stop_reason === "refusal") {
      return json({ error: "refused" }, { status: 502 });
    }

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!text) {
      return json({ error: "empty_response" }, { status: 502 });
    }

    return json({ text, model: response.model });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return json({ error: "bad_api_key" }, { status: 502 });
    }
    if (error instanceof Anthropic.RateLimitError) {
      return json({ error: "rate_limited" }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      return json({ error: `api_error_${error.status}` }, { status: 502 });
    }
    return json({ error: "unknown" }, { status: 500 });
  }
}
