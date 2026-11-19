"use client";

// 울림통-변주 전시장소 지도 — 실제 지도(OpenStreetMap 타일, Leaflet) 위에
// 문막의 본 전시에서 원주 곳곳의 모뉴먼트 전시장소로 점선이 뻗어 나간다.
// 점을 누르면 그 장소의 전시 정보(작가·작품·기간·주소)와 네이버 지도·카카오맵·구글 지도 링크가 팝업으로 뜬다.
// current: 지금 작가의 전시장소 이름 — 그 점만 파랗게 키운다. who: 범례의 "○○ 전시"에 쓸 이름.
// 지도 라이브러리는 브라우저에서만 불러오고, 그 전(과 자바스크립트가 꺼진 경우)에는 빈 바탕만 보인다.

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const COLORS = { navy: "#17145a", blue: "#1596d8", green: "#169a52" };

const esc = (text) => String(text ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function mapLinks(place) {
  const [lat, lon] = place.point;
  const kakao = `https://map.kakao.com/link/map/${encodeURIComponent(place.name)},${lat},${lon}`;
  const query = place.address ? `원주시 ${place.address.replace(/^원주시\s*/, "").split(",")[0]}` : `${lat},${lon}`;
  const google = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const naver = `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
  return `<p class="vm-links"><a href="${naver}" target="_blank" rel="noopener">네이버 지도 ↗</a><a href="${kakao}" target="_blank" rel="noopener">카카오맵 ↗</a><a href="${google}" target="_blank" rel="noopener">구글 지도 ↗</a></p>`;
}

function popupHtml(place) {
  const head = place.main
    ? `<p class="vm-kind is-main">김아영 외 17인의 시민작가 본 전시</p>`
    : `<p class="vm-kind">모뉴먼트 전시</p>`;
  const artists = (place.artists ?? [])
    .map((a) => `<li><a href="/artist/${encodeURIComponent(a.name)}">${esc(a.name)}</a> <span>〈${esc(a.work)}〉</span></li>`)
    .join("");
  const when = [place.period, place.hours].filter(Boolean).join(" · ");
  return `<div class="vm-pop">${head}<p class="vm-name">${esc(place.name)}</p>${artists ? `<ul class="vm-artists">${artists}</ul>` : ""}${when ? `<p class="vm-when">${esc(when)}</p>` : ""}${place.address ? `<p class="vm-addr">${esc(place.address)}</p>` : ""}${mapLinks(place)}</div>`;
}

export default function VenueMap({ places, current, who }) {
  const box = useRef(null);

  useEffect(() => {
    let map;
    let resizeObserver;
    let cancelled = false;
    import("leaflet").then(({ default: L }) => {
      if (cancelled || !box.current) return;
      const touch = window.matchMedia("(pointer:coarse)").matches;
      map = L.map(box.current, {
        scrollWheelZoom: false,
        // 휴대폰에서는 한 손가락 끌기가 페이지 스크롤을 막지 않도록 지도 끌기를 끄고 두 손가락 확대만 둔다
        dragging: !touch,
        zoomControl: true,
      });
      // 점을 올리기 전에 먼저 화면 범위를 정해야 벡터 레이어가 그려진다.
      // 글꼴·격자 배치가 끝나기 전에 재면 지도 크기를 잘못 알아 엉뚱한 곳을 비추므로, 상자 크기가 바뀔 때마다 다시 맞춘다.
      const bounds = L.latLngBounds(places.map((p) => p.point));
      // 지금 작가의 장소 이름표가 점 위 가운데에 붙으므로, 가장자리 점이어도 이름표가 잘리지 않게 좌우·위 여백을 넉넉히 둔다
      const pad = { paddingTopLeft: [80, 46], paddingBottomRight: [80, 24] };
      const fit = () => { map.invalidateSize(); map.fitBounds(bounds, pad); };
      map.fitBounds(bounds, pad);
      let lastWidth = box.current.clientWidth;
      resizeObserver = new ResizeObserver(() => {
        const width = box.current?.clientWidth ?? 0;
        if (width && width !== lastWidth) { lastWidth = width; fit(); }
      });
      resizeObserver.observe(box.current);
      requestAnimationFrame(fit);
      // OpenStreetMap 기본 타일(키 없이 쓸 수 있다). 색은 CSS(.xp-map .leaflet-tile-pane)로 옅은 회색조로 눌러 홍보물 색이 돋보이게 한다.
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
      }).addTo(map);

      const hub = places.find((p) => p.main)?.point;
      if (hub) {
        for (const place of places) {
          if (place.main) continue;
          const here = place.name === current;
          L.polyline([hub, place.point], {
            color: COLORS.blue, weight: here ? 2.4 : 1.2, opacity: here ? 0.9 : 0.5, dashArray: here ? null : "3 5", interactive: false,
          }).addTo(map);
        }
      }
      const markers = places.map((place) => {
        const here = place.name === current;
        const marker = L.circleMarker(place.point, {
          radius: place.main || here ? 9 : 6.5,
          color: "#fff",
          weight: 2.5,
          fillColor: place.main ? COLORS.green : here ? COLORS.blue : COLORS.navy,
          fillOpacity: place.main || here ? 1 : 0.7,
        })
          .bindPopup(popupHtml(place), { maxWidth: 260, autoPanPaddingTopLeft: [52, 16], autoPanPaddingBottomRight: [16, 16] })
          .addTo(map);
        if (here) {
          marker.bindTooltip(place.name, { direction: "top", offset: [0, -8], permanent: true, className: "vm-tip is-here" });
        } else {
          marker.bindTooltip(place.name, { direction: "top", offset: [0, -6], className: place.main ? "vm-tip is-main" : "vm-tip" });
        }
        return marker;
      });
      markers.forEach((m, i) => { if (places[i].name === current) m.bringToFront(); });
    });
    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      map?.remove();
    };
  }, [places, current]);

  const hasHere = places.some((p) => p.name === current);
  return (
    <figure className="xp-map">
      <div ref={box} className="xp-map-box" role="region" aria-label="울림통-변주 전시장소 지도. 점을 누르면 그 장소의 전시 정보가 뜹니다." />
      <figcaption>
        <span><i className="xp-map-key is-main" />본 전시</span>
        {hasHere ? <span><i className="xp-map-key is-here" />{who} 전시</span> : null}
        <span><i className="xp-map-key" />모뉴먼트 전시장소 — 점을 누르면 전시 정보</span>
      </figcaption>
    </figure>
  );
}
