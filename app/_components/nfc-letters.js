"use client";

// NFC 칩 페이지의 "모은 글자" — 이 휴대전화로 찾은 칩의 글자를 찾은 순서대로 칸에 채운다.
// 글자는 이 기기의 브라우저 저장소에만 남는다(서버로 보내지 않는다). 저장소를 쓸 수 없으면 지금 칩의 글자만 보여 준다.
// 찾은 순서대로 늘어놓을 뿐 낱말의 순서는 알려 주지 않는다 — 글자를 이어 낱말을 만드는 것은 관람객의 몫이다.

import { useEffect, useState } from "react";

const KEY = "oolimtong-nfc-letters";

function read() {
  try {
    const list = JSON.parse(window.localStorage.getItem(KEY) || "[]");
    return Array.isArray(list) ? list.filter((item) => item && item.id && item.letter) : [];
  } catch {
    return [];
  }
}

export default function NfcLetters({ chip, main, mainTotal, extraTotal, extraName }) {
  const here = { id: chip.id, letter: chip.letter, main };
  const [found, setFound] = useState([here]);

  useEffect(() => {
    const list = read();
    if (!list.some((item) => item.id === here.id)) list.push(here);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(list));
    } catch {
      // 저장하지 못해도 지금 칩의 글자는 보인다.
    }
    setFound(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chip.id]);

  const mainFound = found.filter((item) => item.main);
  const extraFound = found.filter((item) => !item.main);
  const mainDone = mainFound.length >= mainTotal;
  const allDone = mainDone && extraFound.length >= extraTotal;

  const slots = (items, total) =>
    Array.from({ length: total }, (_, i) => {
      const item = items[i];
      return (
        <li key={i} className={item ? (item.id === chip.id ? "is-here" : "is-found") : ""}>
          {item ? item.letter : ""}
        </li>
      );
    });

  return (
    <section className="nc-bag" aria-label="모은 글자">
      <h2 className="nc-h">모은 글자</h2>
      <p className="nc-bag-label">니닉크라프트의 두 울림통 <span>{Math.min(mainFound.length, mainTotal)} / {mainTotal}</span></p>
      <ol className="nc-slots">{slots(mainFound, mainTotal)}</ol>
      <p className="nc-bag-label">{extraName} <span>{Math.min(extraFound.length, extraTotal)} / {extraTotal}</span></p>
      <ol className="nc-slots is-extra">{slots(extraFound, extraTotal)}</ol>
      <p className="nc-bag-note">
        {allDone
          ? "일곱 글자를 모두 찾았어요! 글자를 이어 숨은 낱말을 완성해 보세요."
          : mainDone
          ? "다섯 글자를 모두 찾았어요! 글자를 이어 만든 낱말을 전시장 지킴이에게 알려 주세요. 작은 선물을 드립니다."
          : `니닉크라프트의 두 울림통에 숨은 칩 ${mainTotal}개를 모두 찾으면, 글자를 이어 만든 낱말을 전시장 지킴이에게 알려 주세요.`}
      </p>
      {!allDone ? <p className="nc-bag-sub">{extraName}에 숨은 두 글자까지 모으면 일곱 글자 낱말이 됩니다.</p> : null}
    </section>
  );
}
