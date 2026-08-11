import StaticDocumentPage from "../../_components/static-document-page";
import pageData from "../../_content/oolimtong-2026-wcf";

export const metadata = pageData.metadata;

export default function Page() {
  return <StaticDocumentPage page={pageData} />;
}
