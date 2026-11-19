import LeafletPage from "../../_components/leaflet-page";
import { leafletPanels } from "../../_content/leaflet";

const url = "https://ninnikkraft.vercel.app/oolimtong_2026_wcf_leaflet";
const title = "리플렛 온라인 보기 — 울림통-변주 2026";
const description = "울림통-변주 2026 전시 리플렛을 한 면씩 온라인으로 봅니다.";

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: "website", url, title, description, images: [{ url: "/leaflet/leaflet-1.webp" }] },
};

export default function Page() {
  return <LeafletPage panels={leafletPanels} />;
}
