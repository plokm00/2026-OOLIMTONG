export const metadata = {
  title: "Next.js 실행 상태",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FrameworkStatusPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p>울림통 아카이브가 Next.js에서 실행 중입니다.</p>
    </main>
  );
}
