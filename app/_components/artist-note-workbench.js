"use client";

import { useMemo, useState } from "react";

const FORM = [
  {
    id: "review",
    title: "리뷰 인터뷰",
    groups: [
      {
        title: "나는 이런 사람",
        source: "작가 소개",
        fields: [
          {
            id: "who",
            type: "text",
            label: "사는 곳과 하는 일",
            placeholder: "예) 문막에서 니닉크라프트 공방을 운영합니다",
          },
          {
            id: "motive",
            type: "chips",
            label: "참여하게 된 계기",
            options: [
              "지인의 권유로",
              "공고를 보고",
              "흙을 배우고 싶어서",
              "예전부터 만드는 걸 좋아해서",
              "새로운 사람을 만나고 싶어서",
              "아이와 함께하려고",
              "은퇴 후 할 일을 찾다가",
              "우연히",
              "작가님이 궁금해서",
            ],
          },
          {
            id: "life",
            type: "chips",
            label: "요즘 나의 하루",
            options: [
              "일이 바쁘다",
              "돌봄이 많다",
              "이제 좀 여유가 생겼다",
              "뭔가 새로 시작하고 싶다",
              "몸이 예전 같지 않다",
              "혼자 있는 시간이 많다",
              "조용한 시간이 필요하다",
            ],
          },
          {
            id: "distance",
            type: "chips",
            label: "흙과 나의 거리",
            options: [
              "흙은 이번이 처음",
              "아주 오래전에 해봤다",
              "도예를 배운 적 있다",
              "손으로 만드는 일은 익숙하다",
              "그림·공예 등 다른 분야 경험",
            ],
          },
          {
            id: "wish",
            type: "chips",
            label: "이 작업이 끝난 뒤 남기를 바라는 것",
            options: [
              "계속 만드는 사람으로 남기",
              "내 이름이 걸린 작품",
              "같이한 사람들과의 인연",
              "손에 익은 감각",
              "가족에게 보여줄 것",
              "나를 위한 시간이었다는 기억",
            ],
          },
        ],
      },
      {
        title: "흙과 처음 만난 시간",
        source: "1–2회차",
        fields: [
          {
            id: "firstTouch",
            type: "chips",
            label: "처음 흙을 만졌을 때",
            options: [
              "차가웠다",
              "축축했다",
              "묵직했다",
              "부드러웠다",
              "생각보다 단단했다",
              "손에 착 붙었다",
              "낯설었다",
              "편안했다",
              "어릴 때가 떠올랐다",
            ],
          },
          {
            id: "whyClay",
            type: "chips",
            label: "왜 흙이었을까",
            options: [
              "땅에서 나와 땅으로 돌아가서",
              "손자국이 그대로 남아서",
              "소리를 품는 재료라서",
              "살아 있는 것 같아서",
              "누구나 만질 수 있어서",
              "굽지 않아 언젠가 사라져서",
            ],
          },
          {
            id: "resonance",
            type: "chips",
            label: "‘울림통’이라는 말에서 떠오른 것",
            options: [
              "악기의 몸통",
              "기억을 담는 그릇",
              "사람이 모이는 방",
              "동굴 같은 공간",
              "가슴속 울림",
              "다른 세상으로 가는 통로",
            ],
          },
          {
            id: "drawingChange",
            type: "chips",
            label: "완성된 모뉴먼트는 처음 드로잉에 비해…",
            options: [
              "거의 그대로다",
              "더 단순해졌다",
              "더 커졌다",
              "완전히 달라졌다",
              "흙이 형태를 정해줬다",
              "만들면서 계속 바뀌었다",
            ],
          },
        ],
      },
      {
        title: "나의 모뉴먼트",
        source: "2–3 · 10회차",
        fields: [
          { id: "workName", type: "text", label: "내 모뉴먼트의 이름", placeholder: "예) 숨자리" },
          { id: "workMeaning", type: "text", label: "이름에 담은 뜻", placeholder: "예) 숨 돌리는 자리라는 뜻" },
          {
            id: "strange",
            type: "chips",
            label: "가장 낯설었던 순간",
            options: [
              "반죽이 뜻대로 안 될 때",
              "타래가 자꾸 끊어질 때",
              "갈라진 자국을 봤을 때",
              "마르는 속도가 빨랐을 때",
              "생각과 다른 형태가 나왔을 때",
              "손끝에 힘이 들어갈 때",
              "무너질까 조마조마할 때",
            ],
          },
          {
            id: "nfcSpot",
            type: "chips",
            label: "NFC 칩을 심은 자리",
            options: ["입구 옆", "몸통 한가운데", "뒤쪽", "바닥 가까이", "창 옆", "지붕 아래"],
          },
          {
            id: "nfcWhy",
            type: "chips",
            label: "그 자리를 고른 이유",
            options: [
              "손이 닿기 쉬워서",
              "눈에 잘 안 띄게 하고 싶어서",
              "심장 자리 같아서",
              "표면이 평평해서",
              "찾는 재미가 있으라고",
            ],
          },
          {
            id: "finish",
            type: "chips",
            label: "마감은 어느 쪽이었나",
            options: [
              "손자국을 그대로 남겼다",
              "매끈하게 다듬었다",
              "반은 남기고 반은 다듬었다",
              "기름을 먹이니 색이 깊어졌다",
              "물감으로 조금 발색했다",
            ],
          },
        ],
      },
      {
        title: "함께 만든 대형 울림통",
        source: "4–9회차",
        fields: [
          {
            id: "connect",
            type: "chips",
            label: "내 타래가 옆 사람 타래와 이어질 때",
            options: [
              "뿌듯했다",
              "내 것이 사라지는 것 같았다",
              "든든했다",
              "신기했다",
              "조금 서운했다",
              "마음이 편안해졌다",
              "책임감이 생겼다",
            ],
          },
          {
            id: "favoriteWork",
            type: "chips",
            label: "나에게 편했던 작업",
            options: ["반죽하기", "타래 밀기", "타래 쌓기", "이음새 메우기", "돌로 다지기", "정리·보관", "이야기 나누기"],
          },
          {
            id: "mixOrMark",
            type: "chips",
            label: "내가 만든 부분",
            options: ["구분되면 좋겠다", "섞이는 게 좋다", "구분은 안 되지만 내가 안다", "상관없다"],
          },
          {
            id: "tamping",
            type: "chips",
            label: "돌로 벽을 다지던 시간",
            options: [
              "소리가 좋았다",
              "팔이 아팠다",
              "무늬가 예뻤다",
              "명상 같았다",
              "힘 조절이 어려웠다",
              "석회 실험이 재미있었다",
            ],
          },
          {
            id: "scene",
            type: "chips",
            label: "기억에 남는 장면",
            options: [
              "다 같이 노래 부르던 때",
              "소리를 녹음하던 때",
              "니닉어를 따라 하던 때",
              "다 같이 웃던 순간",
              "비 오던 날",
              "아이들이 찾아왔을 때",
              "입구를 뚫던 날",
              "완성한 날",
            ],
          },
          { id: "teamName", type: "text", label: "우리 팀 울림통의 이름", placeholder: "예) 큰숨" },
        ],
      },
      {
        title: "전체를 돌아보며",
        source: "6 · 11회차",
        fields: [
          {
            id: "hard",
            type: "chips",
            label: "가장 어려웠던 것",
            options: ["체력", "시간 내기", "흙의 성질", "높이 쌓기", "다 같이 정하기", "기다리는 일", "특별히 없었다"],
          },
          {
            id: "joy",
            type: "chips",
            label: "가장 즐거웠던 것",
            options: [
              "손이 흙에 익어갈 때",
              "형태가 서기 시작할 때",
              "사람들과 이야기할 때",
              "새참 먹던 시간",
              "완성한 날",
              "이름을 짓던 날",
            ],
          },
          {
            id: "becameArtist",
            type: "chips",
            label: "‘작가가 되었다’고 느낀 순간",
            options: [
              "작품 이름을 지을 때",
              "내 작품이 혼자 서 있는 걸 봤을 때",
              "남에게 설명해줄 때",
              "처음 흙을 만졌을 때",
              "아직 잘 모르겠다",
            ],
          },
          {
            id: "returnToEarth",
            type: "chips",
            label: "굽지 않아 언젠가 흙으로 돌아가는 것",
            options: [
              "아쉽다",
              "자연스럽다",
              "그래서 더 소중하다",
              "다시 만들면 된다",
              "사람도 그렇다는 생각이 든다",
              "생각해본 적 없다",
            ],
          },
          { id: "freeWord", type: "text", label: "그밖에 남기고 싶은 말", placeholder: "한 문장이면 충분합니다" },
        ],
      },
    ],
  },
  {
    id: "plan",
    title: "NFC 콘텐츠 및 전시 계획",
    groups: [
      {
        title: "NFC 콘텐츠",
        source: "3 · 11회차",
        fields: [
          {
            id: "nfcContent",
            type: "chips",
            label: "칩에 연결하고 싶은 것",
            options: [
              "내 모뉴먼트 소개 페이지",
              "작업 과정 사진 모음",
              "작업장에서 녹음한 소리",
              "다 같이 부른 노래",
              "제작 과정 영상",
              "내가 쓴 글이나 시",
              "내 목소리로 남긴 이야기",
              "이 작가 노트 페이지",
              "전시 안내 페이지",
              "설치한 장소 이야기",
            ],
          },
          {
            id: "nfcAssets",
            type: "chips",
            label: "지금 가지고 있는 자료",
            options: ["작업 중 사진", "완성 사진", "영상", "녹음 파일", "손으로 쓴 글", "아직 없다 (도움 필요)"],
          },
          { id: "nfcNote", type: "text", label: "직접 적고 싶은 것", placeholder: "자유롭게" },
        ],
      },
      {
        title: "언제 · 어디서",
        source: "When · Where",
        fields: [
          {
            id: "when",
            type: "chips",
            label: "설치 기간",
            note: "기본값 — 2026. 11. 21.(토) ~ 12. 13.(일) · 전시 기간과 동일",
            options: ["전시 기간과 동일", "조금 일찍 시작", "전시 후에도 계속", "주말에만", "아직 미정"],
          },
          {
            id: "where",
            type: "chips",
            label: "설치할 곳",
            note: "사람들과 소통할 수 있는 자리여야 합니다.",
            options: [
              "집 마당",
              "거실 창가",
              "가게 입구",
              "일터 로비",
              "공방",
              "동네 공원",
              "산책로",
              "단골 카페",
              "어린이집·학교",
              "텃밭 어귀",
              "아파트 화단",
              "마을회관",
            ],
          },
          { id: "whereDetail", type: "text", label: "구체적인 자리", placeholder: "예) 공방 입구, 길에서 바로 보이는 자리" },
        ],
      },
      {
        title: "무엇을 · 누가",
        source: "What · Who",
        fields: [
          { id: "whatWork", type: "text", label: "설치할 작품과 크기", placeholder: "예) 〈숨자리〉, 높이 40cm" },
          {
            id: "whatWith",
            type: "chips",
            label: "함께 둘 것",
            options: ["나무 좌대", "돌 받침", "작품 설명 카드", "NFC 안내문", "조명", "특별히 없음"],
          },
          {
            id: "who",
            type: "chips",
            label: "설치하고 돌볼 사람",
            options: ["나 혼자", "가족과 함께", "직장 동료와", "이웃과", "작가님 도움이 필요하다"],
          },
          {
            id: "forWhom",
            type: "chips",
            label: "이 작품을 만났으면 하는 사람",
            options: ["동네 사람들", "우리 손님들", "아이들", "지나가는 누구든", "가족", "같이 작업한 분들"],
          },
        ],
      },
      {
        title: "어떻게",
        source: "How",
        fields: [
          {
            id: "howPlace",
            type: "chips",
            label: "배치 방식",
            options: [
              "기간 내내 상시 배치",
              "아침에 내놓고 저녁에 수거",
              "영업시간에만 밖에",
              "주말에만",
              "실내에 계속",
              "날씨 보고 조절",
            ],
          },
          {
            id: "howEvent",
            type: "chips",
            label: "함께 해볼 것 (선택)",
            options: [
              "설명 카드 붙이기",
              "‘휴대폰을 대보세요’ 안내문",
              "칩을 찾은 분께 스티커",
              "음료 할인 등 작은 혜택",
              "방명록 두기",
              "SNS에 위치 공개",
              "여러 작품 돌아보기 지도",
            ],
          },
          { id: "howDetail", type: "text", label: "직접 적고 싶은 운영 방식", placeholder: "예) 매일 10시~19시" },
        ],
      },
      {
        title: "왜",
        source: "Why",
        fields: [
          {
            id: "why",
            type: "chips",
            label: "그 자리에 두는 이유",
            options: [
              "사람들과 나누고 싶어서",
              "나에게 특별한 자리라서",
              "오가는 사람이 많아서",
              "아이들이 보면 좋겠어서",
              "우리 동네를 알리고 싶어서",
              "내 작업을 기록하고 싶어서",
              "매일 볼 수 있어서",
              "누군가 쉬어 가라고",
            ],
          },
          { id: "whyDetail", type: "text", label: "한 문장으로", placeholder: "예) 지나가면서도 들어오지 못하던 분들에게 먼저 말을 걸고 싶어서요" },
        ],
      },
    ],
  },
];

