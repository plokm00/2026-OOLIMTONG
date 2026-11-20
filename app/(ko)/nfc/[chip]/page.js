import { notFound } from "next/navigation";

import NfcChipPage from "../../../_components/nfc-chip-page";
import { chipById, nfcChips } from "../../../_content/nfc-chips";

// 대형 울림통에 심은 NFC 칩 7개의 주소만 연다. 그 밖의 주소는 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return nfcChips.map((chip) => ({ chip: chip.id }));
}

// 칩을 찾아야 열리는 페이지라 검색에는 내보내지 않는다.
export const metadata = {
  title: "NFC 숨바꼭질 — 울림통-변주 2026",
  description: "울림통에 숨은 NFC 칩을 찾았어요.",
  robots: { index: false, follow: false },
};

export default async function Page({ params }) {
  const { chip: id } = await params;
  const chip = chipById(id);
  if (!chip) notFound();
  return <NfcChipPage chip={chip} />;
}
