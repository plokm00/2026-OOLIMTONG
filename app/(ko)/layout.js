export const metadata = {
  title: "울림통 아카이브",
  description: "니닉크라프트와 울림통 프로젝트 아카이브",
};

export default function KoreanLayout({ children }) {
  return (
    <html lang="ko" data-sky="teal">
      <body>{children}</body>
    </html>
  );
}
