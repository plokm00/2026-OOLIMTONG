(() => {
  const canvas = document.getElementById("cosmos");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // 하늘 세 벌. 이름은 landing-kraft.css 의 html[data-sky="..."] 와 같습니다.
  // stars 는 작은 별들, blobs 는 크게 번지는 덩어리 별 색입니다.
  const skies = {
    // 그림에서 뽑은 별빛. 종이 크림, 오커, 주홍, 연기 회색, 옅은 탄색.
    kraft: {
      stars: [
        [244, 238, 222],
        [214, 175, 60],
        [224, 69, 43],
        [168, 182, 180],
        [214, 190, 154],
      ],
      blobs: [[226, 88, 52], [204, 255, 0], [95, 120, 215]],
    },
    // 지금 운영 중인 페이지에 가장 가까운 하늘. 거의 검정인데 청록이 돕니다.
    teal: {
      stars: [
        [244, 240, 231],
        [255, 138, 92],
        [224, 110, 80],
        [110, 180, 186],
        [205, 222, 220],
      ],
      blobs: [[232, 110, 74], [204, 255, 0], [110, 180, 186]],
    },
    blue: {
      stars: [
        [244, 240, 231],
        [255, 138, 92],
        [254, 72, 50],
        [124, 170, 240],
        [205, 220, 245],
      ],
      blobs: [[254, 91, 57], [204, 255, 0], [120, 170, 235]],
    },
  };

  let activeSky = skies[document.documentElement.dataset.sky] ? document.documentElement.dataset.sky : "teal";
  let colors = skies[activeSky].stars;

  let width = 0;
  let height = 0;
  let ratio = 1;
  let liveStars = [];
  let clusterStars = [];
  let lensSpots = [];
  // 별밭은 화면보다 길게 만들어 두고, 스크롤에 따라 화면 높이보다 느리게
  // 흘러갑니다. 카드는 1의 속도로 지나가고 하늘은 이 비율로 따라오므로
  // 둘 사이에 거리가 생깁니다. 노드 둘레 별무리와 로고 속 별자리는 각자
  // 붙어 있는 요소를 그대로 따라가야 해서 이 비율을 쓰지 않습니다.
  const skyDrift = 0.4;
  let fieldHeight = 0;
  const scrolledBy = () => window.scrollY || window.pageYOffset || 0;
  let staticLayer = null;
  let morphStars = [];
  let reservedZones = [];
  let animationFrame = 0;
  // 한 번 열린 화면 안에서는 리사이즈·배경 변경에도 별자리를 유지하되,
  // 새로고침할 때는 매번 새로운 별자리를 뽑습니다.
  const pageSeed = 1 + Math.floor(Math.random() * 2147483646);
  let seed = pageSeed;

  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const networkFields = [];

  const populateNetworkSpace = () => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    document.querySelectorAll(".network-space").forEach((space) => {
      const card = space.closest(".network");
      const starfield = document.createElement("canvas");
      const starContext = starfield.getContext("2d", { alpha: true });
      const nodes = Array.from({ length: 6 }, () => {
        const node = document.createElement("span");
        node.className = "network-static-node";
        return node;
      });

      starfield.className = "network-starfield";
      space.replaceChildren(starfield, ...nodes);

      const renderNetworkField = () => {
        const starCount = 64 + Math.floor(Math.random() * 25);
        const cardRect = card?.getBoundingClientRect();
        const titleRect = card?.querySelector(".menu-title")?.getBoundingClientRect();
        const fieldWidth = Math.max(1, Math.round(space.clientWidth));
        const fieldHeight = Math.max(1, Math.round(space.clientHeight));
        const fieldRatio = Math.min(window.devicePixelRatio || 1, 1.5);

        if (
          starfield.width !== Math.round(fieldWidth * fieldRatio) ||
          starfield.height !== Math.round(fieldHeight * fieldRatio)
        ) {
          starfield.width = Math.round(fieldWidth * fieldRatio);
          starfield.height = Math.round(fieldHeight * fieldRatio);
          starfield.style.width = `${fieldWidth}px`;
          starfield.style.height = `${fieldHeight}px`;
        }

        starContext.setTransform(fieldRatio, 0, 0, fieldRatio, 0, 0);
        starContext.clearRect(0, 0, fieldWidth, fieldHeight);

        const titleZone =
          cardRect && titleRect && cardRect.width && cardRect.height
            ? {
                left: ((titleRect.left - cardRect.left - 34) / cardRect.width) * 100,
                right: ((titleRect.right - cardRect.left + 34) / cardRect.width) * 100,
                top: ((titleRect.top - cardRect.top - 28) / cardRect.height) * 100,
                bottom: ((titleRect.bottom - cardRect.top + 28) / cardRect.height) * 100,
              }
            : null;

        const createPosition = (minX, maxX, minY, maxY, avoidTitle = false) => {
          let position;

          for (let attempt = 0; attempt < 32; attempt += 1) {
            position = {
              x: minX + Math.random() * (maxX - minX),
              y: minY + Math.random() * (maxY - minY),
            };

            const overlapsTitle =
              avoidTitle &&
              titleZone &&
              position.x > titleZone.left &&
              position.x < titleZone.right &&
              position.y > titleZone.top &&
              position.y < titleZone.bottom;

            if (!overlapsTitle) return position;
          }

          return position;
        };

        Array.from({ length: starCount }, () => {
          const colorRoll = Math.random();
          const sizeRoll = Math.random();
          const isLime = colorRoll < 0.24;
          const isBlue = colorRoll >= 0.24 && colorRoll < 0.42;
          const size = isLime
            ? 0.65 + Math.random() * 2.2
            : sizeRoll < 0.72
              ? 0.45 + Math.random() * 1.35
              : sizeRoll < 0.95
                ? 1.8 + Math.random() * 2.6
                : 4.4 + Math.random() * 3.6;
          const position = createPosition(2, 98, 5, 95, isLime);
          const x = (position.x / 100) * fieldWidth;
          const y = (position.y / 100) * fieldHeight;
          const alpha = 0.28 + Math.random() * 0.7;
          // 연두 마디는 이 프로젝트의 키컬러라 어느 하늘에서나 그대로이고,
          // 나머지 별빛만 고른 하늘을 따라갑니다.
          const skyTint = skies[activeSky].stars[3];
          const skyPale = skies[activeSky].stars[0];
          const coreColor = isLime ? [223, 255, 117] : isBlue ? skyTint : skyPale;
          const glowColor = isLime
            ? "rgba(204, 255, 0, 0.68)"
            : isBlue
              ? `rgba(${skyTint.join(", ")}, 0.5)`
              : `rgba(${skyPale.join(", ")}, 0.42)`;

          starContext.save();
          starContext.globalAlpha = alpha;
          starContext.fillStyle = `rgb(${coreColor.join(", ")})`;
          starContext.shadowColor = glowColor;
          starContext.shadowBlur = 4 + size * 3.8;
          starContext.beginPath();
          starContext.arc(x, y, size / 2, 0, Math.PI * 2);
          starContext.fill();
          starContext.restore();
        });

        nodes.forEach((node, index) => {
          const nodeWidth = 6.5 + Math.random() * 4;
          const nodeHeight = nodeWidth * (0.92 + Math.random() * 0.16);
          const position = createPosition(8, 92, 12, 88, true);

          node.style.setProperty("--node-x", `${position.x}%`);
          node.style.setProperty("--node-y", `${position.y}%`);
          node.style.setProperty("--node-width", `${nodeWidth}px`);
          node.style.setProperty("--node-height", `${nodeHeight}px`);
          node.style.setProperty("--node-glow-size", `${19 + nodeWidth * 1.5}px`);
          node.style.setProperty("--node-turn", `${Math.random() * 180}deg`);
          node.style.setProperty("--node-morph-time", `${3.8 + Math.random() * 2.8}s`);
          node.style.setProperty("--node-morph-delay", `${-Math.random() * 5}s`);
          node.style.setProperty(
            "--node-radius",
            index % 2 ? "58% 42% 54% 46%" : "44% 56% 40% 60%",
          );
        });
      };

      networkFields.push(renderNetworkField);
      renderNetworkField();
      if (canHover) {
        card?.addEventListener("mouseenter", renderNetworkField);
      }
      card?.addEventListener(
        "pointerdown",
        (event) => {
          if (event.pointerType !== "mouse") {
            renderNetworkField();
          }
        },
        { passive: true },
      );
    });
  };

  const collectReservedZones = () => {
    // 네 개의 헤더 링크 뒤에는 별을 아주 드물고 어둡게만 남깁니다.
    // 완전히 비우지 않아 우주가 끊겨 보이지 않으면서도 글자 획은 고르게 보입니다.
    reservedZones = [...document.querySelectorAll(".header-tools")].map((element) => {
      const box = element.getBoundingClientRect();
      return {
        left: Math.max(0, box.left - 22),
        right: Math.min(width, box.right + 22),
        top: Math.max(0, box.top - 16),
        bottom: Math.min(height, box.bottom + 16),
      };
    });
  };

  // 글자 안쪽 하늘. 바깥과 같은 색을 쓰되 배치를 따로 뽑아서, 경계에서
  // 별 위치가 어긋나게 만듭니다. 그 어긋남이 곧 글자입니다.
  const paintBrandVoid = () => {
    const holder = document.querySelector(".brand-void");
    const layer = holder?.querySelector("canvas");
    if (!layer) return;

    const box = holder.getBoundingClientRect();
    const voidWidth = Math.max(1, Math.round(box.width));
    const voidHeight = Math.max(1, Math.round(box.height));
    const voidRatio = Math.min(window.devicePixelRatio || 1, 2);
    const paint = layer.getContext("2d");

    layer.width = Math.round(voidWidth * voidRatio);
    layer.height = Math.round(voidHeight * voidRatio);
    paint.setTransform(voidRatio, 0, 0, voidRatio, 0, 0);
    paint.clearRect(0, 0, voidWidth, voidHeight);

    const count = Math.round((voidWidth * voidHeight) / 450);
    for (let index = 0; index < count; index += 1) {
      const [r, g, b] = colors[Math.floor(Math.random() * colors.length)];
      const grade = Math.random();
      const size =
        grade < 0.78
          ? 0.3 + Math.random() * 0.7
          : grade < 0.97
            ? 1 + Math.random() * 1.1
            : 2.1 + Math.random() * 1.6;

      paint.save();
      paint.globalAlpha = 0.3 + Math.random() * 0.66;
      paint.fillStyle = `rgb(${r}, ${g}, ${b})`;
      if (grade > 0.9) {
        paint.shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
        paint.shadowBlur = 3 + size * 4;
      }
      paint.beginPath();
      paint.arc(Math.random() * voidWidth, Math.random() * voidHeight, size, 0, Math.PI * 2);
      paint.fill();
      paint.restore();
    }
  };

  const isReserved = (x, y, extraPadding = 0) =>
    reservedZones.some(
      (zone) =>
        x > zone.left - extraPadding &&
        x < zone.right + extraPadding &&
        y > zone.top - extraPadding &&
        y < zone.bottom + extraPadding,
    );

  const findOpenPoint = (extraPadding = 0, galaxyBias = false, quietDensity = 0.1) => {
    const createPoint = () => {
      if (!galaxyBias) {
        return { x: random() * width, y: random() * fieldHeight };
      }

      const x = random() * width;
      const spreadBase = fieldHeight;
      const bandCenter = fieldHeight * (0.18 + (x / width) * 0.62);
      const spread = (random() + random() + random() - 1.5) * spreadBase * 0.28;
      return {
        x,
        y: Math.max(0, Math.min(fieldHeight, bandCenter + spread)),
      };
    };

    let point = createPoint();
    for (
      let attempt = 0;
      attempt < 32 && isReserved(point.x, point.y, extraPadding) && random() > quietDensity;
      attempt += 1
    ) {
      point = createPoint();
    }

    return point;
  };

  const bakeStarLayer = (bakedStars) => {
    if (!staticLayer) {
      staticLayer = document.createElement("canvas");
    }

    staticLayer.width = Math.round(width * ratio);
    staticLayer.height = Math.round(fieldHeight * ratio);

    const layer = staticLayer.getContext("2d");
    layer.setTransform(ratio, 0, 0, ratio, 0, 0);
    layer.clearRect(0, 0, width, fieldHeight);

    bakedStars.forEach((star) => {
      const [r, g, b] = star.color;
      layer.save();
      if (star.halo) {
        layer.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        layer.shadowBlur = 3 + star.radius * 5;
      }
      layer.beginPath();
      layer.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.alpha})`;
      layer.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      layer.fill();
      layer.restore();
    });
  };

  // 캔버스만 창에 맞춥니다. 별은 건드리지 않습니다.
  const fitCanvas = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    // 창이 아직 안 펼쳐졌을 때 0 이 넘어오면 아래 drawImage 가 예외를 던지고,
    // 그러면 스크립트가 통째로 죽어서 리사이즈 리스너조차 안 붙습니다.
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const createField = () => {
    seed = pageSeed;
    fitCanvas();

    // 스크롤이 끝까지 갔을 때도 하늘이 비지 않도록, 화면 높이에 흘러갈
    // 거리를 더해 그만큼 길게 만듭니다.
    const pageHeight = Math.max(height, document.documentElement.scrollHeight);
    fieldHeight = Math.round(height + (pageHeight - height) * skyDrift);

    collectReservedZones();
    paintBrandVoid();

    // 별은 두 겹입니다. 대부분은 화면이 바뀔 때 한 번만 그려서 비트맵으로
    // 구워두고, 매 프레임에는 그 비트맵 한 장과 깜빡이는 소수만 올립니다.
    // 밀도를 세 배로 올려도 내려받는 파일은 늘지 않고, 프레임당 그리는
    // 횟수는 오히려 줄어듭니다.
    const bakedCount = Math.max(380, Math.min(1300, Math.round((width * fieldHeight) / 1800)));
    const liveCount = Math.max(35, Math.min(75, Math.round(bakedCount / 12)));

    // 별빛은 대부분 옅은 종이색과 하늘색입니다. 짙은 주홍은 아주 드물게만
    // 섞습니다. 고르게 뽑으면 다섯 색 중 둘이 강한 색이라 한 화면이
    // 알록달록해집니다.
    const pickStarColor = () => {
      const roll = random();
      if (roll < 0.54) return colors[0];
      if (roll < 0.82) return colors[4];
      if (roll < 0.94) return colors[3];
      return colors[roll < 0.975 ? 1 : 2];
    };

    const makeStar = (twinkles) => {
      const grade = random();
      const point = findOpenPoint(4, random() < 0.52);
      const isHeaderStar = isReserved(point.x, point.y);
      // 큰 별은 백 개 중 한 개꼴이고 그 한 개도 예전의 절반 크기입니다.
      // 한 화면에 눈에 띄는 별이 대여섯 개만 남습니다.
      const radius =
        grade < 0.86
          ? 0.2 + random() * 0.5
          : grade < 0.988
            ? 0.6 + random() * 0.62
            : 1.15 + random() * 0.72;
      const alpha = (twinkles ? 0.28 : 0.12) + random() * 0.62;

      return {
        ...point,
        radius: radius * (isHeaderStar ? 0.62 : 1),
        alpha: alpha * (isHeaderStar ? 0.28 : 1),
        // 번지는 빛은 그 큰 별에만 답니다. 예전에는 열에 하나가 번졌습니다.
        halo: !isHeaderStar && grade > 0.988,
        phase: random() * Math.PI * 2,
        speed: 0.00035 + random() * 0.0011,
        color: pickStarColor(),
      };
    };

    // 노드 둘레에는 별을 따로 모아 둡니다. 굴절은 뒤에 굽힐 별이 있어야
    // 보이는 것이라, 그 자리가 허공이면 렌즈가 아무 일도 안 하는 것처럼
    // 보입니다. 헤더 링크 뒤로 넘어간 별은 다른 별과 똑같이 죽입니다.
    // 노드 자리는 문서 기준으로 잡아둡니다. 그려질 때 스크롤한 만큼 빼면
    // 별무리가 노드를 그대로 따라다닙니다.
    const pageTop = scrolledBy();
    const nodeSpots = [...document.querySelectorAll(".sky-node")].map((node) => {
      const box = node.getBoundingClientRect();
      return { x: box.left + box.width / 2, y: box.top + box.height / 2 + pageTop };
    });

    // 자리를 무작위로 고르면 한 노드에만 몰립니다. 차례대로 돌려서 셋이
    // 같은 몫을 갖게 합니다.
    const makeClusterStar = (twinkles, index) => {
      const spot = nodeSpots[index % nodeSpots.length];
      const angle = random() * Math.PI * 2;
      // 반지름을 제곱해서 뽑으면 가운데가 촘촘하고 바깥으로 갈수록 성깁니다
      const reach = random() * random() * 118;
      const grade = random();
      const x = Math.max(0, Math.min(width, spot.x + Math.cos(angle) * reach));
      const y = spot.y + Math.sin(angle) * reach * 0.84;
      const quiet = isReserved(x, y - pageTop);
      // 잘고 고른 알갱이로 둡니다. 큰 별이 섞이면 굴절이 지나가도 그 별만
      // 보이고 공간이 밀리는 느낌이 죽습니다.
      const radius = grade < 0.82 ? 0.24 + random() * 0.42 : 0.7 + random() * 0.5;
      const alpha = (twinkles ? 0.3 : 0.18) + random() * 0.46;
      // 별무리는 하늘 팔레트의 옅은 두 색만 씁니다. 색이 많으면 알록달록해져서
      // 굴절로 밀린 것인지 원래 그런 색인지 구분이 안 됩니다.
      const pale = skies[activeSky].stars;

      return {
        x,
        y,
        radius: radius * (quiet ? 0.62 : 1),
        alpha: alpha * (quiet ? 0.28 : 1),
        halo: !quiet && grade > 0.975,
        phase: random() * Math.PI * 2,
        speed: 0.00035 + random() * 0.0011,
        color: random() < 0.72 ? pale[0] : pale[4],
      };
    };

    // 알갱이가 잘아진 만큼 수는 도로 조금 올립니다. 굵은 별 몇 개보다
    // 고운 먼지가 촘촘한 편이 굴절이 지나갈 때 훨씬 잘 읽힙니다.
    // 별무리는 굽지 않고 매 프레임 그립니다. 좌표가 렌즈를 따라 움직여야
    // 해서 비트맵으로 굳혀둘 수 없습니다.
    const clusterCount = nodeSpots.length ? 170 : 0;

    lensSpots = nodeSpots.map((spot, index) => ({
      x: spot.x,
      y: spot.y,
      // 노드가 늘 끌어당기는 힘. 클수록 상시 왜곡이 넓고 셉니다.
      pull: [11, 11.8, 11.4][index % 3],
      period: [17000, 19000, 21000][index % 3],
      offset: [2000, 8500, 15000][index % 3],
    }));

    liveStars = Array.from({ length: liveCount }, () => {
      const star = makeStar(true);
      star.lensed = true;
      return star;
    });

    clusterStars = Array.from({ length: clusterCount }, (_, index) => {
      const star = makeClusterStar(true, index);
      star.lensed = true;
      return star;
    });

    bakeStarLayer(Array.from({ length: bakedCount }, () => makeStar(false)));

    // 크게 번지는 덩어리 별은 이 하늘에서 가장 눈에 띄는 것이라 수와 크기를
    // 함께 줄였습니다. 별밭 길이에 맞춰 서넛만 두면 한 화면에 한둘이
    // 들어옵니다.
    const morphCount = Math.max(3, Math.min(4, Math.round((width * fieldHeight) / 620000)));

    morphStars = Array.from({ length: morphCount }, (_, index) => {
      const point = findOpenPoint(82, false, 0);
      const lobeCount = 6 + Math.floor(random() * 3);
      return {
        x: point.x,
        y: point.y,
        baseRadius: 1.9 + random() * 2.1,
        phase: random() * Math.PI * 2,
        speed: 0.0003 + random() * 0.00024,
        color: skies[activeSky].blobs[index === 1 ? 1 : index === 3 ? 2 : 0],
        lobes: Array.from({ length: lobeCount }, () => ({
          amplitude: 0.12 + random() * 0.24,
          phase: random() * Math.PI * 2,
        })),
      };
    });
  };

  // ── 중력 렌즈 ─────────────────────────────────────────────────────
  // 어두운 띠를 덧그리는 게 아니라, 그 자리에 걸친 별의 좌표를 밀어냅니다.
  // 별밭은 우리가 그리는 캔버스라 위치를 직접 옮길 수 있습니다.

  // 파면의 현재 반지름과 세기. 주기의 마지막 28% 동안만 살아 있습니다.
  const waveAt = (spot, time) => {
    const cycle = ((time + spot.offset) % spot.period + spot.period) % spot.period;
    const phase = cycle / spot.period;
    if (phase < 0.72) return null;

    const run = (phase - 0.72) / 0.28;
    // 태어나는 순간과 사라지는 순간에 세기가 0 이어야 합니다. 예전에는 다
    // 자란 세기로 갑자기 나타났다가 반쯤 살아 있는 채로 툭 끊겨서, 노드
    // 둘레 별들이 그때마다 뾰족하게 튀었습니다.
    const envelope = Math.sin(Math.PI * run);
    return {
      radius: 12 + run * 118,
      band: 26 + run * 20,
      // 멀어질수록 힘이 빠집니다. 파면 마루에서 최대 16px 안팎으로 밀리는데,
      // 별 알갱이가 1px 남짓이라 이 정도는 되어야 밀린 게 보입니다.
      amp: 40 * envelope * (1 - run * 0.45),
      // 사중극이 천천히 돌아, 늘어나는 축과 눌리는 축이 뒤바뀝니다
      twist: run * Math.PI,
    };
  };

  // 별 하나를 렌즈 세 개에 통과시켜 옮겨진 자리를 돌려줍니다
  const lensPoint = (x, y, time) => {
    let px = x;
    let py = y;

    for (let index = 0; index < lensSpots.length; index += 1) {
      const spot = lensSpots[index];
      const vx = px - spot.x;
      const vy = py - (spot.y - scrolledBy());
      const distance = Math.hypot(vx, vy);
      if (distance < 0.001 || distance > 240) continue;

      // 상시 렌즈: 가까울수록 바깥으로 크게 밀립니다. 별이 노드를 비껴
      // 흐르는 모양이 되어 아인슈타인 고리처럼 보입니다.
      let shift = (spot.pull * spot.pull) / (distance + spot.pull);

      const wave = waveAt(spot, time);
      if (wave) {
        const offset = (distance - wave.radius) / wave.band;
        if (offset > -3 && offset < 3) {
          // u·e^(-u²) 는 마루 앞에서 양수, 뒤에서 음수입니다. 파면 앞의
          // 별은 바깥으로 밀리고 뒤의 별은 안으로 당겨지는, 물결 한 마루의
          // 실제 변위 모양입니다.
          const ripple = offset * Math.exp(-offset * offset);
          const angle = Math.atan2(vy, vx);
          const quadrupole = Math.cos(2 * angle - wave.twist);
          shift += wave.amp * ripple * (0.45 + 0.55 * quadrupole);
        }
      }

      px += (vx / distance) * shift;
      py += (vy / distance) * shift;
    }

    return { x: px, y: py };
  };

  const drawStar = (star, time, offset = 0) => {
    const pulse = reduceMotion ? 1 : 0.74 + Math.sin(time * star.speed + star.phase) * 0.26;
    const [r, g, b] = star.color;
    const at = star.lensed ? lensPoint(star.x, star.y - offset, time) : { x: star.x, y: star.y - offset };
    context.beginPath();
    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.alpha * pulse})`;
    context.arc(at.x, at.y, star.radius, 0, Math.PI * 2);
    context.fill();
  };

  const createBlobPath = (centerX, centerY, radii) => {
    const points = radii.map((radius, index) => {
      const angle = (Math.PI * 2 * index) / radii.length - Math.PI / 2;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
      };
    });

    const firstMidpoint = {
      x: (points[0].x + points[1].x) / 2,
      y: (points[0].y + points[1].y) / 2,
    };

    context.beginPath();
    context.moveTo(firstMidpoint.x, firstMidpoint.y);
    for (let index = 1; index <= points.length; index += 1) {
      const point = points[index % points.length];
      const next = points[(index + 1) % points.length];
      context.quadraticCurveTo(point.x, point.y, (point.x + next.x) / 2, (point.y + next.y) / 2);
    }
    context.closePath();
  };

  const drawMorphStar = (star, time, offset = 0) => {
    const growthWave = reduceMotion ? 0 : Math.sin(time * star.speed + star.phase);
    // 두 배로 부풀었다 줄어들면 그 자체가 눈에 걸립니다. 숨 쉬는 정도로만
    // 둡니다.
    const scale = reduceMotion ? 1 : 0.9 + (growthWave + 1) * 0.1;
    const centerX = star.x + (reduceMotion ? 0 : Math.sin(time * 0.00012 + star.phase) * 1.8);
    const centerY = star.y - offset + (reduceMotion ? 0 : Math.cos(time * 0.0001 + star.phase) * 1.4);
    const [r, g, b] = star.color;
    const radii = star.lobes.map((lobe, index) => {
      const distortion = reduceMotion
        ? 1
        : 1 + Math.sin(time * (star.speed * 1.7) + lobe.phase + index) * lobe.amplitude;
      return star.baseRadius * scale * distortion;
    });
    // 번지는 빛도 좁히고 옅게. 알갱이보다 빛무리가 먼저 눈에 들어오면
    // 그 별만 보입니다.
    const glowRadius = star.baseRadius * scale * 7 + 11;
    const glowStrength = Math.min(0.26, 0.15 + star.baseRadius * 0.02);

    const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
    glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${glowStrength})`);
    glow.addColorStop(0.24, `rgba(${r}, ${g}, ${b}, ${glowStrength * 0.46})`);
    glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
    context.beginPath();
    context.fillStyle = glow;
    context.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
    context.fill();

    createBlobPath(centerX, centerY, radii);
    context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.72)`;
    context.fill();
  };

  let lastFrameTime = 0;

  const draw = (time = 0) => {
    lastFrameTime = time;
    context.clearRect(0, 0, width, height);
    const drift = scrolledBy() * skyDrift;
    if (staticLayer && staticLayer.width > 0 && staticLayer.height > 0) {
      context.drawImage(staticLayer, 0, -drift, width, fieldHeight);
    }
    liveStars.forEach((star) => drawStar(star, time, drift));
    // 별무리와 렌즈는 노드에 붙어 있으므로 스크롤을 그대로 따라갑니다
    clusterStars.forEach((star) => drawStar(star, time, scrolledBy()));
    morphStars.forEach((star) => drawMorphStar(star, time, drift));

    if (!reduceMotion) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const rebuild = () => {
    window.cancelAnimationFrame(animationFrame);
    createField();
    draw();
  };

  // 주소창이 접히고 펴질 때마다 창 높이가 바뀝니다. 그때마다 별을 다시
  // 뽑으면 화면을 위로 밀었을 뿐인데 하늘이 통째로 갈아끼워집니다. 폭이
  // 그대로이고 높이만 주소창만큼 달라졌으면 캔버스만 늘리고 별은 있던
  // 자리에 그대로 둡니다. 창을 진짜로 바꿨을 때만 다시 뽑습니다.
  const resize = () => {
    const sameWidth = window.innerWidth === width;
    const heightShift = Math.abs(window.innerHeight - height);

    if (staticLayer && sameWidth && heightShift < 200) {
      window.cancelAnimationFrame(animationFrame);
      fitCanvas();
      draw();
      return;
    }

    rebuild();
  };

  const enableTouchCardPreviews = () => {
    const cards = [...document.querySelectorAll(".menu-card")];
    const clearPreviews = () => {
      cards.forEach((card) => card.classList.remove("is-touch-preview"));
    };

    cards.forEach((card) => {
      let longPressTimer = 0;
      let suppressClick = false;
      let touchInteraction = false;
      let allowTouchNavigation = false;

      card.addEventListener(
        "pointerdown",
        (event) => {
          if (event.pointerType === "mouse") return;

          touchInteraction = true;
          allowTouchNavigation = card.classList.contains("is-touch-preview");
          clearPreviews();
          card.classList.add("is-touch-preview");
          suppressClick = false;
          window.clearTimeout(longPressTimer);
          longPressTimer = window.setTimeout(() => {
            suppressClick = true;
          }, 450);
        },
        { passive: true },
      );

      card.addEventListener(
        "pointerup",
        () => {
          window.clearTimeout(longPressTimer);
        },
        { passive: true },
      );

      card.addEventListener(
        "pointercancel",
        () => {
          window.clearTimeout(longPressTimer);
          touchInteraction = false;
          allowTouchNavigation = false;
        },
        { passive: true },
      );

      card.addEventListener("contextmenu", (event) => {
        if (window.matchMedia("(pointer: coarse)").matches) {
          event.preventDefault();
        }
      });

      if (card.matches("a[href]")) {
        card.addEventListener(
          "click",
          (event) => {
            if (!touchInteraction) return;

            const shouldBlockNavigation = suppressClick || !allowTouchNavigation;
            touchInteraction = false;
            allowTouchNavigation = false;
            suppressClick = false;

            if (shouldBlockNavigation) {
              event.preventDefault();
            }
          },
          true,
        );
      }
    });

    document.addEventListener(
      "pointerdown",
      (event) => {
        if (!event.target.closest(".menu-card")) {
          clearPreviews();
        }
      },
      { passive: true },
    );
  };

  // 하늘 갈아끼우기. 별과 로고 안쪽 하늘만 다시 그리고 나머지는 그대로 둡니다.
  const applySky = (name) => {
    if (!skies[name]) return;

    activeSky = name;
    colors = skies[name].stars;
    document.documentElement.dataset.sky = name;

    try {
      localStorage.setItem("ninnik-sky", name);
    } catch (error) {
      // 저장이 막혀 있어도 이번 방문 동안에는 그대로 적용됩니다.
    }

    document.querySelectorAll("[data-sky-pick]").forEach((node) => {
      node.setAttribute("aria-pressed", String(node.dataset.skyPick === name));
    });

    networkFields.forEach((render) => render());
    // 하늘을 갈아끼울 때는 색이 바뀌었으니 별도 다시 뽑아야 합니다.
    rebuild();
  };

  const enableSkyNodes = () => {
    document.querySelectorAll("[data-sky-pick]").forEach((node) => {
      node.setAttribute("aria-pressed", String(node.dataset.skyPick === activeSky));
      node.addEventListener("click", () => applySky(node.dataset.skyPick));
    });
  };

  enableSkyNodes();
  populateNetworkSpace();
  enableTouchCardPreviews();
  createField();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  // 움직임을 줄인 설정에서는 프레임 루프가 돌지 않으므로, 스크롤할 때만
  // 한 장 다시 그려서 하늘이 따라오게 합니다. 평소에는 루프가 이미 매
  // 프레임 그리고 있어 여기서 또 그릴 필요가 없습니다.
  if (reduceMotion) {
    window.addEventListener("scroll", () => draw(lastFrameTime), { passive: true });
  }
})();
