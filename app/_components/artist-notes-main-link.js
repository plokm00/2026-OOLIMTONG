"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const citizenTeams = [
  {
    name: "네모",
    members: [
      ["허양", "heoyang"], ["이재홍", "lee-jaehong"], ["조영범", "cho-youngbeom"], ["임계화", "im-gyehwa"], ["신정숙", "shin-jeongsuk"],
    ],
  },
  {
    name: "고리",
    members: [
      ["이채명", "lee-chaemyeong"], ["박수연", "park-suyeon"], ["박소연", "park-soyeon"], ["이안", "lee-an"], ["박진희", "park-jinhee"], ["이성순", "lee-seongsun"],
    ],
  },
  {
    name: "미로",
    members: [
      ["인동욱", "in-donguk"], ["민지현", "min-jihyeon"], ["조영범", "cho-youngbeom"], ["김주원", "kim-juwon"], ["김현국", "kim-hyeonguk"], ["이새롬", "lee-saerom"], ["주장석", "joo-jangseok"],
    ],
  },
];

export default function ArtistNotesMainLink() {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const minutes = document.getElementById("minutes");
    const artist = document.getElementById("artist");
    const universe = document.getElementById("universe");
    const overview = document.getElementById("overview");

    if (!minutes || !artist || !overview) return;

    document.querySelector(".cover-eyebrow").textContent = "COLLABORATIVE CREATION PROJECT · 2026";
    artist.before(minutes);
    minutes.before(overview);
    overview.querySelector(".section-label").textContent = "01 · Overview";
    minutes.querySelector(".section-label").textContent = "02 · OT Meeting";
    artist.querySelector(".section-label").textContent = "03 · Artists";

    if (universe) {
      const worldLabel = document.createElement("p");
      worldLabel.className = "artist-world-label";
      worldLabel.textContent = "KIM AH YOUNG'S NINNIK UNIVERSE";
      const worldHeading = document.createElement("h3");
      worldHeading.className = "artist-world-heading";
      worldHeading.textContent = "김아영 작가의 니닉 세계관";
      const worldLayout = universe.querySelector(".universe-layout");
      if (worldLayout) {
        artist.append(worldLabel, worldHeading, worldLayout);
      }
      universe.remove();
    }

    let citizenSlot = document.getElementById("citizen-artists");
    if (!citizenSlot) {
      citizenSlot = document.createElement("div");
      citizenSlot.id = "citizen-artists";
      artist.appendChild(citizenSlot);
    }

    const toc = document.querySelector("#toc .toc-grid");
    if (toc) {
      const order = ["overview", "minutes", "artist", "history", "curriculum", "gallery"];
      const items = new Map(
        Array.from(toc.querySelectorAll(".toc-item")).map((item) => [item.getAttribute("href").slice(1), item]),
      );
      items.get("universe")?.remove();
      order.forEach((id, index) => {
        const item = items.get(id);
        if (!item) return;
        item.querySelector(".toc-num").textContent = String(index + 1).padStart(2, "0");
        toc.appendChild(item);
      });
      const artistItem = items.get("artist");
      if (artistItem) {
        artistItem.querySelector(".toc-text h3").textContent = "작가 소개";
        artistItem.querySelector(".toc-text p").textContent = "김아영 니닉 작가 · 시민작가";
      }
    }

    document.querySelector("#history .section-label").textContent = "04 · History";
    document.querySelector("#curriculum .section-label").textContent = "05 · Curriculum";
    document.querySelector("#gallery .section-label").textContent = "06 · Field Records";
    [overview, minutes, artist, document.getElementById("history"), document.getElementById("curriculum"), document.getElementById("gallery")]
      .filter(Boolean)
      .forEach((section) => section.classList.add("project-hub-section"));

    const zoomNote = Array.from(minutes.querySelectorAll("p")).find((paragraph) =>
      paragraph.textContent.includes("줌 연결은"),
    );
    if (zoomNote) {
      zoomNote.textContent = "현장 진행에 집중하여 온라인 참여자에 대한 안내가 다소 미흡한 바 있음.";
    }

    setTarget(citizenSlot);
  }, []);

  if (!target) return null;

  return createPortal(
    <section className="citizen-artists-intro">
      <style>{`
        .project-hub-section { min-height:auto !important; padding:92px 60px !important; justify-content:flex-start !important; }
        .project-hub-section > .section-label { margin-bottom:12px !important; }
        .project-hub-section > .section-title { margin-bottom:42px !important; font-size:clamp(32px,4vw,48px) !important; }
        .artist-world-label { margin:64px 0 8px; padding-top:32px; border-top:1px solid var(--line); color:var(--accent); font-size:11px; font-weight:500; letter-spacing:.16em; }
        .artist-world-heading { margin:0 0 24px; color:var(--text); font-family:'IBM Plex Sans KR',sans-serif; font-size:clamp(27px,3.2vw,38px); line-height:1.25; }
        .citizen-artists-intro { min-height:auto !important; margin-top:64px; padding:32px 0 0 !important; border:0 !important; border-top:1px solid var(--line) !important; }
        .citizen-intro-copy { max-width:720px; margin:0 0 28px; color:var(--text-dim); font-size:15px; line-height:1.95; }
        .citizen-roster { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin:30px 0 26px; }
        .citizen-team { min-height:auto; display:block; padding:22px 20px; background:var(--bg2); border:0; }
        .citizen-team:nth-child(2) { background:var(--bg3); }
        .citizen-team-name { margin:0 0 13px; color:var(--accent); font-size:12px; font-weight:700; letter-spacing:.12em; }
        .citizen-names { display:flex; flex-wrap:wrap; gap:7px 12px; }
        .citizen-name { color:var(--text); font-size:14px; font-weight:600; text-decoration:none; border-bottom:1px solid transparent; }
        .citizen-name:hover, .citizen-name:focus-visible { color:var(--accent); border-color:var(--accent); outline:none; }
        @media (max-width:720px) { .project-hub-section { padding:64px 24px !important; } .project-hub-section > .section-title { margin-bottom:30px !important; } .citizen-roster { grid-template-columns:1fr; } }
      `}</style>
      <p className="section-label" style={{ marginBottom: 10 }}>Citizen Artists</p>
      <h3 className="artist-world-heading">시민작가</h3>
      <p className="citizen-intro-copy">
        서로 다른 일상과 시간을 살아온 17명의 시민작가는 흙을 매개로 자신의 이야기를 낯선 이들과 나누기 위해 이 프로젝트에 모였습니다. 손으로 무언가를 만들어 보고 싶어서, 공동 작업의 감각을 경험하고 싶어서, 혹은 삶의 한가운데에서 새로운 움직임을 찾고 싶어서 참여한 이들은 나이와 배경, 작업의 속도도 서로 다릅니다. 그 차이는 각자의 모뉴먼트와 세 개의 울림통 안에서 새로운 형태와 관계로 이어졌습니다.
      </p>
      <p className="citizen-intro-copy">
        아래 이름을 누르면 각 작가의 리뷰 인터뷰와 이후 작업계획을 담은 개인 작가 노트로 이동합니다.
      </p>
      <div className="citizen-roster" aria-label="시민작가 명단">
        {citizenTeams.map((team) => (
          <section className="citizen-team" key={team.name}>
            <p className="citizen-team-name">{team.name}</p>
            <div className="citizen-names">
              {team.members.map(([name, id]) => (
                <a className="citizen-name" href={`/oolimtong_2026_wcf_artists#${id}`} key={`${team.name}-${id}`}>
                  {name}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a
          href="/oolimtong_2026_wcf_artists"
          className="nav-manual-btn"
          style={{ fontSize: 12, padding: "8px 20px" }}
        >
          시민작가 파일 보기 ↗
        </a>
      </div>
    </section>,
    target,
  );
}
