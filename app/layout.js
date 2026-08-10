export const metadata = {
  title: "울림통 아카이브",
  description: "니닉크라프트 울림통 프로젝트 아카이브",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 스크롤바가 생겼다 사라져도 화면이 좌우로 흔들리지 않게 자리를 미리 비워 둡니다. */}
        <style>{"html{overflow-y:scroll;scrollbar-gutter:stable}"}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
