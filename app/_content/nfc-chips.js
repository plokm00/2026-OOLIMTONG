// 대형 울림통 세 기에 심은 NFC 칩 7개. 칩에는 https://ninnikkraft.vercel.app/nfc/<id> 주소를 쓴다(주소는 칩에 기록되므로 바꾸지 않는다).
// 칩마다 글자가 하나씩 나온다. 니닉크라프트의 코아·합주 다섯 칩을 모으면 "울림통변주", 나리움 두 칩까지 모으면 "니닉울림통변주".
// 주소 뒷부분을 무작위로 둔 것은 주소를 짐작해 칩을 찾지 않고도 글자를 모으는 일을 막기 위해서다.
// sections: 칩 페이지에 보여 줄 이야기 — story(작품 이야기) · people(만든 사람들) · process(만드는 과정).
// work: oolimtong-works.js 의 largeWorks id, team: team-sessions.js 의 팀 키.

export const nfcChips = [
  { id: "coa-7qk2", work: "coa", team: "gori", letter: "변", order: 1, sections: ["story", "process"] },
  { id: "coa-x9pd", work: "coa", team: "gori", letter: "주", order: 2, sections: ["people"] },
  { id: "coark-3vfh", work: "coark", team: "nemo", letter: "울", order: 1, sections: ["story"] },
  { id: "coark-k2wm", work: "coark", team: "nemo", letter: "림", order: 2, sections: ["people"] },
  { id: "coark-p8ra", work: "coark", team: "nemo", letter: "통", order: 3, sections: ["process"] },
  { id: "narium-6tjc", work: "narium", team: "miro", letter: "니", order: 1, sections: ["story", "process"] },
  { id: "narium-h4ne", work: "narium", team: "miro", letter: "닉", order: 2, sections: ["people"] },
];

// 니닉크라프트에 전시된 두 울림통(코아·합주)의 칩 — 다섯 글자를 모두 찾으면 전시장 지킴이에게 선물을 받는다.
export const MAIN_WORKS = ["coa", "coark"];

export const chipById = (id) => nfcChips.find((chip) => chip.id === id);
export const chipsOfWork = (work) => nfcChips.filter((chip) => chip.work === work);
