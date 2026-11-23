"use client";

// 17인 목록 — '리플렛 온라인 보기' 옆 '전시 관람 안내' 버튼. 누르면 바로 아래에 안내 카드가 펼쳐진다(새 페이지 없이).
// 내용은 전시장에 붙인 관람 안내 인쇄물(deliverables/signage/관람안내_NFC숨바꼭질_A4가로.pdf)과 같다.

import { useState } from "react";

const DO = [
  "울림통은 온몸으로 체험할 수 있는 작품입니다.",
  "기대거나 올라타도 괜찮습니다.",
  <>울림통을 빚을 때는 마르지 않도록 비닐을 덮어 둡니다. 흙에게 비닐 속은 엄마의 뱃속처럼 안전하고 따스한 곳,<br />우리도 이 <b>울림통 인큐베이터</b> 안에 머물러 봅니다.</>,
];

const CARE = [
  "어린이는 반드시 보호자와 함께 체험해 주세요.",
  "한 번에 한 명씩 들어가 주세요. 작은 어린이는 두세 명까지 함께 들어가도 괜찮습니다.",
  "딱딱하거나 뾰족한 물건으로 두드리거나 긁지 말아 주세요.",
  "드나들 때 머리가 부딪히지 않도록 조심하세요.",
  "비닐은 작품을 지키는 집입니다. 들추거나 밀지 마세요.",
  <>사진과 영상은 자유롭게 찍으셔도 좋습니다.<br /><b>#울림통변주 #니닉크라프트</b></>,
  "QR코드로 여는 작가 페이지에서는 배경음악이 나옵니다. 소리 크기에 주의해 주세요.",
];

const CHIPS = [
  { n: 2, name: "〈COA(코아)〉" },
  { n: 3, name: "〈Co-Ark(합주)〉" },
  { n: 2, name: "〈NARIUM(나리움)〉" },
];

// show: 본 전시 정보(MAIN_SHOW). 개인 번호는 글자로 드러내지 않고 "전화하기" 버튼으로만 건다.
export default function VisitGuide({ show }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="xi-btns">
        <a className="xi-leaflet" href="/oolimtong_2026_wcf_leaflet">리플렛 온라인 보기 →</a>
        <button
          type="button"
          className={open ? "xi-leaflet is-on" : "xi-leaflet"}
          aria-expanded={open}
          aria-controls="xi-guide"
          onClick={() => setOpen((v) => !v)}
        >
          전시 관람 안내 {open ? "−" : "+"}
        </button>
      </div>
      {open ? (
        <div className="xi-guide" id="xi-guide">
          {show ? (
            <dl className="xi-show">
              <dt>본 전시</dt>
              <dd>
                <b>{show.places.map((place) => place.name).join(" · ")}</b> (문막)
                <span>{show.period} · {show.hours}</span>
              </dd>
              <dt>모뉴먼트</dt>
              <dd>원주 곳곳 · 장소마다 기간이 달라요 <a href="#xi-map-title">지도 보기 ↓</a></dd>
              {show.phone ? (
                <>
                  <dt>문의</dt>
                  <dd>김아영 작가 <a href={`tel:${show.phone.replace(/[^0-9]/g, "")}`}>전화하기 ↗</a></dd>
                </>
              ) : null}
            </dl>
          ) : null}
          <section>
            <h3>관람 안내</h3>
            <h4 className="is-green">이렇게 해 보세요!</h4>
            <ul>{DO.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <h4 className="is-blue">주의하세요!</h4>
            <ul>{CARE.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </section>
          <section>
            <h3>NFC 숨바꼭질</h3>
            <p className="xi-guide-lead">세 울림통 어딘가에 NFC 칩 7개가 숨어 있습니다.</p>
            <ol className="xi-chips">
              {CHIPS.map((chip) => (
                <li key={chip.name}><b>{chip.n}</b>{chip.name}</li>
              ))}
            </ol>
            <p>휴대전화 뒷면을 울림통 표면에 가까이 대고 천천히 움직여 보세요. 칩을 찾으면 그 안에 담긴 이야기가 화면에 열립니다.</p>
            <p className="xi-guide-small">* 화면 잠금을 풀어야 작동합니다. 기종에 따라 설정에서 NFC를 켜 주세요.</p>
            <div className="xi-guide-box">
              <h4 className="is-green">다섯 글자를 모아 보세요</h4>
              <p>니닉크라프트에 전시된 두 울림통에서 칩 5개를 모두 찾으셨나요? 화면에 나타난 글자 다섯 개를 모아 만든 낱말을 전시장 지킴이에게 알려 주세요. 작은 선물을 드립니다.</p>
              <p className="xi-guide-small">* 수량 한정</p>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
