/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/artist-note/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/oolimtong_2026_wcf_artists/edit",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/en.html", destination: "/en", permanent: true },
      // 원주문화재단 공연 게시물(no=3613)의 링크 끝에 공백+폭 없는 공백이 붙어 있음.
      // 재단 게시물이 고쳐지면 지운다. 임시 리디렉트라 브라우저에 오래 남지 않는다.
      ...["/artist%20%E2%80%8B", "/artist ​"].map((source) => ({
        source,
        destination: "/artist",
        permanent: false,
      })),
      {
        source: "/ninnikkraft_workshop_children",
        destination: "/children_workshop",
        permanent: true,
      },
      ...[
        "children_workshop",
        "oolimtong_2026_ipo",
        "oolimtong_2026_wcf",
        "oolimtong_2026_wcf_assistant",
        "oolimtong_2026_wcf_artists",
        "oolimtong_2026_wcf_book",
        "oolimtong_2026_wcf_curriculum",
        "oolimtong_2026_wcf_record",
        "oolimtong_archive",
        "oolimtong_manual",
      ].map((route) => ({
        source: `/${route}.html`,
        destination: `/${route}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
