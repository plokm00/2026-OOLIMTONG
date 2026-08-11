import PageScripts from "./page-scripts";

export default function StaticDocumentPage({ page }) {
  const dataScripts = page.scripts.filter(
    (script) => String(script.attributes.type).toLowerCase() === "application/json",
  );
  const executableScripts = page.scripts.filter(
    (script) => String(script.attributes.type).toLowerCase() !== "application/json",
  );

  return (
    <>
      {page.stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      {page.styles.map((css, index) => (
        <style
          key={`page-style-${index}`}
          dangerouslySetInnerHTML={{ __html: css }}
        />
      ))}
      <div
        className="next-document-content"
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: page.body }}
      />
      {dataScripts.map((script, index) => (
        <script
          key={script.attributes.id ?? `page-data-${index}`}
          id={script.attributes.id}
          type="application/json"
          dangerouslySetInnerHTML={{ __html: script.content }}
        />
      ))}
      <PageScripts scripts={executableScripts} />
    </>
  );
}
