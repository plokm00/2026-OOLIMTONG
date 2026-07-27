export const metadata = {
  title: "울림통 아카이브",
  description: "니닉크라프트 울림통 프로젝트 아카이브",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
