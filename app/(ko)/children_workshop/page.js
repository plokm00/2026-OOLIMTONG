import StaticDocumentPage from "../../_components/static-document-page";
import pageData from "../../_content/children-workshop";

export const metadata = pageData.metadata;

export default function Page() {
  return <StaticDocumentPage page={pageData} />;
}
