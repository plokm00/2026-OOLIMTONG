// 방문 통계: Vercel Web Analytics(쿠키·DB를 쓰지 않는다). 페이지별 방문 수는 Vercel 프로젝트 화면의 Analytics 탭에서 본다.
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "울림통 아카이브",
  description: "니닉크라프트와 울림통 프로젝트 아카이브",
};

export default function KoreanLayout({ children }) {
  return (
    <html lang="ko" data-sky="teal">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
