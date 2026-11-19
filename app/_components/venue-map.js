// 울림통-변주 전시장소 지도 — 본 전시(문막)에서 17인의 모뉴먼트 전시장소로 뻗어 나가는 모습을 그린다.
// 실제 지도 타일 없이 위경도를 단순 투영한 점과 선만 쓴다(좌표는 OpenStreetMap 주소 검색으로 얻은 근삿값).
// current 에 지금 작가의 전시장소 이름을 넘기면 그 점을 파랗게 키우고 이름을 붙인다. who 는 범례의 "○○ 전시"에 쓸 이름.

const MAIN = { name: "니닉크라프트", lat: 37.3118, lon: 127.8216 };

export const VENUE_POINTS = [
  { name: "문막성당 로비", lat: 37.3124, lon: 127.82, nudge: [-9, -7] }, // 니닉크라프트와 100m 남짓이라 점이 겹치지 않게 살짝 옮긴다
  { name: "취병2리 마을회관", lat: 37.3372, lon: 127.773 },
  { name: "클라운지 2호점", lat: 37.3174, lon: 127.9217 },
  { name: "해피스토리", lat: 37.36, lon: 127.953 }, // 현충로 322번길 — 도로 위치로 잡은 근삿값
  { name: "예무아트컴퍼니 연습실", lat: 37.3424, lon: 127.9667 },
  { name: "카페 아이하다", lat: 37.3276, lon: 127.9787 },
  { name: "미쁘다 갤러리카페", lat: 37.3257, lon: 127.9853 },
  { name: "브런치카페 뜰", lat: 37.3316, lon: 127.9929 },
];

const AREAS = [
  { label: "원주 시내", lat: 37.372, lon: 127.945 },
  { label: "혁신도시", lat: 37.296, lon: 127.985 },
];

// 경도 1°가 위도 1°의 약 0.795배(북위 37°)라 그만큼 가로를 줄여 투영한다.
const W = 400;
const H = 190;
const LON0 = 127.752;
const LON1 = 128.012;
const LAT1 = 37.384;
const SX = (W - 20) / (LON1 - LON0);
const SY = SX / 0.795;
const px = (lon) => 10 + (lon - LON0) * SX;
const py = (lat) => 10 + (LAT1 - lat) * SY;

export default function VenueMap({ current, who }) {
  const mx = px(MAIN.lon);
  const my = py(MAIN.lat);
  const here = VENUE_POINTS.find((v) => v.name === current);
  const at = (v) => [px(v.lon) + (v.nudge?.[0] ?? 0), py(v.lat) + (v.nudge?.[1] ?? 0)];

  return (
    <figure className="xp-map">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`울림통-변주 전시장소 지도: 문막의 본 전시에서 원주 곳곳 ${VENUE_POINTS.length}곳의 모뉴먼트 전시장소로 이어진다${here ? `. 이 작가의 모뉴먼트는 ${here.name}` : ""}`}>
        {AREAS.map((a) => (
          <text key={a.label} x={px(a.lon)} y={py(a.lat)} className="xp-map-area" textAnchor="middle">{a.label}</text>
        ))}
        {VENUE_POINTS.map((v) => {
          const [x, y] = at(v);
          return <path key={`l-${v.name}`} d={`M${mx} ${my} Q ${(mx + x) / 2} ${Math.min(my, y) - 26} ${x} ${y}`} className={v === here ? "xp-map-line is-here" : "xp-map-line"} />;
        })}
        {VENUE_POINTS.map((v) => {
          const [x, y] = at(v);
          return <circle key={`p-${v.name}`} cx={x} cy={y} r={v === here ? 5.5 : 3.2} className={v === here ? "xp-map-dot is-here" : "xp-map-dot"} />;
        })}
        <circle cx={mx} cy={my} r="7" className="xp-map-main" />
        <text x={mx} y={my + 20} className="xp-map-label is-main" textAnchor="middle">본 전시 · 문막</text>
        {here ? (() => {
          const [x, y] = at(here);
          const right = x > W - 130;
          return (
            <text x={right ? x + 4 : x - 4} y={y + 19} className="xp-map-label is-here" textAnchor={right ? "end" : "start"}>{here.name}</text>
          );
        })() : null}
      </svg>
      <figcaption>
        <span><i className="xp-map-key is-main" />본 전시</span>
        {here ? <span><i className="xp-map-key is-here" />{who} 전시</span> : null}
        <span><i className="xp-map-key" />모뉴먼트 전시장소</span>
      </figcaption>
    </figure>
  );
}
