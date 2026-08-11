/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/en.html", destination: "/en", permanent: true },
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
