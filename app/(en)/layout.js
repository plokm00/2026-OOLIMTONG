export const metadata = {
  title: "NINNIK KRAFT",
  description: "Ninnik Kraft and the Oollimtong project archive",
};

export default function EnglishLayout({ children }) {
  return (
    <html lang="en" data-sky="teal">
      <body>{children}</body>
    </html>
  );
}