function textAnswer(answers, key) {
  const value = answers[key];
  return typeof value === "string" ? value.trim() : "";
}

function valueOf(answers, field) {
  if (field.type === "chips") {
    const picked = Array.isArray(answers[field.id]) ? answers[field.id] : [];
    const own = textAnswer(answers, `${field.id}__etc`);
    return [...picked, ...(own ? [own] : [])].join(", ");
  }
  return textAnswer(answers, field.id);
}

function buildSections(answers) {
  return FORM.map((section) => ({
    title: section.title,
    items: section.groups.flatMap((group) =>
      group.fields
        .map((field) => ({ label: `${group.title} — ${field.label}`, value: valueOf(answers, field) }))
        .filter((item) => item.value),
    ),
  })).filter((section) => section.items.length);
}

function composeLocally(artist, sections) {
  const lines = [
    `${artist.name} 작가가 고른 내용을 정리했습니다. (AI 취합이 아직 연결되지 않아 선택 항목만 모았습니다)`,
    "",
  ];
  for (const section of sections) {
    lines.push(section.title);
    for (const item of section.items) {
      lines.push(`· ${item.label.split(" — ").pop()}: ${item.value}`);
    }
    lines.push("");
  }
  return lines.join("\n").trim();
}

export default function ArtistNoteWorkbench({ artist }) {
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState("");
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);

  const sections = useMemo(() => buildSections(answers), [answers]);
  const answeredCount = sections.reduce((total, section) => total + section.items.length, 0);

  const toggleChip = (fieldId, option) => {
    setAnswers((prev) => {
      const current = Array.isArray(prev[fieldId]) ? prev[fieldId] : [];
      const next = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [fieldId]: next };
    });
  };

  const setText = (fieldId, value) => {
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
  };

  const compose = async () => {
    if (!answeredCount) return;
    setStatus("loading");
    setNotice("");
    setCopied(false);

    try {
      const response = await fetch("/api/artist-note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artist: { name: artist.name, team: artist.team }, sections }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.text);
        setStatus("done");
        return;
      }

      const data = await response.json().catch(() => ({}));
      setResult(composeLocally(artist, sections));
      setStatus("done");
      setNotice(
        data.error === "no_api_key"
          ? "Claude 연동이 아직 켜지지 않아 선택 항목만 정리했습니다. (ANTHROPIC_API_KEY 설정 필요)"
          : "취합 중 문제가 생겨 선택 항목만 정리했습니다. 잠시 후 다시 눌러주세요.",
      );
    } catch {
      setResult(composeLocally(artist, sections));
      setStatus("done");
      setNotice("연결이 끊겨 선택 항목만 정리했습니다. 잠시 후 다시 눌러주세요.");
    }
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const reset = () => {
    setAnswers({});
    setResult("");
    setStatus("idle");
    setNotice("");
    setCopied(false);
  };

  return (
    <div className="workbench">
      <style>{`
        .workbench { margin-top:34px; --wb-paper:#fffcf8; --wb-paper-line:#e7d5c8; }
        .wb-howto { padding:24px 26px; background:var(--an-bg2); }
        .wb-howto h2 { margin:0 0 10px; font-family:'IBM Plex Sans KR', sans-serif; font-size:19px; }
        .wb-howto p { margin:0; color:var(--an-dim); font-size:14px; line-height:1.7; }

        .wb-section { margin-top:26px; padding:46px 48px 44px; border:1px solid var(--wb-paper-line); background:var(--wb-paper); box-shadow:0 2px 12px rgba(38,20,16,.05); }
        .wb-section h2 { margin:0 0 4px; font-family:'IBM Plex Sans KR', sans-serif; font-size:29px; line-height:1.25; letter-spacing:-.02em; }

        .wb-group { margin-top:36px; }
        .wb-group-title { margin:0 0 4px; font-family:'IBM Plex Sans KR', sans-serif; font-size:17px; font-weight:600; }
        .wb-group-title span { margin-left:9px; padding:2px 8px; border-radius:2px; background:#f2e7de; color:#9a7460; font-size:11px; font-weight:400; vertical-align:middle; }

        .wb-field { margin-top:20px; }
        .wb-label { display:block; margin-bottom:9px; color:var(--an-text); font-size:13.5px; font-weight:600; }
        .wb-note { display:block; margin:-4px 0 9px; color:var(--an-dim); font-size:12px; }
        .wb-chips { display:flex; flex-wrap:wrap; gap:8px 7px; }
        .wb-chip { display:inline-block; padding:7px 15px; border:1px solid #f3ebe3; border-radius:16px; background:transparent; color:#b7a091; cursor:pointer; font:400 13px 'Noto Sans KR', sans-serif; line-height:1.5; transition:color .15s,border-color .15s,background .15s; }
        .wb-chip:hover { border-color:#e6d9cd; background:#faf4ee; color:var(--an-text); }
        .wb-chip.is-on { border-color:#eee3da; background:#f4ebe2; color:#261410; font-weight:500; }
        .wb-chip-etc { width:158px; padding:7px 15px; border:1px solid #f3ebe3; border-radius:16px; background:transparent; color:#261410; font:400 13px 'Noto Sans KR', sans-serif; line-height:1.5; transition:color .15s,border-color .15s,background .15s; }
        .wb-chip-etc::placeholder { color:#b7a091; }
        .wb-chip-etc:hover { border-color:#e6d9cd; background:#faf4ee; }
        .wb-chip-etc:focus { border-color:#d8c4b4; background:#faf4ee; outline:none; }
        .wb-chip-etc.is-on { border-color:#eee3da; background:#f4ebe2; font-weight:500; }
        .wb-input { width:100%; max-width:520px; padding:7px 15px; border:1px solid #f3ebe3; border-radius:16px; background:transparent; color:#261410; font:400 13px 'Noto Sans KR', sans-serif; line-height:1.5; transition:color .15s,border-color .15s,background .15s; }
        .wb-input:hover { border-color:#e6d9cd; }
        .wb-input:focus { border-color:#d8c4b4; background:#faf4ee; outline:none; }
        .wb-input::placeholder { color:#b7a091; font-weight:400; }
        .wb-input.is-on { border-color:#eee3da; background:#f4ebe2; font-weight:500; }

        .wb-actions { margin-top:30px; padding:26px; border:1px solid var(--an-accent); background:var(--an-bg2); }
        .wb-actions-row { display:flex; flex-wrap:wrap; align-items:center; gap:14px; }
        .wb-run { padding:14px 26px; border:0; border-radius:2px; background:var(--an-accent); color:var(--an-bg); cursor:pointer; font:700 15px 'IBM Plex Sans KR', sans-serif; letter-spacing:.02em; }
        .wb-run:hover:enabled { background:var(--an-accent2); }
        .wb-run:disabled { background:var(--an-bg3); color:var(--an-dim); cursor:default; }
        .wb-count { color:var(--an-dim); font-size:13px; }
        .wb-reset { border:0; background:none; color:var(--an-dim); cursor:pointer; font:400 13px 'Noto Sans KR', sans-serif; text-decoration:underline; }
        .wb-hint { margin:12px 0 0; color:var(--an-dim); font-size:12.5px; line-height:1.65; }

        .wb-result { margin-top:26px; padding:40px 48px; border:1px solid var(--wb-paper-line); background:var(--wb-paper); box-shadow:0 2px 12px rgba(38,20,16,.05); }
        .wb-result-head { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; }
        .wb-result-head strong { color:var(--an-accent2); font-size:12px; font-weight:700; letter-spacing:.1em; }
        .wb-copy { padding:7px 14px; border:1px solid var(--an-line); border-radius:2px; background:var(--an-bg); color:var(--an-dim); cursor:pointer; font:400 12px 'Noto Sans KR', sans-serif; }
        .wb-copy:hover { border-color:var(--an-accent); color:var(--an-accent); }
        .wb-text { margin:0; color:var(--an-text); font-family:'Noto Sans KR', sans-serif; font-size:14.5px; line-height:1.85; white-space:pre-wrap; }
        .wb-notice { margin:0 0 14px; padding:11px 14px; background:var(--an-bg2); color:var(--an-dim); font-size:12.5px; line-height:1.65; }

        @media (max-width:700px) { .wb-section { padding:26px 20px 24px; } .wb-section h2 { font-size:24px; } .wb-actions { padding:20px; } .wb-run { width:100%; } .wb-result { padding:24px 20px; } }
        @media print { .wb-section { break-inside:avoid; box-shadow:none; } .wb-actions { display:none; } }
      `}</style>

      <section className="wb-howto">
        <h2>작가 노트 작성 방법</h2>
        <p>
          해당 항목을 선택하고 빈칸을 채운 후 아래 <strong>AI 취합</strong> 버튼을 누르면 하나의 완성된 글이 정리되어 나옵니다. (복수 선택 가능)
        </p>
      </section>

      {FORM.map((section) => (
        <section className="wb-section" key={section.id}>
          <h2>{section.title}</h2>

          {section.groups.map((group) => (
            <div className="wb-group" key={group.title}>
              <p className="wb-group-title">
                {group.title}
                <span>{group.source}</span>
              </p>
              {group.fields.map((field) => (
                <div className="wb-field" key={field.id}>
                  <label className="wb-label" htmlFor={`f-${field.id}`}>
                    {field.label}
                  </label>
                  {field.note ? <span className="wb-note">{field.note}</span> : null}
                  {field.type === "chips" ? (
                    <div className="wb-chips" id={`f-${field.id}`} role="group" aria-label={field.label}>
                      {field.options.map((option) => {
                        const selectedChips = answers[field.id];
                        const isOn = Array.isArray(selectedChips) && selectedChips.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            className={isOn ? "wb-chip is-on" : "wb-chip"}
                            aria-pressed={isOn}
                            onClick={() => toggleChip(field.id, option)}
                          >
                            {option}
                          </button>
                        );
                      })}
                      <input
                        className={
                          textAnswer(answers, `${field.id}__etc`) ? "wb-chip-etc is-on" : "wb-chip-etc"
                        }
                        type="text"
                        maxLength={60}
                        aria-label={`${field.label} 직접 입력`}
                        placeholder="직접 입력"
                        value={typeof answers[`${field.id}__etc`] === "string" ? answers[`${field.id}__etc`] : ""}
                        onChange={(event) => setText(`${field.id}__etc`, event.target.value)}
                      />
                    </div>
                  ) : (
                    <input
                      id={`f-${field.id}`}
                      className={
                        typeof answers[field.id] === "string" && answers[field.id].trim()
                          ? "wb-input is-on"
                          : "wb-input"
                      }
                      type="text"
                      maxLength={120}
                      value={typeof answers[field.id] === "string" ? answers[field.id] : ""}
                      placeholder={field.placeholder}
                      onChange={(event) => setText(field.id, event.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}

      <div className="wb-actions">
        <div className="wb-actions-row">
          <button type="button" className="wb-run" onClick={compose} disabled={!answeredCount || status === "loading"}>
            {status === "loading" ? "취합 중…" : "AI 취합"}
          </button>
          <span className="wb-count">선택한 항목 {answeredCount}개</span>
          {answeredCount ? (
            <button type="button" className="wb-reset" onClick={reset}>
              전부 지우기
            </button>
          ) : null}
        </div>
        <p className="wb-hint">
          고르신 내용만으로 글을 씁니다. 없는 이야기는 지어내지 않으니, 담고 싶은 것은 꼭 골라주세요.
          취합에는 20초쯤 걸립니다.
        </p>
      </div>

      {result ? (
        <div className="wb-result">
          <div className="wb-result-head">
            <strong>완성된 작가 노트</strong>
            <button type="button" className="wb-copy" onClick={copyResult}>
              {copied ? "복사했습니다" : "전체 복사"}
            </button>
          </div>
          {notice ? <p className="wb-notice">{notice}</p> : null}
          <p className="wb-text">{result}</p>
        </div>
      ) : null}
    </div>
  );
}
