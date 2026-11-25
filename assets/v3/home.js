/* 兔猫英语小镇 V3.0 · 全量 36 集首页地图、分类贴纸画册与 1.5s 长按家长百宝箱 */
(function () {
  const DATA = window.TUMAO_V3;
  const STAGE_EPS = DATA.stageEpisodes;
  const ALL_EP_IDS = DATA.mapEpisodes.map((e) => e.id);

  let activeIsland = "全部";
  let stickerIsland = "全部";
  let activeParentEp = "EP001";
  let curAudio = null;

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem("tumao_v3_progress") || "{}");
    } catch {
      return {};
    }
  }

  function loadLegacyDone() {
    try {
      return new Set(JSON.parse(localStorage.getItem("tumao_done_eps") || "[]"));
    } catch {
      return new Set();
    }
  }

  function getEpStars(epId, prog, legacySet) {
    const p = prog[epId];
    if (p) {
      return (p.explore ? 1 : 0) + (p.quiz ? 1 : 0) + (p.speak ? 1 : 0);
    }
    return legacySet.has(epId) ? 3 : 0;
  }

  function countAllStickers() {
    let total = 0;
    ALL_EP_IDS.forEach((id) => {
      if (STAGE_EPS[id]) total += STAGE_EPS[id].words.length;
    });
    return total;
  }

  function getUnlockedStickers(prog) {
    const set = new Set();
    ALL_EP_IDS.forEach((id) => {
      const p = prog[id];
      if (!p || !Array.isArray(p.stickers)) return;
      p.stickers.forEach((k) => set.add(id + ":" + k));
    });
    return set;
  }

  function playClip(url, onEnd) {
    if (!url) return;
    if (curAudio) {
      curAudio.pause();
      curAudio = null;
    }
    const a = new Audio(url);
    curAudio = a;
    a.onended = () => { if (onEnd) onEnd(); };
    a.play().catch(() => {});
  }

  function starRowHtml(count) {
    let s = '<div class="mini-stars">';
    for (let i = 0; i < 3; i++) {
      s += `<svg class="mini-star ${i < count ? "lit" : ""}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1z"/></svg>`;
    }
    s += "</div>";
    return s;
  }

  function renderHeaderStats() {
    const prog = loadProgress();
    const legacy = loadLegacyDone();
    let totalStars = 0;
    ALL_EP_IDS.forEach((id) => {
      totalStars += getEpStars(id, prog, legacy);
    });
    document.getElementById("totalStarTxt").textContent = `已点亮 ${totalStars} / ${ALL_EP_IDS.length * 3} 颗成长星`;

    const stickers = getUnlockedStickers(prog);
    document.getElementById("stickerCountTxt").textContent = `贴纸册 ${stickers.size}/${countAllStickers()}`;
  }

  function renderFlagships() {
    const prog = loadProgress();
    const legacy = loadLegacyDone();
    const box = document.getElementById("flagshipList");
    box.innerHTML = "";

    // 自动挑出下一集未满星关卡作为首推「继续冒险」，搭配经典对比集与进阶新集
    const nextTodo = ALL_EP_IDS.find((id) => getEpStars(id, prog, legacy) < 3) || "EP001";
    const picks = [nextTodo];
    ["EP015", "EP027", "EP036", "EP004"].forEach((cand) => {
      if (picks.length < 3 && !picks.includes(cand) && STAGE_EPS[cand]) picks.push(cand);
    });

    picks.forEach((id, idx) => {
      const ep = STAGE_EPS[id];
      if (!ep) return;
      const stars = getEpStars(id, prog, legacy);
      const a = document.createElement("a");
      a.className = "flagship-card clay-press";
      a.href = `./stage.html?ep=${id}`;
      a.style.setProperty("--soft", ep.theme.pillBg);
      a.style.setProperty("--accent", ep.theme.accent);
      const wordsStr = ep.words.slice(0, 4).map((w) => w.word).join(" · ");
      const badgeLabel = idx === 0 ? "下一站推荐" : ep.island;
      a.innerHTML = `
        <div class="flagship-thumb">
          <span class="flagship-ep-code">${ep.id}</span>
          <img src="${ep.words[0].cardImg}" alt="${ep.title}">
        </div>
        <div class="flagship-info">
          <div class="flagship-title-row">
            <h3>${ep.title}</h3>
            <span class="v3-badge">${badgeLabel}</span>
          </div>
          <div class="flagship-words">${wordsStr}</div>
          ${starRowHtml(stars)}
        </div>
        <div class="play-go-circle">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 19,12 8,19"/></svg>
        </div>
      `;
      box.appendChild(a);
    });
  }

  function renderIslands() {
    const bar = document.getElementById("islandBar");
    bar.innerHTML = "";
    DATA.islands.forEach((isl) => {
      const cnt = isl.id === "全部"
        ? DATA.mapEpisodes.length
        : DATA.mapEpisodes.filter((e) => e.island === isl.id).length;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "island-pill clay-press" + (isl.id === activeIsland ? " active" : "");
      btn.textContent = `${isl.label} (${cnt})`;
      btn.onclick = () => {
        playClip(DATA.sfx.pop);
        activeIsland = isl.id;
        renderIslands();
        renderMapGrid();
      };
      bar.appendChild(btn);
    });
  }

  function renderMapGrid() {
    const prog = loadProgress();
    const legacy = loadLegacyDone();
    const list = activeIsland === "全部"
      ? DATA.mapEpisodes
      : DATA.mapEpisodes.filter((e) => e.island === activeIsland);

    document.getElementById("mapHeading").textContent = activeIsland === "全部"
      ? `小镇冒险地图（全 ${list.length} 集）`
      : `${activeIsland}岛（${list.length} 集）`;

    const grid = document.getElementById("episodeGrid");
    grid.innerHTML = "";

    list.forEach((ep) => {
      const islMeta = DATA.islands.find((x) => x.id === ep.island) || DATA.islands[1];
      const stars = getEpStars(ep.id, prog, legacy);
      const card = document.createElement("a");
      card.className = "ep-card clay-press" + (stars === 3 ? " is-v3" : "");
      card.href = `./stage.html?ep=${ep.id}`;
      card.style.setProperty("--isl-soft", islMeta.soft);
      card.style.setProperty("--isl-tint", islMeta.tint);

      card.innerHTML = `
        <div class="ep-badge-box">
          <span class="ep-num-chip">${ep.id}</span>
          <img src="./img/v3/badges/${ep.id.toLowerCase()}.png" alt="${ep.title}" loading="lazy">
        </div>
        <div class="ep-meta">
          <div class="ep-meta-top">
            <h3>${ep.title}</h3>
            <span class="isl-chip">${ep.island}</span>
          </div>
          <div class="ep-words">${ep.words}</div>
          ${starRowHtml(stars)}
        </div>
        <div class="ep-go" style="${stars === 3 ? "" : "background:#EB6834;color:#FFF"}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 19,12 8,19"/></svg>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  /* 迎宾双主角点击语音互动 */
  let bubbleTimer = null;
  function pokeHero(who) {
    const rBtn = document.getElementById("heroRabbit");
    const cBtn = document.getElementById("heroCat");
    const rImg = document.getElementById("heroRabbitImg");
    const cImg = document.getElementById("heroCatImg");
    const bub = document.getElementById("heroBubble");

    clearTimeout(bubbleTimer);
    if (who === "rabbit") {
      rBtn.classList.remove("hop"); void rBtn.offsetWidth; rBtn.classList.add("hop");
      rImg.src = "./img/v3/actors/rabbit-talk.png";
      bub.textContent = "全 36 集绘本馆开放啦！";
      bub.classList.add("show");
      playClip("./audio/v3/sfx/chime.mp3", () => {
        rImg.src = "./img/v3/actors/rabbit.png";
      });
    } else {
      cBtn.classList.remove("hop"); void cBtn.offsetWidth; cBtn.classList.add("hop");
      cImg.src = "./img/v3/actors/cat-talk.png";
      bub.textContent = "每集都能集齐水粉贴纸哦！";
      bub.classList.add("show");
      playClip("./audio/v3/sfx/pop.mp3", () => {
        cImg.src = "./img/v3/actors/cat.png";
      });
    }
    bubbleTimer = setTimeout(() => {
      bub.classList.remove("show");
      rImg.src = "./img/v3/actors/rabbit.png";
      cImg.src = "./img/v3/actors/cat.png";
    }, 2600);
  }

  document.getElementById("heroRabbit").onclick = () => pokeHero("rabbit");
  document.getElementById("heroCat").onclick = () => pokeHero("cat");

  /* 贴纸收集册弹窗（支持按六大主题岛筛选全 36 集贴纸） */
  function renderStickerBookContent() {
    const prog = loadProgress();
    const unlocked = getUnlockedStickers(prog);
    const grid = document.getElementById("stickerGrid");

    let filterWrap = document.getElementById("stickerIslandFilter");
    if (!filterWrap) {
      filterWrap = document.createElement("div");
      filterWrap.id = "stickerIslandFilter";
      filterWrap.className = "parent-ep-tabs";
      grid.parentNode.insertBefore(filterWrap, grid);
    }
    filterWrap.innerHTML = "";
    DATA.islands.forEach((isl) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "p-tab" + (isl.id === stickerIsland ? " active" : "");
      b.textContent = isl.label;
      b.onclick = () => {
        stickerIsland = isl.id;
        renderStickerBookContent();
      };
      filterWrap.appendChild(b);
    });

    grid.innerHTML = "";
    ALL_EP_IDS.forEach((epId) => {
      const ep = STAGE_EPS[epId];
      if (!ep) return;
      if (stickerIsland !== "全部" && ep.island !== stickerIsland) return;
      ep.words.forEach((w) => {
        const isUn = unlocked.has(epId + ":" + w.key);
        const div = document.createElement("button");
        div.type = "button";
        div.className = "sticker-slot " + (isUn ? "unlocked" : "locked");
        div.innerHTML = `
          <img src="${w.cardImg}" alt="${w.word}" loading="lazy">
          <strong>${w.word}</strong>
          <span>${isUn ? w.zh.split("·")[0].trim() : epId + " 待收集"}</span>
        `;
        div.onclick = () => {
          if (isUn) {
            playClip(w.leadAudio);
          } else {
            location.href = `./stage.html?ep=${epId}`;
          }
        };
        grid.appendChild(div);
      });
    });
  }

  document.getElementById("btnStickerBook").onclick = () => {
    playClip(DATA.sfx.pop);
    renderStickerBookContent();
    document.getElementById("stickerModal").classList.add("open");
  };
  document.getElementById("closeStickerBtn").onclick = () => {
    document.getElementById("stickerModal").classList.remove("open");
  };
  document.getElementById("stickerModal").onclick = (e) => {
    if (e.target.id === "stickerModal") e.target.classList.remove("open");
  };

  /* 1.5 秒长按圆环童锁（家长角：支持全 36 集陪玩剧本与 A4 打印卡切换） */
  const gateBtn = document.getElementById("btnParentGate");
  const ringEl = document.getElementById("lockRingCircle");
  const toastEl = document.getElementById("lockToast");
  let holdStart = 0;
  let holdRaf = null;
  let toastTimer = null;
  const HOLD_MS = 1400;
  const CIRC = 82;

  function resetHold(showHint) {
    cancelAnimationFrame(holdRaf);
    holdStart = 0;
    ringEl.style.strokeDashoffset = String(CIRC);
    if (showHint) {
      clearTimeout(toastTimer);
      toastEl.classList.add("show");
      toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
    }
  }

  function stepHold(now) {
    if (!holdStart) return;
    const ratio = Math.min(1, (now - holdStart) / HOLD_MS);
    ringEl.style.strokeDashoffset = String(CIRC * (1 - ratio));
    if (ratio >= 1) {
      resetHold(false);
      openParentModal();
      return;
    }
    holdRaf = requestAnimationFrame(stepHold);
  }

  gateBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    holdStart = performance.now();
    holdRaf = requestAnimationFrame(stepHold);
  });
  gateBtn.addEventListener("pointerup", () => {
    if (!holdStart) return;
    resetHold((performance.now() - holdStart) < HOLD_MS);
  });
  gateBtn.addEventListener("pointerleave", () => resetHold(false));
  gateBtn.addEventListener("pointercancel", () => resetHold(false));

  function renderParentContent() {
    const tabs = document.getElementById("parentEpTabs");
    tabs.innerHTML = `
      <label style="font-size:13.5px;font-weight:900;color:#26403B;display:flex;align-items:center;gap:8px;width:100%">
        <span>选择集数查看剧本与打印卡：</span>
        <select id="parentEpSelect" style="flex:1;padding:9px 12px;border-radius:14px;border:2.5px solid #DFC599;background:#FFF;font-family:inherit;font-size:14px;font-weight:900;color:#26403B">
          ${ALL_EP_IDS.map((id) => {
            const e = STAGE_EPS[id];
            return `<option value="${id}" ${id === activeParentEp ? "selected" : ""}>${id} · 《${e.title}》（${e.island}）</option>`;
          }).join("")}
        </select>
      </label>
    `;
    document.getElementById("parentEpSelect").onchange = (ev) => {
      activeParentEp = ev.target.value;
      renderParentContent();
    };

    const ep = STAGE_EPS[activeParentEp];
    document.getElementById("parentScriptBox").innerHTML =
      `<div style="font-size:15px;font-weight:900;color:#26403B;margin-bottom:6px">🎯 ${ep.hook}</div>` +
      ep.parentScript.map((r) => `<div class="script-row"><b>${r.role}</b>${r.line}</div>`).join("");

    document.getElementById("parentWsBox").innerHTML = `
      <div style="display:flex;align-items:center;gap:12px">
        <img src="${ep.worksheet}" alt="涂色卡预览">
        <div>
          <strong style="display:block;font-size:15px;color:#4A2C14">${ep.id}《${ep.title}》A4 涂色连线卡</strong>
          <span style="font-size:12.5px;color:#7A5A3A;font-weight:700">含黑白涂色连线 + 7 天开口小星星打卡表</span>
        </div>
      </div>
      <a class="ws-dl-btn clay-press" href="${ep.worksheet}" download="兔猫英语小镇-${ep.id}-${ep.title}-亲子涂色卡.jpg">保存打印卡</a>
    `;
  }

  function openParentModal() {
    toastEl.classList.remove("show");
    playClip(DATA.sfx.chime);
    renderParentContent();
    document.getElementById("parentModal").classList.add("open");
  }

  document.getElementById("closeParentBtn").onclick = () => {
    document.getElementById("parentModal").classList.remove("open");
  };
  document.getElementById("parentModal").onclick = (e) => {
    if (e.target.id === "parentModal") e.target.classList.remove("open");
  };

  renderHeaderStats();
  renderFlagships();
  renderIslands();
  renderMapGrid();
})();
