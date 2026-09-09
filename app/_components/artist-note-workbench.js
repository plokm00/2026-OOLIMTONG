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
            label: "사는 지역과 요즘 하는 일 (공개 가능한 범위에서의 자기소개)",
            placeholder: "예) 원주에서 책과 관련된 일을 합니다",
          },
          {
            id: "motive",
            type: "chips",
            label: "울림통-변주에 참여하게 된 경로와 동기",
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
              "지역에서 열리는 작업이라서",
              "여럿이 함께 만드는 작업이 궁금해서",
            ],
          },
          {
            id: "life",
            type: "chips",
            label: "요즘 나는…",
            options: [
              "일이 바쁘다",
              "돌봄이 많다",
              "이제 좀 여유가 생겼다",
              "뭔가 새로 시작하고 싶다",
              "몸이 예전 같지 않다",
              "혼자 있는 시간이 많다",
              "조용한 시간이 필요하다",
              "일상에 변화가 필요하다",
              "사람들과 어울릴 시간이 필요하다",
            ],
          },
          {
            id: "distance",
            type: "chips",
            label: "흙과 나의 사이는…",
            options: [
              "흙은 이번이 처음",
              "아주 오래전에 해봤다",
              "도예를 배운 적 있다",
              "손으로 만드는 일은 익숙하다",
              "그림·공예 등 다른 분야 경험",
              "지금도 흙 작업을 하고 있다",
              "현역 작가이다",
            ],
          },
          {
            id: "wish",
            type: "chips",
            label: "이 작업이 끝난 뒤 나에게 남기를 바라는 것은…",
            options: [
              "계속 만드는 사람으로 남기",
              "내 이름이 걸린 작품",
              "같이한 사람들과의 인연",
              "손에 익은 감각",
              "가족에게 보여줄 것",
              "나를 위한 시간이었다는 기억",
              "내 이야기를 표현해 본 경험",
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
            label: "이 작업에서 처음 만진 흙은…",
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
              "거칠었다",
              "흙냄새가 인상적이었다",
            ],
          },
          {
            id: "whyClay",
            type: "chips",
            label: "흙이 울림통의 재료로 어울리는 이유는…",
            options: [
              "땅에서 나와 땅으로 돌아가서",
              "손자국이 그대로 남아서",
              "땅굴을 연상시켜서",
              "살아 있는 것 같아서",
              "누구나 만질 수 있어서",
              "굽지 않아 언젠가 사라져서",
              "여럿의 손이 한 형태로 이어져서",
            ],
          },
          {
            id: "resonance",
            type: "chips",
            label: "‘울림통’이라는 말에서 내가 떠올린 것은…",
            options: [
              "악기의 몸통",
              "기억을 담는 그릇",
              "사람이 모이는 방",
              "동굴 같은 공간",
              "가슴속 울림",
              "다른 세상으로 가는 통로",
              "사람 사이에 번지는 소리",
            ],
          },
          {
            id: "drawingChange",
            type: "chips",
            label: "완성된 모뉴먼트는 처음 드로잉에 비해…",
            exclusiveOptions: ["처음 드로잉이 잘 기억나지 않는다"],
            options: [
              "거의 그대로다",
              "더 단순해졌다",
              "더 커졌다",
              "완전히 달라졌다",
              "흙이 형태를 정해줬다",
              "만들면서 계속 바뀌었다",
              "더 복잡해졌다",
              "더 작아졌다",
              "처음 드로잉이 잘 기억나지 않는다",
            ],
          },
        ],
      },
      {
        title: "나의 모뉴먼트",
        source: "2–3 · 10회차",
        fields: [
          { id: "workName", type: "text", label: "내 모뉴먼트의 이름", placeholder: "예) 숨자리" },
          { id: "workMeaning", type: "textarea", label: "이름에 담은 뜻", placeholder: "예) 숨 돌리는 자리라는 뜻" },
          {
            id: "strange",
            type: "chips",
            label: "작업 중 난감했던 순간은…",
            options: [
              "반죽이 뜻대로 안 될 때",
              "갈라진 자국을 봤을 때",
              "마르는 속도가 빨랐을 때",
              "생각과 다른 형태가 나왔을 때",
              "너무 힘이 들 때",
              "무너질까 조마조마할 때",
              "특별히 난감한 순간은 없었다",
            ],
          },
          {
            id: "nfcWhy",
            type: "chips",
            label: "NFC 칩을 심은 자리를 고른 이유는…",
            options: [
              "손이 닿기 쉬워서",
              "눈에 잘 안 띄게 하고 싶어서",
              "심장 자리 같아서",
              "표면이 평평해서",
              "찾는 재미가 있으라고",
              "작가와 상의해 정해서",
              "작품 구조상 가능한 자리라서",
            ],
          },
          {
            id: "finish",
            type: "chips",
            label: "내 작품의 마무리 방법",
            options: [
              "손자국을 그대로 남겼다",
              "매끈하게 다듬었다",
              "반은 남기고 반은 다듬었다",
              "기름을 발라 색을 깊게 했다",
              "물감, 안료 등으로 색을 더했다",
              "갈라짐과 거친 표면을 그대로 살렸다",
              "마감하지 않고 맨흙 그대로 두었다",
              "아직 마무리 전이다",
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
            label: "내 타래가 옆 사람 타래와 이어질 때 나는…",
            options: [
              "뿌듯했다",
              "내 것이 사라지는 것 같았다",
              "든든했다",
              "신기했다",
              "조금 서운했다",
              "마음이 편안해졌다",
              "책임감이 생겼다",
              "처음에는 조금 어색했다",
              "별다른 느낌은 없었다",
            ],
          },
          {
            id: "favoriteWork",
            type: "chips",
            label: "나에게 편했던 작업은…",
            options: ["반죽하기", "타래 밀기", "타래 쌓기", "이음새 메우기", "돌로 다지기", "정리·보관", "이야기 나누기", "형태를 바라보고 기다리기", "아직 잘 모르겠다"],
          },
          {
            id: "mixOrMark",
            type: "chips",
            label: "내가 만든 부분은…",
            options: ["눈에 띄는 나만의 표현이 드러난다", "구분되면 좋겠다", "섞이는 게 좋다", "구분은 안 되지만 내가 안다", "상관없다"],
          },
          {
            id: "tamping",
            type: "chips",
            label: "돌로 벽을 다지던 시간은…",
            options: [
              "소리가 좋았다",
              "팔이 아팠다",
              "무늬가 예뻤다",
              "명상 같았다",
              "힘 조절이 어려웠다",
              "석회 실험이 재미있었다",
              "손에 전해지는 진동이 기억난다",
              "이 작업에는 충분히 참여하지 못했다",
            ],
          },
          {
            id: "scene",
            type: "chips",
            label: "작업 중에 기억에 남는 흥미로웠던 일은…",
            options: [
              "간식 · 새참 시간",
              "아이들의 흙놀이",
              "아이들이 찾아왔을 때",
              "자유체험 참여자들과의 만남",
              "재료와 도구 탐색",
              "손이 흙에 익어갈 때",
              "형태가 서기 시작할 때",
              "기름칠하기",
              "소리 녹음",
              "니닉어를 따라 하던 때",
              "작품에 대한 토론",
              "작품 이름 짓기",
              "서로의 작업 구경하기",
              "입구를 뚫던 날",
              "비 오던 날",
              "다 같이 웃던 순간",
              "완성한 날",
            ],
          },
          {
            id: "teamOpinion",
            type: "textarea",
            label: "울림통 작업 전반에 대한 의견",
            placeholder: "좋았던 점, 아쉬웠던 점, 바라는 점 무엇이든 좋습니다.",
          },
          {
            id: "teamName",
            type: "chips",
            label: "우리 팀 울림통에 {work} 라고 이름 붙일 때…",
            options: [
              "금방 정해졌다",
              "오래 논의해서 정했다",
              "누군가 제안한 말이 그대로 됐다",
              "여러 후보 중에 골랐다",
              "어떻게 정했는지 잘 모른다",
              "내 마음에 든다",
              "나는 다른 이름을 생각했었다",
            ],
          },
        ],
      },
      {
        title: "전체를 돌아보며",
        source: "6 · 11회차",
        fields: [
          {
            id: "hard",
            type: "chips",
            label: "가장 어려웠던 것은…",
            exclusiveOptions: ["특별히 없었다"],
            options: ["체력", "시간 내기", "흙의 성질", "높이 쌓기", "다 같이 정하기", "기다리는 일", "내 생각을 말로 꺼내기", "특별히 없었다"],
          },
          {
            id: "becameArtist",
            type: "chips",
            label: "‘작가가 되었다’고 느낀 순간은…",
            options: [
              "작품 이름을 지을 때",
              "내 작품이 혼자 서 있는 걸 봤을 때",
              "남에게 설명해줄 때",
              "처음 흙을 만졌을 때",
              "작품을 전시할 자리를 상상했을 때",
              "아직 잘 모르겠다",
            ],
            exclusiveOptions: ["아직 잘 모르겠다"],
          },
          {
            id: "returnToEarth",
            type: "chips",
            label: "굽지 않아 언젠가 흙으로 돌아간다는 것이…",
            options: [
              "아쉽다",
              "자연스럽다",
              "그래서 더 소중하다",
              "다시 만들면 된다",
              "사람도 그렇다는 생각이 든다",
              "생각해본 적 없다",
              "변해 가는 모습을 지켜보고 싶다",
            ],
          },
          { id: "nextTry", type: "textarea", label: "다음에 해보고 싶은 것", placeholder: "예) 우리 집 마당에 작은 울림통을 하나 만들어보고 싶습니다. / 이번에 못 해본 색 입히기를 해보고 싶습니다." },
          { id: "freeWord", type: "textarea", label: "그밖에 남기고 싶은 말", placeholder: "없다면 ‘없음’이라고 적어주세요." },
        ],
      },
    ],
  },
  {
    id: "plan",
    title: "NFC 콘텐츠 및 모뉴먼트 전시 계획",
    groups: [
      {
        title: "무엇을 · NFC 콘텐츠",
        source: "3 · 11회차",
        fields: [
          {
            id: "nfcContent",
            type: "chips",
            label: "칩에 연결하고 싶은 것은…",
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
              "관람객이 감상을 남기는 페이지",
              "아직 정하지 못했다",
            ],
            exclusiveOptions: ["아직 정하지 못했다"],
          },
          {
            id: "nfcAssets",
            type: "chips",
            label: "자료 준비 상황",
            options: ["작업 중 사진", "완성 사진", "영상", "녹음 파일", "손으로 쓴 글", "유튜브·블로그 등 링크 주소", "가지고 있는 자료를 확인해 봐야 한다", "아직 없다 (도움 필요)"],
            exclusiveOptions: ["아직 없다 (도움 필요)"],
          },
          {
            id: "nfcNeed",
            type: "chips",
            label: "자료를 준비하는 어려운 부분이나 필요한 것은…",
            options: [
              "사진 찍는 법을 모르겠다",
              "녹음 방법을 알고 싶다",
              "글로 옮기는 게 어렵다",
              "시간이 부족하다",
              "작가님 도움이 필요하다",
              "영상 편집이 어렵다",
              "저작권·초상권 확인이 필요하다",
              "특별히 어려운 점 없다",
            ],
            exclusiveOptions: ["특별히 어려운 점 없다"],
          },
          { id: "nfcNote", type: "textarea", label: "NFC 콘텐츠에 더 바라는 점", placeholder: "예) 휴대폰을 대면 제 목소리로 작품 이야기가 들렸으면 좋겠습니다. / 세 팀의 작품을 한 번에 볼 수 있으면 좋겠습니다." },
        ],
      },
      {
        title: "언제 · 어디서",
        source: "When · Where",
        fields: [
          {
            id: "when",
            type: "chips",
            label: "설치 기간은…",
            note: "〈울림통-변주〉 전시 기간 : 2026. 11. 21.(토) ~ 12. 13.(일)",
            options: ["전시 기간과 동일", "전시보다 일찍 시작해 기간 끝까지", "전시 이후에도 계속", "특정 날짜·주말에만", "아직 미정"],
          },
          {
            id: "where",
            type: "chips",
            label: "설치할 곳은…",
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
              "도서관·책방",
              "복지관·문화공간",
              "아직 미정",
            ],
          },
          { id: "whereDetail", type: "textarea", label: "구체적인 위치와 그곳의 환경", placeholder: "예) 공방 입구 안쪽, 길에서 보이고 비를 피할 수 있으며 장소 사용 허락을 받은 자리" },
        ],
      },
      {
        title: "누가",
        source: "Who",
        fields: [
          {
            id: "installWho",
            type: "chips",
            label: "설치하고 돌볼 사람은…",
            options: ["나 혼자", "가족과 함께", "직장 동료와", "이웃과", "장소 관리자와", "작가님 도움이 필요하다", "아직 정하지 못했다"],
            exclusiveOptions: ["아직 정하지 못했다"],
          },
          {
            id: "forWhom",
            type: "chips",
            label: "이 작품이 만났으면 하는 관람객은…",
            options: ["동네 사람들", "우리 손님들", "아이들", "지나가는 누구든", "가족", "같이 작업한 분들", "특정 대상을 정하지 않았다"],
            exclusiveOptions: ["특정 대상을 정하지 않았다"],
          },
        ],
      },
      {
        title: "어떻게",
        source: "How",
        fields: [
          {
            id: "whatWith",
            type: "chips",
            label: "작품과 함께 둘 것은…",
            options: ["나무 좌대", "돌 받침", "작품 설명 카드", "NFC 안내문", "QR 코드 안내", "고정 장치", "비·바람을 막는 덮개", "조명", "특별히 없음"],
            exclusiveOptions: ["특별히 없음"],
          },
          {
            id: "howPlace",
            type: "chips",
            label: "작품을 두는 방식은…",
            options: [
              "실내",
              "실외",
              "기간 내내 상시 배치",
              "아침에 내놓고 저녁에 수거",
              "영업시간에만 밖에",
              "주말에만",
              "날씨 보고 조절",
              "행사 시간에만",
              "보호 케이스 안에",
              "아직 미정",
            ],
            exclusiveOptions: ["아직 미정"],
          },
          {
            id: "howEvent",
            type: "chips",
            label: "관람객 안내·참여 방식",
            options: [
              "설명 카드 붙이기",
              "‘휴대폰을 대보세요’ 안내문",
              "방명록 두기",
              "공개 가능한 범위에서 SNS에 위치 안내",
              "여러 작품 돌아보기 지도",
              "작은 안내 카드 나누기",
              "별도 홍보 없이 자연스럽게 만나기",
            ],
          },
          { id: "howDetail", type: "textarea", label: "운영·관리 방법", placeholder: "예) 매일 10시~19시에 내놓고, 비 예보가 있거나 문을 닫을 때는 실내로 옮깁니다." },
        ],
      },
      {
        title: "왜",
        source: "Why",
        fields: [
          {
            id: "why",
            type: "chips",
            label: "그 자리에 두는 것은…",
            exclusiveOptions: ["아직 정하지 못했다"],
            options: [
              "사람들과 나누고 싶어서",
              "나에게 특별한 자리라서",
              "오가는 사람이 많아서",
              "아이들이 보면 좋겠어서",
              "우리 동네를 알리고 싶어서",
              "내 작업을 기록하고 싶어서",
              "매일 볼 수 있어서",
              "누군가 쉬어 가라고",
              "그 장소의 기억을 남기고 싶어서",
              "아직 정하지 못했다",
            ],
          },
          { id: "whyDetail", type: "textarea", label: "왜 이곳인지 한 문장으로", placeholder: "예) 지나가면서도 들어오지 못하던 분들에게 문 앞에서 먼저 말을 걸고 싶어서요. / 아직 미정" },
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

const MAX_RUNS = 5;

const ALL_FIELDS = FORM.flatMap((section) =>
  section.groups.flatMap((group) =>
    group.fields.map((field) => ({ field, groupTitle: group.title, sectionTitle: section.title })),
  ),
);

// 문항 라벨의 {work} 자리에 그 작가가 속한 팀의 작품명을 넣는다.
function makeLabelResolver(works) {
  const titles = works.length ? works.map((work) => `〈${work.title}〉`).join(" · ") : "우리 작품";
  return (field) => field.label.replace("{work}", titles);
}

function buildSections(answers, resolveLabel) {
  return FORM.map((section) => ({
    title: section.title,
    items: section.groups.flatMap((group) =>
      group.fields
        .map((field) => ({ label: `${group.title} — ${resolveLabel(field)}`, value: valueOf(answers, field) }))
        .filter((item) => item.value),
    ),
  })).filter((section) => section.items.length);
}

function composeLocally(artist, sections) {
  const lines = [
    `AI 취합이 연결되기 전이라, ${artist.name} 작가가 고르신 내용만 정리해 두었습니다. 연결되면 이 자리에 한 편의 글이 들어옵니다.`,
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

export default function ArtistNoteWorkbench({ artist, works = [] }) {
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState("");
  const [resultKind, setResultKind] = useState("");
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);
  const [aiConsent, setAiConsent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [usedCount, setUsedCount] = useState(0);

  const resolveLabel = useMemo(() => makeLabelResolver(works), [works]);
  const sections = useMemo(() => buildSections(answers, resolveLabel), [answers, resolveLabel]);
  const requiredFields = ALL_FIELDS.filter(({ field }) => !field.optional);
  const totalCount = requiredFields.length;
  const missingFields = useMemo(
    () => requiredFields.filter(({ field }) => !valueOf(answers, field)),
    [answers],
  );
  const answeredCount = totalCount - missingFields.length;

  const toggleChip = (field, option) => {
    setAnswers((prev) => {
      const current = Array.isArray(prev[field.id]) ? prev[field.id] : [];
      let next;

      if (current.includes(option)) {
        next = current.filter((item) => item !== option);
      } else if (field.single || field.exclusiveOptions?.includes(option)) {
        next = [option];
      } else {
        next = [
          ...current.filter((item) => !field.exclusiveOptions?.includes(item)),
          option,
        ];
      }

      return {
        ...prev,
        [field.id]: next,
        ...(field.single || field.exclusiveOptions?.includes(option)
          ? { [`${field.id}__etc`]: "" }
          : {}),
      };
    });
  };

  const setText = (fieldId, value) => {
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
  };

  const setOwnText = (field, value) => {
    setAnswers((prev) => {
      const current = Array.isArray(prev[field.id]) ? prev[field.id] : [];
      return {
        ...prev,
        [field.id]: value
          ? field.single
            ? []
            : current.filter((item) => !field.exclusiveOptions?.includes(item))
          : current,
        [`${field.id}__etc`]: value,
      };
    });
  };

  const compose = async () => {
    if (missingFields.length) {
      setAttempted(true);
      setNotice(`아직 답하지 않은 항목이 ${missingFields.length}개 있습니다. 41개를 모두 답해야 초안을 만들 수 있습니다.`);
      document.getElementById(`f-${missingFields[0].field.id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    if (!aiConsent) {
      setNotice("입력 내용을 외부 AI로 보내는 안내를 확인하고 동의에 체크해주세요.");
      return;
    }

    if (usedCount >= MAX_RUNS) {
      setNotice(`AI 초안 만들기는 ${MAX_RUNS}번까지 쓸 수 있습니다. 지금까지 만든 초안을 직접 고쳐 완성해주세요.`);
      return;
    }

    setUsedCount((count) => count + 1);

    setStatus("loading");
    setAttempted(false);
    setNotice("");
    setCopied(false);
    setResultKind("");

    try {
      const response = await fetch("/api/artist-note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artist: { name: artist.name, team: artist.team },
          works: works.map((work) => ({ team: work.team, title: work.title, note: work.note })),
          sections,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.text);
        setResultKind("ai");
        setStatus("done");
        return;
      }

      const data = await response.json().catch(() => ({}));
      setResult(composeLocally(artist, sections));
      setResultKind("local");
      setStatus("done");
      setNotice(
        data.error === "no_api_key"
          ? "AI 연결이 아직 켜지지 않아 선택 항목만 정리했습니다. 운영자가 서버에 ANTHROPIC_API_KEY를 설정하면 글 초안을 만들 수 있습니다."
          : data.error === "rate_limited"
            ? "짧은 시간에 요청이 많았습니다. 잠시 뒤 다시 시도해주세요."
          : "취합 중 문제가 생겨 선택 항목만 정리했습니다. 잠시 후 다시 눌러주세요.",
      );
    } catch {
      setResult(composeLocally(artist, sections));
      setResultKind("local");
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
    setResultKind("");
    setStatus("idle");
    setNotice("");
    setCopied(false);
    setAiConsent(false);
    setAttempted(false);
    setUsedCount(0);
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

        .wb-group { margin-top:42px; }
        .wb-group-title { display:flex; align-items:center; gap:9px; margin:0 0 6px; font-family:'IBM Plex Sans KR', sans-serif; font-size:17.5px; font-weight:600; color:var(--an-accent2); letter-spacing:-.01em; }
        .wb-group-title::before { content:''; flex:none; width:7px; height:7px; border-radius:50%; background:var(--an-accent); }
        .wb-group-title span { padding:2px 8px; border-radius:2px; background:#f2e7de; color:#9a7460; font-size:11px; font-weight:400; }

        .wb-field { margin-top:20px; }
        .wb-field.is-missing { margin-right:-12px; margin-left:-12px; padding:12px; border-left:3px solid #b9543c; background:#fff5f0; }
        .wb-label { display:block; margin-bottom:9px; color:var(--an-text); font-size:13.5px; font-weight:600; }
        .wb-required { margin-left:4px; color:#b9543c; }
        .wb-choice-note { margin-left:8px; color:var(--an-dim); font-size:11px; font-weight:400; }
        .wb-field-warn { display:block; margin-top:8px; color:#a5412b; font-size:12px; }
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
        .wb-textarea { min-height:88px; border-radius:10px; resize:vertical; }

        .wb-actions { margin-top:30px; padding:26px; border:1px solid var(--an-accent); background:var(--an-bg2); }
        .wb-actions-row { display:flex; flex-wrap:wrap; align-items:center; gap:14px; }
        .wb-run { padding:14px 26px; border:0; border-radius:2px; background:var(--an-accent); color:var(--an-bg); cursor:pointer; font:700 15px 'IBM Plex Sans KR', sans-serif; letter-spacing:.02em; }
        .wb-run:hover:enabled { background:var(--an-accent2); }
        .wb-run:disabled { background:var(--an-bg3); color:var(--an-dim); cursor:default; }
        .wb-count { color:var(--an-dim); font-size:13px; }
        .wb-runs { color:#a5412b; }
        .wb-reset { border:0; background:none; color:var(--an-dim); cursor:pointer; font:400 13px 'Noto Sans KR', sans-serif; text-decoration:underline; }
        .wb-hint { margin:12px 0 0; color:var(--an-dim); font-size:12.5px; line-height:1.65; }
        .wb-consent { display:flex; align-items:flex-start; gap:9px; margin:0 0 16px; color:var(--an-text); font-size:12.5px; line-height:1.65; }
        .wb-consent input { flex:none; width:16px; height:16px; margin:3px 0 0; accent-color:var(--an-accent); }
        .wb-consent strong { color:var(--an-accent2); }

        .wb-result { margin-top:26px; padding:40px 48px; border:1px solid var(--wb-paper-line); background:var(--wb-paper); box-shadow:0 2px 12px rgba(38,20,16,.05); }
        .wb-result-head { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; }
        .wb-result-head strong { color:var(--an-accent2); font-size:12px; font-weight:700; letter-spacing:.1em; }
        .wb-copy { padding:7px 14px; border:1px solid var(--an-line); border-radius:2px; background:var(--an-bg); color:var(--an-dim); cursor:pointer; font:400 12px 'Noto Sans KR', sans-serif; }
        .wb-copy:hover { border-color:var(--an-accent); color:var(--an-accent); }
        .wb-text { margin:0; color:var(--an-text); font-family:'Noto Sans KR', sans-serif; font-size:14.5px; line-height:1.85; white-space:pre-wrap; }
        .wb-notice { margin:0 0 14px; padding:11px 14px; background:var(--an-bg2); color:var(--an-dim); font-size:12.5px; line-height:1.65; }
        .wb-notice-inline { margin:14px 0 0; }

        @media (max-width:700px) { .wb-section { padding:26px 20px 24px; } .wb-section h2 { font-size:24px; } .wb-actions { padding:20px; } .wb-run { width:100%; } .wb-result { padding:24px 20px; } }
        @media print { .wb-section { break-inside:avoid; box-shadow:none; } .wb-actions { display:none; } }
      `}</style>

      <section className="wb-howto">
        <h2>작가 노트 작성 방법</h2>
        <p>
          41개 항목을 모두 답한 뒤 아래 <strong>AI 초안 만들기</strong>를 누르세요. 별도 표시가 없으면 복수 선택이 가능합니다.
          해당되는 보기가 없으면 <strong>직접 입력</strong>을 쓰고, 경험하지 않았거나 아직 정하지 못한 내용은 ‘없음·미정’ 보기를 골라주세요.
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
              {group.fields.map((field) => {
                const isMissing = attempted && !valueOf(answers, field);
                return (
                <div className={isMissing ? "wb-field is-missing" : "wb-field"} key={field.id}>
                  <label className="wb-label" htmlFor={`f-${field.id}`}>
                    {resolveLabel(field)}
                    {field.optional ? (
                      <span className="wb-choice-note">선택</span>
                    ) : (
                      <span className="wb-required" aria-label="필수">*</span>
                    )}
                    {field.single ? <span className="wb-choice-note">하나만 선택</span> : null}
                  </label>
                  {field.note ? <span className="wb-note">{field.note}</span> : null}
                  {field.type === "chips" ? (
                    <div className="wb-chips" id={`f-${field.id}`} role="group" aria-label={resolveLabel(field)}>
                      {field.options.map((option) => {
                        const selectedChips = answers[field.id];
                        const isOn = Array.isArray(selectedChips) && selectedChips.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            className={isOn ? "wb-chip is-on" : "wb-chip"}
                            aria-pressed={isOn}
                            onClick={() => toggleChip(field, option)}
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
                        aria-label={`${resolveLabel(field)} 직접 입력`}
                        placeholder="직접 입력"
                        value={typeof answers[`${field.id}__etc`] === "string" ? answers[`${field.id}__etc`] : ""}
                        onChange={(event) => setOwnText(field, event.target.value)}
                      />
                    </div>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={`f-${field.id}`}
                      className={
                        typeof answers[field.id] === "string" && answers[field.id].trim()
                          ? "wb-input wb-textarea is-on"
                          : "wb-input wb-textarea"
                      }
                      maxLength={300}
                      value={typeof answers[field.id] === "string" ? answers[field.id] : ""}
                      placeholder={field.placeholder}
                      onChange={(event) => setText(field.id, event.target.value)}
                    />
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
                  {isMissing ? <span className="wb-field-warn">이 항목에 답해주세요.</span> : null}
                </div>
                );
              })}
            </div>
          ))}
        </section>
      ))}

      <div className="wb-actions">
        <label className="wb-consent">
          <input
            type="checkbox"
            checked={aiConsent}
            onChange={(event) => setAiConsent(event.target.checked)}
          />
          <span>
            <strong>외부 AI 전송 안내를 확인했습니다.</strong> 입력 내용은 글 초안을 만들기 위해 Anthropic의 Claude API로 전송됩니다.
            이 사이트에는 답변을 저장하지 않으며, 정확한 주소·전화번호 같은 민감한 개인정보는 적지 마세요.
          </span>
        </label>
        <div className="wb-actions-row">
          <button type="button" className="wb-run" onClick={compose} disabled={status === "loading" || usedCount >= MAX_RUNS}>
            {status === "loading" ? "초안 만드는 중…" : "AI 초안 만들기"}
          </button>
          <span className="wb-count">답변 {answeredCount} / {totalCount}</span>
          <span className="wb-count wb-runs">
            초안 만들기 {usedCount} / {MAX_RUNS}회 — {MAX_RUNS}번까지 쓸 수 있습니다
          </span>
          {answeredCount ? (
            <button type="button" className="wb-reset" onClick={reset}>
              전부 지우기
            </button>
          ) : null}
        </div>
        <p className="wb-hint">
          답하신 내용만으로 초안을 쓰고, 없는 이야기는 지어내지 않습니다.
          41개 항목을 모두 답해야 만들 수 있으며 보통 20초 안팎이 걸립니다. 완성된 글은 반드시 본인이 읽고 고쳐주세요.
        </p>
        {notice && !result ? <p className="wb-notice wb-notice-inline">{notice}</p> : null}
      </div>

      {result ? (
        <div className="wb-result">
          <div className="wb-result-head">
            <strong>작가 노트 초안</strong>
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
