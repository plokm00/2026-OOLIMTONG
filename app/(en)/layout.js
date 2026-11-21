// 방문 통계: Vercel Web Analytics(쿠키·DB를 쓰지 않는다). 페이지별 방문 수는 Vercel 프로젝트 화면의 Analytics 탭에서 본다.
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "NINNIK KRAFT",
  description: "Ninnik Kraft and the Oollimtong project archive",
};

export default function EnglishLayout({ children }) {
  return (
    <html lang="en" data-sky="teal">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
