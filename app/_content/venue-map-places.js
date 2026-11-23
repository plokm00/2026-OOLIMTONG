// 울림통-변주 전시장소 지도에 찍을 장소 — 작가 개인 페이지와 17인 목록 페이지가 함께 쓴다.
import { artistPages } from "./artist-pages";
import { VENUE_POINTS } from "./venue-points";

export const MAIN_SHOW = {
  title: "김아영 외 17인의 시민작가 본 전시",
  period: "2026.11.21. ~ 12.13.",
  hours: "매일 11:00 – 17:00",
  // 본 전시 두 곳은 김아영 작가가 직접 연락을 받는다.
  phone: "010-3570-1661",
  places: [
    { name: "니닉크라프트", address: "원주시 문막읍 원문로 1734-15" },
    { name: "하나어린이집 야외 공터", address: "원주시 문막읍 작은애니길 38-8" },
  ],
};

// 지도에 찍을 장소 — 본 전시 두 곳과, 17인의 모뉴먼트 전시장소(같은 장소의 작가는 한 점에 모은다).
// 좌표가 없는 장소(작가 개인 공간)는 지도에 넣지 않는다.
export const MAP_PLACES = (() => {
  const main = MAIN_SHOW.places
    .filter((place) => VENUE_POINTS[place.name])
    .map((place) => ({ ...place, main: true, point: VENUE_POINTS[place.name], period: MAIN_SHOW.period, hours: MAIN_SHOW.hours, phone: MAIN_SHOW.phone }));
  const byName = new Map();
  for (const artist of artistPages) {
    const venue = artist.profile?.venue;
    if (!venue?.name || !VENUE_POINTS[venue.name]) continue;
    if (!byName.has(venue.name)) {
      byName.set(venue.name, { name: venue.name, address: venue.address, phone: venue.phone, period: venue.period, hours: venue.hours, point: VENUE_POINTS[venue.name], artists: [] });
    }
    byName.get(venue.name).artists.push({ name: artist.name, work: artist.profile.workTitle });
  }
  return [...main, ...byName.values()];
})();
