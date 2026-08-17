import StaticDocumentPage from "../../_components/static-document-page";
import RecordArtistLinks from "../../_components/record-artist-links";
import pageData from "../../_content/oolimtong-2026-wcf-record";

export const metadata = pageData.metadata;

export default function Page() {
  return (
    <>
      <StaticDocumentPage page={pageData} />
      <RecordArtistLinks />
    </>
  );
}
