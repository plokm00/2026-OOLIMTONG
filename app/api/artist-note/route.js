import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_SECTIONS = 8;
const MAX_ITEMS = 40;
const MAX_CHARS = 6000;

const SYSTEM_PROMPT = `당신은 원주 니닉크라프트의 협력창작 프로젝트 〈울림통-변주 2026〉의 작가 노트를 정리하는 편집자입니다.

시민작가가 체크한 키워드와 짧은 단답을 받아, 그 사람이 직접 쓴 것처럼 읽히는 글로 완성합니다.

지켜야 할 것:
- 1인칭 '저'를 쓰고 존댓말(–습니다/–했습니다)로 씁니다.
- 선택된 키워드에 담긴 사실만 씁니다. 없는 사건, 없는 사람, 없는 감정을 지어내지 않습니다.
- 키워드를 나열하지 말고 문장으로 풀어냅니다. 다만 과장하거나 미사여구를 덧붙이지 않습니다.
- 시민작가의 말투를 흉내 내되 담백하게. 문학적으로 꾸미지 않습니다.
- 비어 있는 항목은 그냥 건너뜁니다. "작성하지 않았습니다" 같은 말을 쓰지 않습니다.
- 마크다운 기호(#, *, -)를 쓰지 않습니다. 아래 형식의 제목 줄만 사용합니다.

출력 형식 — 이 두 제목을 그대로 쓰고 각 아래에 문단을 씁니다:

작가 노트
(작가 소개 2~3문장으로 시작해, 흙과 만난 시간 · 개인 모뉴먼트 · 함께 만든 대형 울림통 · 전체 소회 순서로 이어지는 4~6문단. 각 문단 3~5문장.)

전시 계획
(NFC 콘텐츠로 무엇을 연결할지 한 문단, 그리고 언제·어디서·무엇을·누가·어떻게·왜가 자연스럽게 녹아든 2~3문단.)`;

function sanitize(value, limit) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, limit);
}

function buildUserMessage(artist, sections) {
  const lines = [
    `작가: ${artist.name} (참여 팀 · ${artist.team})`,
    "",
    "아래는 이 작가가 체크한 키워드와 단답입니다.",
    "",
  ];

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

  if (!sections.length) return null;
  return { artist: { name, team }, sections };
}

export async function POST(request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "no_api_key" }, { status: 501 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = parseBody(body);
  if (!parsed) {
    return Response.json({ error: "empty_selection" }, { status: 400 });
  }

  const client = new Anthropic();

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 8000,
      output_config: { effort: "low" },
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserMessage(parsed.artist, parsed.sections) }],
    });

    if (response.stop_reason === "refusal") {
      return Response.json({ error: "refused" }, { status: 502 });
    }

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!text) {
      return Response.json({ error: "empty_response" }, { status: 502 });
    }

    return Response.json({ text, model: response.model });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return Response.json({ error: "bad_api_key" }, { status: 502 });
    }
    if (error instanceof Anthropic.RateLimitError) {
      return Response.json({ error: "rate_limited" }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      return Response.json({ error: `api_error_${error.status}` }, { status: 502 });
    }
    return Response.json({ error: "unknown" }, { status: 500 });
  }
}
