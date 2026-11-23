// 전시장소 지도(venue-map.js)의 모양 — 작가 개인 페이지와 17인 목록 페이지가 같은 지도를 쓰므로 한곳에 둔다.
// 색 변수(--xp-navy·--xp-blue·--xp-green·--xp-text·--xp-dim·--xp-soft)는 각 페이지 CSS의 :root 에 있다.

export const VENUE_MAP_CSS = `
  .xp-map { margin:0; }
  .xp-map-box { position:relative; z-index:0; height:300px; background:var(--xp-soft); }
  .xp-map .leaflet-container { font-family:'Noto Sans KR', sans-serif; }
  .xp-map .leaflet-control-attribution { font-size:9.5px; }
  .xp-map .leaflet-tile-pane { filter:grayscale(1) brightness(1.06) contrast(.88); opacity:.85; }
  .vm-tip { padding:2px 7px; border:0; border-radius:2px; box-shadow:0 1px 3px rgba(23,20,90,.18); color:var(--xp-navy); font-size:12px; font-weight:700; }
  .vm-tip.is-here { background:var(--xp-blue); color:#fff; }
  .vm-tip.is-here::before { border-top-color:var(--xp-blue); }
  .vm-tip.is-main { color:var(--xp-green); }
  .vm-pop { min-width:190px; color:var(--xp-text); font-family:'Noto Sans KR', sans-serif; }
  .vm-pop p { margin:0; }
  .vm-kind { color:var(--xp-blue); font-size:11.5px; font-weight:700; }
  .vm-kind.is-main { color:var(--xp-green); }
  .vm-name { margin-top:2px !important; color:var(--xp-navy); font-family:'Museum Classic','Noto Sans KR',sans-serif; font-size:18px; font-weight:700; line-height:1.3; }
  .vm-artists { margin:8px 0 0; padding:0; list-style:none; font-size:13.5px; line-height:1.7; }
  .vm-artists a { color:var(--xp-navy); font-weight:700; text-decoration:none; border-bottom:1px solid #c9d6ee; }
  .vm-artists span { color:var(--xp-dim); }
  .vm-when, .vm-addr { margin-top:6px !important; color:var(--xp-dim); font-size:12.5px; line-height:1.55; }
  .vm-addr { margin-top:2px !important; }
  .vm-links { display:flex; flex-wrap:nowrap; gap:14px; margin-top:10px !important; white-space:nowrap; }
  .vm-links a { display:inline-flex; align-items:center; gap:3px; color:var(--xp-blue); font-size:12.5px; font-weight:700; text-decoration:none; }
  .vm-links .vm-pin { width:9px; height:12px; flex:none; margin-top:-1px; }
  .xp-map figcaption { display:flex; flex-wrap:wrap; gap:4px 14px; margin-top:10px; color:var(--xp-dim); font-size:12px; }
  .xp-map-key { display:inline-block; width:8px; height:8px; margin-right:5px; border-radius:50%; background:var(--xp-navy); opacity:.55; vertical-align:1px; }
  .xp-map-key.is-main { background:var(--xp-green); opacity:1; }
  .xp-map-key.is-here { background:var(--xp-blue); opacity:1; }
  .xp-map-note { margin:8px 0 0; padding:8px 11px; border-radius:6px; background:#fff6dd; color:#5a4a12; font-size:12.5px; line-height:1.55; word-break:keep-all; }
`;
