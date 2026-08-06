(() => {
  const canvas = document.getElementById("cosmos");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // 별빛은 따뜻한 색을 남겨둡니다. 파란 하늘 위의 주황 불티가 아카이브 카드와
  // 이어지고, 차가운 쪽만 청록에서 파랑으로 옮겼습니다.
  const colors = [
    [244, 240, 231],
    [255, 138, 92],
    [254, 72, 50],
    [124, 170, 240],
    [205, 220, 245],
  ];

  let width = 0;
  let height = 0;
  let ratio = 1;
  let liveStars = [];
  let staticLayer = null;
  let morphStars = [];
  let reservedZones = [];
  let animationFrame = 0;
  let seed = 94731;

  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

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
          const coreColor = isLime
            ? [223, 255, 117]
            : isBlue
              ? [125, 172, 235]
              : [243, 240, 231];
          const glowColor = isLime
            ? "rgba(204, 255, 0, 0.68)"
            : isBlue
              ? "rgba(125, 172, 235, 0.5)"
              : "rgba(243, 240, 231, 0.42)";

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
    reservedZones = [...document.querySelectorAll(".brand-logo")].map((element) => {
      const rect = element.getBoundingClientRect();
      const padding = 26;
      return {
        left: rect.left - padding,
        right: rect.right + padding,
        top: rect.top - padding,
        bottom: rect.bottom + padding,
      };
    });
  };

  const isReserved = (x, y, extraPadding = 0) =>
    reservedZones.some(
      (zone) =>
        x > zone.left - extraPadding &&
        x < zone.right + extraPadding &&
        y > zone.top - extraPadding &&
        y < zone.bottom + extraPadding,
    );

  const findOpenPoint = (extraPadding = 0, galaxyBias = false) => {
    const createPoint = () => {
      if (!galaxyBias) {
        return { x: random() * width, y: random() * height };
      }

      const x = random() * width;
      const bandCenter = height * (0.18 + (x / width) * 0.62);
      const spread = (random() + random() + random() - 1.5) * height * 0.28;
      return {
        x,
        y: Math.max(0, Math.min(height, bandCenter + spread)),
      };
    };

    let point = createPoint();
    for (let attempt = 0; attempt < 24 && isReserved(point.x, point.y, extraPadding); attempt += 1) {
      point = createPoint();
    }

    return point;
  };

  const bakeStarLayer = (bakedStars) => {
    if (!staticLayer) {
      staticLayer = document.createElement("canvas");
    }

    staticLayer.width = Math.round(width * ratio);
    staticLayer.height = Math.round(height * ratio);

    const layer = staticLayer.getContext("2d");
    layer.setTransform(ratio, 0, 0, ratio, 0, 0);
    layer.clearRect(0, 0, width, height);

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

  const createField = () => {
    seed = 94731;
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    collectReservedZones();

    // 별은 두 겹입니다. 대부분은 화면이 바뀔 때 한 번만 그려서 비트맵으로
    // 구워두고, 매 프레임에는 그 비트맵 한 장과 깜빡이는 소수만 올립니다.
    // 밀도를 세 배로 올려도 내려받는 파일은 늘지 않고, 프레임당 그리는
    // 횟수는 오히려 줄어듭니다.
    const bakedCount = Math.max(760, Math.min(2600, Math.round((width * height) / 900)));
    const liveCount = Math.max(70, Math.min(150, Math.round(bakedCount / 12)));

    const makeStar = (twinkles) => {
      const grade = random();
      return {
        ...findOpenPoint(4, random() < 0.52),
        radius:
          grade < 0.74
            ? 0.2 + random() * 0.55
            : grade < 0.96
              ? 0.7 + random() * 0.9
              : 1.5 + random() * 1.5,
        alpha: (twinkles ? 0.28 : 0.12) + random() * 0.62,
        halo: grade > 0.9,
        phase: random() * Math.PI * 2,
        speed: 0.00035 + random() * 0.0011,
        color: colors[Math.floor(random() * colors.length)],
      };
    };

    liveStars = Array.from({ length: liveCount }, () => makeStar(true));
    bakeStarLayer(Array.from({ length: bakedCount }, () => makeStar(false)));

    morphStars = Array.from({ length: 7 }, (_, index) => {
      const point = findOpenPoint(82);
      const lobeCount = 6 + Math.floor(random() * 3);
      return {
        x: point.x,
        y: point.y,
        baseRadius: 2.8 + random() * 4.2,
        phase: random() * Math.PI * 2,
        speed: 0.0003 + random() * 0.00024,
        color: index < 6 ? [254, 91, 57] : [110, 165, 240],
        lobes: Array.from({ length: lobeCount }, () => ({
          amplitude: 0.12 + random() * 0.24,
          phase: random() * Math.PI * 2,
        })),
      };
    });
  };

  const drawStar = (star, time) => {
    const pulse = reduceMotion ? 1 : 0.74 + Math.sin(time * star.speed + star.phase) * 0.26;
    const [r, g, b] = star.color;
    context.beginPath();
    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${star.alpha * pulse})`;
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
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

  const drawMorphStar = (star, time) => {
    const growthWave = reduceMotion ? 0 : Math.sin(time * star.speed + star.phase);
    const scale = reduceMotion ? 1 : 0.72 + (growthWave + 1) * 0.39;
    const centerX = star.x + (reduceMotion ? 0 : Math.sin(time * 0.00012 + star.phase) * 1.8);
    const centerY = star.y + (reduceMotion ? 0 : Math.cos(time * 0.0001 + star.phase) * 1.4);
    const [r, g, b] = star.color;
    const radii = star.lobes.map((lobe, index) => {
      const distortion = reduceMotion
        ? 1
        : 1 + Math.sin(time * (star.speed * 1.7) + lobe.phase + index) * lobe.amplitude;
      return star.baseRadius * scale * distortion;
    });
    const glowRadius = star.baseRadius * scale * 8.5 + 14;
    const glowStrength = Math.min(0.42, 0.25 + star.baseRadius * 0.024);

    const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
    glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${glowStrength})`);
    glow.addColorStop(0.24, `rgba(${r}, ${g}, ${b}, ${glowStrength * 0.46})`);
    glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
    context.beginPath();
    context.fillStyle = glow;
    context.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
    context.fill();

    createBlobPath(centerX, centerY, radii);
    context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
    context.fill();
  };

  const draw = (time = 0) => {
    context.clearRect(0, 0, width, height);
    if (staticLayer) {
      context.drawImage(staticLayer, 0, 0, width, height);
    }
    liveStars.forEach((star) => drawStar(star, time));
    morphStars.forEach((star) => drawMorphStar(star, time));

    if (!reduceMotion) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const resize = () => {
    window.cancelAnimationFrame(animationFrame);
    createField();
    draw();
  };

  const enableSelectableCardLinks = () => {
    document.querySelectorAll("a.menu-card").forEach((card) => {
      let pointerStart = null;
      let didDrag = false;

      card.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        pointerStart = { x: event.clientX, y: event.clientY };
        didDrag = false;
      });

      card.addEventListener("pointermove", (event) => {
        if (!pointerStart) return;
        if (Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 3) {
          didDrag = true;
        }
      });

      card.addEventListener("pointerup", () => {
        pointerStart = null;
        window.setTimeout(() => {
          didDrag = false;
        }, 0);
      });

      card.addEventListener("pointercancel", () => {
        pointerStart = null;
        didDrag = false;
      });

      card.addEventListener("click", (event) => {
        const selection = window.getSelection();
        const selectedText = selection && !selection.isCollapsed ? selection.toString().trim() : "";

        if (didDrag || selectedText) {
          event.preventDefault();
        }
      });
    });
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

  enableSelectableCardLinks();
  populateNetworkSpace();
  enableTouchCardPreviews();
  createField();
  draw();
  window.addEventListener("resize", resize, { passive: true });
})();
