// Generated from en.html during the Next.js route migration.
const pageData = {
  "metadata": {
    "title": "NINNIK KRAFT",
    "description": "Ninnik Kraft, GAYA Kim Ah Young’s Munmak studio and imaginary world Ninnik, with the Oollimtong archive and children’s workshop.",
    "alternates": {
      "languages": {
        "ko": "/",
        "en": "/en"
      }
    }
  },
  "styles": [],
  "stylesheets": [
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap",
    "/landing-kraft.css"
  ],
  "body": "<canvas id=\"cosmos\" class=\"cosmos\" aria-hidden=\"true\"></canvas>\r\n<main class=\"page\">\r\n  <header class=\"masthead\">\r\n    <div class=\"title-wrap\">\r\n      <h1 class=\"visually-hidden\">NINNIK KRAFT</h1>\r\n      <span class=\"brand-void\" aria-hidden=\"true\"><canvas class=\"brand-void-sky\"></canvas></span>\r\n      <img class=\"brand-logo\" src=\"ninnik-kraft-logo.svg\" alt=\"NINNIK KRAFT\">\r\n      <span class=\"brand-credit\">© GAYA KIM AH YOUNG</span>\r\n    </div>\r\n    <div class=\"header-tools\">\r\n      <nav class=\"header-links\" aria-label=\"Ninnik Kraft external links\">\r\n        <a href=\"https://instagram.com/ninnik_kraft\" target=\"_blank\" rel=\"noopener noreferrer\">Instagram</a>\r\n        <a href=\"https://www.youtube.com/@Ninnik_kraft\" target=\"_blank\" rel=\"noopener noreferrer\">YouTube</a>\r\n      </nav>\r\n      <nav class=\"language-switch\" aria-label=\"Language\">\r\n        <a href=\"/\" lang=\"ko\">KR</a>\r\n        <a href=\"/en\" aria-current=\"page\">EN</a>\r\n      </nav>\r\n    </div>\r\n\r\n    <span class=\"sky-nodes\" role=\"group\" aria-label=\"Choose a space background\">\r\n      <button class=\"sky-node sky-node--kraft\" type=\"button\" data-sky-pick=\"kraft\" aria-pressed=\"false\" aria-label=\"kraft starfield\">\r\n        <span class=\"sky-node-caption\" aria-hidden=\"true\">kraft starfield</span>\r\n      </button>\r\n      <button class=\"sky-node sky-node--blue\" type=\"button\" data-sky-pick=\"blue\" aria-pressed=\"false\" aria-label=\"twilight starfield\">\r\n        <span class=\"sky-node-caption\" aria-hidden=\"true\">twilight starfield</span>\r\n      </button>\r\n      <button class=\"sky-node sky-node--teal\" type=\"button\" data-sky-pick=\"teal\" aria-pressed=\"true\" aria-label=\"viridian starfield\">\r\n        <span class=\"sky-node-caption\" aria-hidden=\"true\">viridian starfield</span>\r\n      </button>\r\n    </span>\r\n  </header>\r\n\r\n  <nav class=\"menu\" aria-label=\"Ninnik Kraft projects\">\r\n    <a class=\"menu-card archive\" href=\"/oolimtong_archive\" draggable=\"false\">\r\n      <span class=\"archive-cover\" aria-hidden=\"true\">\r\n        <img src=\"/archive-hover-texture.webp\" alt=\"\" decoding=\"async\" draggable=\"false\">\r\n      </span>\r\n      <span class=\"menu-bottom\">\r\n        <strong class=\"menu-title\">Oollimtong Archive</strong>\r\n        <span class=\"menu-desc\">A resonant space built together in clay—an archive of the process and outcomes of Oollimtong.</span>\r\n      </span>\r\n    </a>\r\n\r\n    <a class=\"menu-card children\" href=\"/children_workshop\" draggable=\"false\">\r\n      <span class=\"children-rainbow-cover\" aria-hidden=\"true\">\r\n        <img src=\"/children-rainbow-hover-v6.webp\" alt=\"\" decoding=\"async\" draggable=\"false\">\r\n      </span>\r\n      <span class=\"menu-bottom\">\r\n        <span class=\"children-cover\" aria-hidden=\"true\">\r\n          <img src=\"/ck-logo.svg\" alt=\"\">\r\n        </span>\r\n        <strong class=\"menu-title\">Children’s Workshop</strong>\r\n        <span class=\"menu-desc\">An interdisciplinary art program for preschoolers designed and led by the artist.</span>\r\n      </span>\r\n    </a>\r\n\r\n    <div class=\"menu-card network\" role=\"status\" aria-label=\"Oollimtong Network, coming soon\">\r\n      <span class=\"network-space\" aria-hidden=\"true\"></span>\r\n      <span class=\"menu-top menu-status\">\r\n        <span class=\"coming-soon\">COMING SOON</span>\r\n      </span>\r\n      <span class=\"menu-bottom\">\r\n        <strong class=\"menu-title\">Oollimtong Network</strong>\r\n        <span class=\"menu-desc\">A new game page is in development.</span>\r\n      </span>\r\n    </div>\r\n  </nav>\r\n\r\n  <section class=\"about\" aria-label=\"About Ninnik Kraft\">\r\n    <article class=\"about-panel\">\r\n      <h2 class=\"about-title\">GAYA Kim Ah Young and the Imaginary World of Ninnik</h2>\r\n      <p class=\"about-copy\">Artist GAYA Kim Ah Young works across ceramics, painting, and digital media, using storytelling to unfold Ninnik—an imaginative world shaped by her singular creative sensibility.</p>\r\n    </article>\r\n\r\n    <img class=\"site-emblem\" src=\"ninnik-kraft-emblem-216.png\" alt=\"\">\r\n\r\n    <article class=\"about-panel\">\r\n      <h2 class=\"about-title\">Munmak Studio ‘Ninnik Kraft’</h2>\r\n      <p class=\"about-copy\">The name combines Ninnik, a new world, with Kraft, evoking technology, power, and vehicles. Inspired by the building’s ship-like form, it also carries a wish for a smooth creative journey.</p>\r\n      <address class=\"studio-address\">1734-15, Wonmun-ro, Munmak-eup, Wonju-si, Gangwon-do 26370, Republic of Korea</address>\r\n    </article>\r\n  </section>\r\n\r\n</main>",
  "scripts": [
    {
      "attributes": {},
      "content": "\r\n  (() => {\r\n    let stored = null;\r\n    try {\r\n      stored = localStorage.getItem(\"ninnik-sky\");\r\n    } catch (error) {\r\n      stored = null;\r\n    }\r\n    // 저장된 값이 셋 중 하나면 그대로 씁니다. 크라프트도 유효한 선택이므로\r\n    // 목록에 넣어야 합니다. 아무것도 고르지 않았으면 청록으로 시작합니다.\r\n    document.documentElement.dataset.sky =\r\n      stored === \"kraft\" || stored === \"teal\" || stored === \"blue\" ? stored : \"teal\";\r\n\r\n    // 손전화 주소창을 고른 하늘로 칠합니다. 색은 스타일시트의 --space 를\r\n    // 그대로 읽어옵니다. 여기에 색을 또 적어두면 하늘을 손볼 때마다 두\r\n    // 군데를 고쳐야 하고, 한쪽만 고치면 주소창만 옛 색으로 남습니다.\r\n    const bar = document.querySelector('meta[name=\"theme-color\"]');\r\n    const space = getComputedStyle(document.documentElement).getPropertyValue(\"--space\").trim();\r\n    if (bar && space) bar.content = space;\r\n  })();\r\n"
    },
    {
      "attributes": {
        "src": "/landing-cosmos-kraft.js"
      },
      "content": ""
    }
  ]
};

export default pageData;
