/* 兔猫英语小镇 V3.0 · 三步绘本剧场核心交互引擎
   - StoryWeaver 逐词卡拉 OK 高亮
   - FeedTheMonster 抛物线飞向角色奖励动效
   - Web Audio 实时声波跟读话筒 + 无权限平滑节拍降级
   - Cboard 防连点节流 + 1.5s 长按童锁
*/
(function () {
  const DATA = window.TUMAO_V3;
  const params = new URLSearchParams(location.search);
  const rawEp = (params.get("ep") || "EP001").toUpperCase();
  const EP = DATA.stageEpisodes[rawEp] || DATA.stageEpisodes.EP001;
  const ORDER_IDS = DATA.mapEpisodes.map((e) => e.id);

  document.title = `${EP.id}《${EP.title}》· 兔猫绘本剧场`;
  document.getElementById("epTitleChip").textContent = `${EP.id} · ${EP.title}`;

  const shell = document.getElementById("stageShell");
  shell.style.setProperty("--ep-accent", EP.theme.accent);
  shell.style.setProperty("--ep-paper", EP.theme.paper);

  const theaterEl = document.getElementById("theaterPage");
  const locPill = document.getElementById("sceneLocPill");
  theaterEl.style.backgroundImage = `url('${EP.defaultScene}')`;
  locPill.textContent = EP.sceneLabel;

  /* 进度持久化 */
  function readAllProg() {
    try {
      return JSON.parse(localStorage.getItem("tumao_v3_progress") || "{}");
    } catch {
      return {};
    }
  }
  function saveEpProg(patch) {
    try {
      const all = readAllProg();
      const cur = all[EP.id] || { explore: false, quiz: false, speak: false, stickers: [] };
      const merged = { ...cur, ...patch };
      if (patch.addSticker) {
        const s = new Set(cur.stickers || []);
        s.add(patch.addSticker);
        merged.stickers = [...s];
        delete merged.addSticker;
      }
      all[EP.id] = merged;
      localStorage.setItem("tumao_v3_progress", JSON.stringify(all));
      if (merged.explore && merged.quiz && merged.speak) {
        const legacy = new Set(JSON.parse(localStorage.getItem("tumao_done_eps") || "[]"));
        legacy.add(EP.id);
        localStorage.setItem("tumao_done_eps", JSON.stringify([...legacy]));
      }
      syncStepStars();
    } catch {}
  }

  function syncStepStars() {
    const p = readAllProg()[EP.id] || {};
    document.getElementById("tabExplore").classList.toggle("done", !!p.explore);
    document.getElementById("tabQuiz").classList.toggle("done", !!p.quiz);
    document.getElementById("tabSpeak").classList.toggle("done", !!p.speak);
  }

  /* 防连点音频与角色口型系统 */
  let activeAudio = null;
  let audioSeqId = 0;
  let lastTapAt = 0;
  let karaokeTimers = [];

  function throttleOk(ms = 260) {
    const now = performance.now();
    if (now - lastTapAt < ms) return false;
    lastTapAt = now;
    return true;
  }

  function stopKaraoke() {
    karaokeTimers.forEach(clearTimeout);
    karaokeTimers = [];
    document.querySelectorAll(".k-tok.speaking").forEach((el) => el.classList.remove("speaking"));
  }

  function setActorState(who, talking, pose) {
    const rWrap = document.getElementById("stageRabbit");
    const cWrap = document.getElementById("stageCat");
    const rImg = document.getElementById("stageRabbitImg");
    const cImg = document.getElementById("stageCatImg");

    if (who === "rabbit") {
      rWrap.classList.toggle("talking", talking);
      rImg.src = pose ? `./img/v3/actors/${pose}.png` : (talking ? "./img/v3/actors/rabbit-talk.png" : "./img/v3/actors/rabbit.png");
    } else if (who === "cat") {
      cWrap.classList.toggle("talking", talking);
      cImg.src = pose ? `./img/v3/actors/${pose}.png` : (talking ? "./img/v3/actors/cat-talk.png" : "./img/v3/actors/cat.png");
    } else {
      rWrap.classList.remove("talking");
      cWrap.classList.remove("talking");
      rImg.src = "./img/v3/actors/rabbit.png";
      cImg.src = "./img/v3/actors/cat.png";
    }
  }

  function stopCurrentAudio() {
    audioSeqId++;
    stopKaraoke();
    if (activeAudio) {
      activeAudio.pause();
      activeAudio = null;
    }
    setActorState("none", false);
  }

  function playOneAudio(url, who) {
    const mySeq = audioSeqId;
    return new Promise((resolve) => {
      if (!url) { resolve(); return; }
      if (activeAudio) {
        activeAudio.pause();
        activeAudio = null;
      }
      const a = new Audio(url);
      activeAudio = a;
      if (who) setActorState(who, true);
      const finish = () => {
        if (mySeq === audioSeqId && who) setActorState(who, false);
        resolve();
      };
      a.onended = finish;
      a.onerror = finish;
      a.play().catch(finish);
    });
  }

  function playSfx(url) {
    if (!url) return;
    const s = new Audio(url);
    s.volume = 0.72;
    s.play().catch(() => {});
  }

  /* 逐词卡拉 OK 高亮字幕渲染 */
  function setKaraokeText(enSentence, zhText, targetWord, animateMs) {
    stopKaraoke();
    const enBox = document.getElementById("karaokeEn");
    const zhBox = document.getElementById("karaokeZh");
    zhBox.textContent = zhText || "";

    const tokens = enSentence.split(/\s+/).filter(Boolean);
    const cleanTarget = (targetWord || "").toLowerCase();
    enBox.innerHTML = tokens.map((tok, idx) => {
      const stripped = tok.replace(/[^a-zA-Z]/g, "").toLowerCase();
      const isT = cleanTarget && stripped === cleanTarget;
      return `<span class="k-tok ${isT ? "TargetWord" : ""}" id="ktok_${idx}">${tok}</span>`;
    }).join("");

    if (animateMs && tokens.length > 0) {
      const step = Math.max(240, Math.floor(animateMs / tokens.length));
      tokens.forEach((_, i) => {
        const t = setTimeout(() => {
          document.querySelectorAll(".k-tok.speaking").forEach((el) => el.classList.remove("speaking"));
          const el = document.getElementById("ktok_" + i);
          if (el) el.classList.add("speaking");
        }, i * step);
        karaokeTimers.push(t);
      });
      karaokeTimers.push(setTimeout(() => {
        document.querySelectorAll(".k-tok.speaking").forEach((el) => el.classList.remove("speaking"));
      }, tokens.length * step + 320));
    }
  }

  /* 星星粒子与抛物线飞向角色特效 */
  function burstStarsAt(rect, accentColor) {
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const cols = [accentColor || "#F5A623", "#FFD166", "#FFFFFF", "#4CC482"];
    for (let i = 0; i < 12; i++) {
      const sp = document.createElement("div");
      sp.className = "sparkle-star";
      sp.style.left = cx + "px";
      sp.style.top = cy + "px";
      const ang = (Math.PI * 2 * i) / 12 + Math.random() * 0.2;
      const dist = 46 + Math.random() * 64;
      sp.style.setProperty("--dx", Math.cos(ang) * dist + "px");
      sp.style.setProperty("--dy", Math.sin(ang) * dist - 12 + "px");
      const sz = 14 + Math.random() * 10;
      sp.innerHTML = `<svg width="${sz}" height="${sz}" viewBox="0 0 24 24"><path fill="${cols[i % cols.length]}" d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1z"/></svg>`;
      document.body.appendChild(sp);
      setTimeout(() => sp.remove(), 820);
    }
  }

  function flyStickerToCat(fromEl, imgSrc) {
    const fromR = fromEl.getBoundingClientRect();
    const catEl = document.getElementById("stageCat");
    const toR = catEl.getBoundingClientRect();

    const fly = document.createElement("img");
    fly.className = "flying-sticker";
    fly.src = imgSrc;
    fly.style.left = (fromR.left + fromR.width / 2 - 48) + "px";
    fly.style.top = (fromR.top + fromR.height / 2 - 48) + "px";
    document.body.appendChild(fly);

    setActorState("cat", false, "cat-reach");

    requestAnimationFrame(() => {
      const dx = (toR.left + toR.width / 2) - (fromR.left + fromR.width / 2);
      const dy = (toR.top + toR.height * 0.45) - (fromR.top + fromR.height / 2);
      fly.style.transform = `translate(${dx}px, ${dy}px) scale(0.35) rotate(14deg)`;
      fly.style.opacity = "0.2";
    });

    setTimeout(() => {
      fly.remove();
      setActorState("cat", false, "cat-receive");
      document.getElementById("stageRabbit").classList.add("cheer");
      catEl.classList.add("cheer");
      setTimeout(() => {
        document.getElementById("stageRabbit").classList.remove("cheer");
        catEl.classList.remove("cheer");
        setActorState("cat", false);
      }, 1000);
    }, 660);
  }

  /* 发光小手指路 */
  function pointGuideAt(el) {
    const f = document.getElementById("guideFinger");
    if (!el) {
      f.classList.remove("visible");
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.width === 0) {
      f.classList.remove("visible");
      return;
    }
    f.style.left = (r.left + r.width * 0.62) + "px";
    f.style.top = (r.top + r.height * 0.58) + "px";
    f.classList.add("visible");
  }

  /* 底部迷你宝物架 */
  const collectedSet = new Set((readAllProg()[EP.id]?.stickers) || []);

  function renderPocketTray() {
    const tray = document.getElementById("pocketTray");
    tray.className = "pocket-tray" + (EP.words.length > 4 ? " many" : "");
    tray.innerHTML = "";
    EP.words.forEach((w) => {
      const slot = document.createElement("button");
      slot.type = "button";
      const has = collectedSet.has(w.key);
      slot.className = "tray-mini" + (has ? " collected" : "");
      slot.innerHTML = `<img src="${w.cardImg}" alt="${w.word}">`;
      slot.onclick = () => {
        if (!throttleOk()) return;
        stopCurrentAudio();
        setKaraokeText(w.sentence, w.zh, w.highlight, 1500);
        playOneAudio(w.leadAudio, "rabbit");
      };
      tray.appendChild(slot);
    });
  }

  function renderSubDots(total, activeCount) {
    const box = document.getElementById("subDots");
    box.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const d = document.createElement("span");
      d.className = "s-dot" + (i < activeCount ? " on" : "");
      box.appendChild(d);
    }
  }

  /* ========================================================================
     Step 1 · 情景探索点读
     ======================================================================== */
  let stepMode = "explore";
  const visitedExplore = new Set();
  let lastExploreIdx = 0;

  function showNextBanner(label, onClick) {
    const b = document.getElementById("nextStepBanner");
    if (!label) {
      b.classList.remove("show");
      return;
    }
    b.innerHTML = `${label}`;
    b.onclick = onClick;
    b.classList.add("show");
  }

  function renderExploreView() {
    document.getElementById("deckInstruction").textContent = `👆 点一点水粉画卡，收集 ${EP.words.length} 个绘本宝物`;
    renderSubDots(EP.words.length, visitedExplore.size);
    showNextBanner(
      visitedExplore.size >= EP.words.length ? "🎯 宝物认齐啦！去玩听音寻宝 →" : "",
      () => switchStep("quiz")
    );

    const grid = document.getElementById("viewExplore");
    grid.className = `explore-grid count-${EP.words.length}`;
    grid.innerHTML = "";
    EP.words.forEach((w, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.id = "expCard_" + idx;
      card.className = "gouache-card clay-press" + (visitedExplore.has(w.key) ? " visited" : "");
      card.style.setProperty("--w-color", w.color);
      card.style.setProperty("--w-soft", w.soft);
      card.innerHTML = `
        <span class="card-star-corner">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1z"/></svg>
        </span>
        <div class="art-wrap"><img src="${w.cardImg}" alt="${w.word}"></div>
        <div class="card-word-pill">${w.word}</div>
        <div class="card-zh">${w.zh}</div>
      `;
      card.onclick = () => onExploreTap(idx, card);
      grid.appendChild(card);
    });

    if (visitedExplore.size === 0) {
      setTimeout(() => pointGuideAt(document.getElementById("expCard_0")), 280);
    } else {
      pointGuideAt(null);
    }
  }

  async function onExploreTap(idx, cardEl) {
    if (!throttleOk()) return;
    pointGuideAt(null);
    stopCurrentAudio();
    const mySeq = audioSeqId;
    lastExploreIdx = idx;
    const w = EP.words[idx];

    document.querySelectorAll(".gouache-card").forEach((c) => c.classList.remove("active-card"));
    cardEl.classList.add("active-card", "visited");
    burstStarsAt(cardEl.getBoundingClientRect(), w.color);

    theaterEl.style.backgroundImage = `url('${w.sceneImg}')`;
    locPill.textContent = w.sceneTag;

    visitedExplore.add(w.key);
    collectedSet.add(w.key);
    saveEpProg({ addSticker: w.key, explore: visitedExplore.size >= EP.words.length });
    renderPocketTray();
    renderSubDots(EP.words.length, visitedExplore.size);

    setKaraokeText(w.word + "!", w.zh, w.highlight, 700);
    await playOneAudio(w.leadAudio, "rabbit");
    if (mySeq !== audioSeqId) return;

    await new Promise((r) => setTimeout(r, 160));
    if (mySeq !== audioSeqId) return;

    setKaraokeText(w.sentence, w.zh, w.highlight, 1850);
    await playOneAudio(w.teachAudio, "cat");
    if (mySeq !== audioSeqId) return;

    if (visitedExplore.size >= EP.words.length) {
      playSfx(DATA.sfx.chime);
      showNextBanner("🎯 4 张都学会啦！进入第 2 步：听音寻宝 →", () => switchStep("quiz"));
    } else {
      const nextUnvisited = EP.words.findIndex((item) => !visitedExplore.has(item.key));
      if (nextUnvisited >= 0) {
        pointGuideAt(document.getElementById("expCard_" + nextUnvisited));
      }
    }
  }

  /* ========================================================================
     Step 2 · 无剧透听音寻宝（3秒留白思考圆点 + 抛物线飞向团团猫）
     ======================================================================== */
  let quizIdx = 0;
  let quizAnswered = false;
  let thinkTimers = [];
  let hintTimer = null;

  function clearQuizTimers() {
    thinkTimers.forEach(clearTimeout);
    thinkTimers = [];
    clearTimeout(hintTimer);
    for (let i = 0; i < 3; i++) {
      const orb = document.getElementById("think" + i);
      if (orb) orb.classList.remove("lit");
    }
  }

  function startThinkingCountdown(correctCardEl) {
    clearQuizTimers();
    [700, 1650, 2600].forEach((ms, i) => {
      thinkTimers.push(setTimeout(() => {
        const orb = document.getElementById("think" + i);
        if (orb && !quizAnswered) orb.classList.add("lit");
      }, ms));
    });
    hintTimer = setTimeout(() => {
      if (stepMode === "quiz" && !quizAnswered && correctCardEl) {
        correctCardEl.classList.add("hint-glow");
        pointGuideAt(correctCardEl);
      }
    }, 4500);
  }

  function renderQuizQuestion() {
    pointGuideAt(null);
    clearQuizTimers();
    quizAnswered = false;
    showNextBanner("", null);

    const target = EP.words[quizIdx];
    const opp = EP.words.find((x) => x.key === target.distractor) || EP.words[(quizIdx + 1) % EP.words.length];
    const pair = quizIdx % 2 === 0 ? [target, opp] : [opp, target];

    document.getElementById("deckInstruction").textContent = `🎯 听音寻宝（第 ${quizIdx + 1}/${EP.words.length} 题 · 答题前无文字剧透）`;
    renderSubDots(EP.words.length, quizIdx);

    theaterEl.style.backgroundImage = `url('${EP.defaultScene}')`;
    locPill.textContent = "仔细听团团猫找哪张图";
    setKaraokeText("Listen & Tap!", "仔细听英文口令，帮团团猫找出正确的画卡吧！", "", 0);

    const grid = document.getElementById("quizPairGrid");
    grid.innerHTML = "";
    let rightEl = null;

    pair.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-choice clay-press";
      btn.innerHTML = `
        <div class="q-img-wrap"><img src="${item.cardImg}" alt="绘本选项"></div>
        <div class="quiz-reveal-tag">${item.word} · ${item.zh.split("·")[0].trim()}</div>
      `;
      if (item.key === target.key) rightEl = btn;

      btn.onclick = async () => {
        if (!throttleOk()) return;
        if (quizAnswered) {
          playOneAudio(item.leadAudio, "rabbit");
          return;
        }
        if (item.key === target.key) {
          quizAnswered = true;
          pointGuideAt(null);
          clearQuizTimers();
          btn.classList.remove("hint-glow");
          btn.classList.add("right-pick");

          stopCurrentAudio();
          const mySeq = audioSeqId;
          playSfx(DATA.sfx.chime);
          burstStarsAt(btn.getBoundingClientRect(), target.color);
          flyStickerToCat(btn, target.cardImg);

          collectedSet.add(target.key);
          saveEpProg({ addSticker: target.key });
          renderPocketTray();
          renderSubDots(EP.words.length, quizIdx + 1);

          setKaraokeText(target.sentence, `答对啦！是 ${target.word}（${target.zh}）`, target.highlight, 1400);
          await playOneAudio(target.ansAudio, "cat");
          if (mySeq !== audioSeqId) return;

          setTimeout(() => {
            if (stepMode !== "quiz" || mySeq !== audioSeqId) return;
            if (quizIdx < EP.words.length - 1) {
              quizIdx++;
              renderQuizQuestion();
            } else {
              saveEpProg({ quiz: true });
              showNextBanner("🎤 太厉害啦！进入第 3 步：开口跟读亮星 →", () => switchStep("speak"));
            }
          }, 680);
        } else {
          btn.classList.remove("gentle-shake");
          void btn.offsetWidth;
          btn.classList.add("gentle-shake");
          playSfx(DATA.sfx.gentle);
          setKaraokeText("Try again!", "再仔细听一遍团团猫说的词哦～", "", 0);
          await playOneAudio(target.quizAudio, "cat");
        }
      };

      grid.appendChild(btn);
    });

    playOneAudio(target.quizAudio, "cat").then(() => {
      if (stepMode === "quiz" && !quizAnswered) {
        startThinkingCountdown(rightEl);
      }
    });
  }

  document.getElementById("btnQuizReplay").onclick = () => {
    if (!throttleOk()) return;
    stopCurrentAudio();
    playOneAudio(EP.words[quizIdx].quizAudio, "cat");
  };

  /* ========================================================================
     Step 3 · 开口跟读声波小话筒（Web Audio 音量感应 + 无麦克风节拍平滑降级）
     ======================================================================== */
  let speakIdx = 0;
  let isRecording = false;
  let kidBlobUrl = null;
  let micStream = null;
  let waveRaf = null;
  const NUM_BARS = 13;

  function initWaveBars() {
    const box = document.getElementById("waveBars");
    box.innerHTML = "";
    for (let i = 0; i < NUM_BARS; i++) {
      const b = document.createElement("span");
      b.className = "w-bar";
      box.appendChild(b);
    }
  }
  initWaveBars();

  function setWaveLevels(level01, active) {
    const bars = document.querySelectorAll("#waveBars .w-bar");
    const mid = (bars.length - 1) / 2;
    bars.forEach((b, i) => {
      b.classList.toggle("live", active);
      if (!active) {
        b.style.height = "8px";
        return;
      }
      const dist = 1 - Math.abs(i - mid) / (mid + 1);
      const jitter = 0.7 + Math.sin(performance.now() / 90 + i) * 0.3;
      const h = Math.max(8, Math.min(30, Math.round(8 + 24 * level01 * dist * jitter)));
      b.style.height = h + "px";
    });
  }

  function renderSpeakWord() {
    pointGuideAt(null);
    isRecording = false;
    cancelAnimationFrame(waveRaf);
    setWaveLevels(0, false);
    document.getElementById("btnMicRecord").classList.remove("recording");
    document.getElementById("btnPlayKidVoice").classList.remove("ready");
    showNextBanner("", null);

    const w = EP.words[speakIdx];
    document.getElementById("deckInstruction").textContent = `🎤 开口大声读（第 ${speakIdx + 1}/${EP.words.length} 个词）`;
    renderSubDots(EP.words.length, speakIdx);

    document.getElementById("speakImg").src = w.cardImg;
    document.getElementById("speakWordBig").textContent = w.word;
    document.getElementById("speakZhSub").textContent = w.zh;
    document.getElementById("speakStatusTxt").textContent = "先听折折兔读，再点橘色小话筒大声跟读！";

    theaterEl.style.backgroundImage = `url('${w.sceneImg}')`;
    locPill.textContent = w.sceneTag;
    setKaraokeText(w.sentence, `跟着大声说：${w.word}!`, w.highlight, 1400);

    playOneAudio(w.leadAudio, "rabbit").then(() => {
      if (stepMode === "speak" && speakIdx === 0 && !isRecording) {
        pointGuideAt(document.getElementById("btnMicRecord"));
      }
    });
  }

  document.getElementById("btnModelVoice").onclick = () => {
    if (!throttleOk()) return;
    const w = EP.words[speakIdx];
    stopCurrentAudio();
    setKaraokeText(w.sentence, w.zh, w.highlight, 1500);
    playOneAudio(w.leadAudio, "rabbit");
  };

  document.getElementById("btnPlayKidVoice").onclick = () => {
    if (kidBlobUrl) {
      playOneAudio(kidBlobUrl, "cat");
    }
  };

  async function onSpeakComplete() {
    isRecording = false;
    cancelAnimationFrame(waveRaf);
    setWaveLevels(0, false);
    const micBtn = document.getElementById("btnMicRecord");
    micBtn.classList.remove("recording");

    const w = EP.words[speakIdx];
    playSfx(DATA.sfx.chime);
    burstStarsAt(micBtn.getBoundingClientRect(), w.color);
    renderSubDots(EP.words.length, speakIdx + 1);
    document.getElementById("speakStatusTxt").textContent = `🌟 读得真响亮！${w.word} 点亮成功！`;
    await playOneAudio(w.leadAudio, "rabbit");

    if (speakIdx < EP.words.length - 1) {
      showNextBanner(`下一个词：${EP.words[speakIdx + 1].word} →`, () => {
        speakIdx++;
        renderSpeakWord();
      });
    } else {
      saveEpProg({ explore: true, speak: true });
      openPartyModal();
    }
  }

  function runFallbackRhythmSpeak() {
    const start = performance.now();
    document.getElementById("speakStatusTxt").textContent = "🎵 大声读出来：3 · 2 · 1 ...";
    function tick(now) {
      if (!isRecording) return;
      const elapsed = now - start;
      const lvl = 0.55 + 0.35 * Math.sin(elapsed / 120);
      setWaveLevels(lvl, true);
      if (elapsed >= 2300) {
        onSpeakComplete();
        return;
      }
      waveRaf = requestAnimationFrame(tick);
    }
    waveRaf = requestAnimationFrame(tick);
  }

  document.getElementById("btnMicRecord").onclick = async () => {
    if (!throttleOk() || isRecording) return;
    pointGuideAt(null);
    stopCurrentAudio();
    playSfx(DATA.sfx.micOn);

    isRecording = true;
    const micBtn = document.getElementById("btnMicRecord");
    micBtn.classList.add("recording");
    document.getElementById("speakStatusTxt").textContent = "🎤 正在听宝贝大声读...";

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      runFallbackRhythmSpeak();
      return;
    }

    try {
      if (!micStream) {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const source = ctx.createMediaStreamSource(micStream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      source.connect(analyser);
      const dataArr = new Uint8Array(analyser.frequencyBinCount);

      const chunks = [];
      let recorder = null;
      if (window.MediaRecorder) {
        recorder = new MediaRecorder(micStream);
        recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
        recorder.onstop = () => {
          if (chunks.length > 0) {
            if (kidBlobUrl) URL.revokeObjectURL(kidBlobUrl);
            kidBlobUrl = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType || "audio/webm" }));
            document.getElementById("btnPlayKidVoice").classList.add("ready");
          }
        };
        recorder.start();
      }

      const start = performance.now();
      function meterLoop(now) {
        if (!isRecording) {
          ctx.close().catch(() => {});
          return;
        }
        analyser.getByteFrequencyData(dataArr);
        let sum = 0;
        for (let i = 0; i < dataArr.length; i++) sum += dataArr[i];
        const avg = Math.min(1, (sum / dataArr.length) / 68 + 0.22);
        setWaveLevels(avg, true);

        if (now - start >= 2400) {
          if (recorder && recorder.state !== "inactive") recorder.stop();
          ctx.close().catch(() => {});
          onSpeakComplete();
          return;
        }
        waveRaf = requestAnimationFrame(meterLoop);
      }
      waveRaf = requestAnimationFrame(meterLoop);
    } catch {
      runFallbackRhythmSpeak();
    }
  };

  /* 通关庆祝派对弹窗 */
  function openPartyModal() {
    playSfx(DATA.sfx.fanfare);
    EP.words.forEach((w) => {
      collectedSet.add(w.key);
      saveEpProg({ addSticker: w.key });
    });
    renderPocketTray();

    document.getElementById("partyTitle").textContent = `太棒啦！${EP.id} 三星通关！`;
    document.getElementById("partySub").textContent = `《${EP.title}》4 枚水粉宝物贴纸已全部收进你的贴纸册！`;
    document.getElementById("partyStickers").innerHTML = EP.words.map((w, i) => `
      <div class="party-item" style="--d:${(i * 0.18).toFixed(2)}s">
        <img src="${w.cardImg}" alt="${w.word}">
      </div>
    `).join("");

    const curOrderIdx = ORDER_IDS.indexOf(EP.id);
    const nextId = ORDER_IDS[(curOrderIdx + 1) % ORDER_IDS.length];
    const nextEp = DATA.stageEpisodes[nextId];
    const nextBtn = document.getElementById("partyNextEpBtn");
    nextBtn.href = `./stage.html?ep=${nextId}`;
    nextBtn.textContent = `下一站 ${nextId}《${nextEp.title}》→`;

    document.getElementById("partyModal").classList.add("open");
  }

  /* 顶部三步切换控制 */
  function switchStep(next) {
    stopCurrentAudio();
    clearQuizTimers();
    pointGuideAt(null);
    isRecording = false;
    cancelAnimationFrame(waveRaf);

    stepMode = next;
    document.getElementById("tabExplore").classList.toggle("active", next === "explore");
    document.getElementById("tabQuiz").classList.toggle("active", next === "quiz");
    document.getElementById("tabSpeak").classList.toggle("active", next === "speak");

    document.getElementById("viewExplore").style.display = next === "explore" ? "grid" : "none";
    document.getElementById("viewQuiz").style.display = next === "quiz" ? "flex" : "none";
    document.getElementById("viewSpeak").style.display = next === "speak" ? "flex" : "none";

    if (next === "explore") renderExploreView();
    else if (next === "quiz") { quizIdx = 0; renderQuizQuestion(); }
    else if (next === "speak") { speakIdx = 0; renderSpeakWord(); }
  }

  document.getElementById("tabExplore").onclick = () => { playSfx(DATA.sfx.pop); switchStep("explore"); };
  document.getElementById("tabQuiz").onclick = () => { playSfx(DATA.sfx.pop); switchStep("quiz"); };
  document.getElementById("tabSpeak").onclick = () => { playSfx(DATA.sfx.pop); switchStep("speak"); };

  /* 重播按钮与舞台角色点击互动 */
  function replayCurrent() {
    if (!throttleOk()) return;
    stopCurrentAudio();
    if (stepMode === "explore") {
      const w = EP.words[lastExploreIdx];
      setKaraokeText(w.sentence, w.zh, w.highlight, 1750);
      playOneAudio(w.teachAudio, "rabbit");
    } else if (stepMode === "quiz") {
      playOneAudio(EP.words[quizIdx].quizAudio, "cat");
    } else {
      playOneAudio(EP.words[speakIdx].leadAudio, "rabbit");
    }
  }

  document.getElementById("btnReplay").onclick = replayCurrent;
  document.getElementById("stageRabbit").onclick = () => {
    if (!throttleOk()) return;
    stopCurrentAudio();
    const w = EP.words[stepMode === "speak" ? speakIdx : lastExploreIdx];
    setKaraokeText(w.word + "!", w.zh, w.highlight, 800);
    playOneAudio(w.leadAudio, "rabbit");
  };
  document.getElementById("stageCat").onclick = replayCurrent;

  /* 舞台页 1.5s 长按童锁（打开本集家长剧本与涂色卡） */
  const pBtn = document.getElementById("btnStageParent");
  const pRing = document.getElementById("stageLockRing");
  const pToast = document.getElementById("stageLockToast");
  let pHoldStart = 0;
  let pRaf = null;
  let pToastTimer = null;

  function resetStageHold(showTip) {
    cancelAnimationFrame(pRaf);
    pHoldStart = 0;
    pRing.style.strokeDashoffset = "82";
    if (showTip) {
      clearTimeout(pToastTimer);
      pToast.classList.add("show");
      pToastTimer = setTimeout(() => pToast.classList.remove("show"), 2200);
    }
  }

  function loopStageHold(now) {
    if (!pHoldStart) return;
    const ratio = Math.min(1, (now - pHoldStart) / 1400);
    pRing.style.strokeDashoffset = String(82 * (1 - ratio));
    if (ratio >= 1) {
      resetStageHold(false);
      openStageParentModal();
      return;
    }
    pRaf = requestAnimationFrame(loopStageHold);
  }

  pBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    pHoldStart = performance.now();
    pRaf = requestAnimationFrame(loopStageHold);
  });
  pBtn.addEventListener("pointerup", () => {
    if (!pHoldStart) return;
    resetStageHold((performance.now() - pHoldStart) < 1400);
  });
  pBtn.addEventListener("pointerleave", () => resetStageHold(false));
  pBtn.addEventListener("pointercancel", () => resetStageHold(false));

  function openStageParentModal() {
    pToast.classList.remove("show");
    playSfx(DATA.sfx.chime);
    document.getElementById("spModalTitle").textContent = `👨‍👩‍👧 ${EP.id}《${EP.title}》陪玩剧本`;
    document.getElementById("spScriptCard").innerHTML =
      `<div style="font-size:15px;font-weight:900;color:#26403B;margin-bottom:6px">🎯 ${EP.hook}</div>` +
      EP.parentScript.map((r) => `<div class="script-row"><b>${r.role}</b>${r.line}</div>`).join("");

    document.getElementById("spWsBox").innerHTML = `
      <div style="display:flex;align-items:center;gap:12px">
        <img src="${EP.worksheet}" alt="A4涂色卡">
        <div>
          <strong style="display:block;font-size:15px;color:#4A2C14">${EP.id} A4 亲子涂色连线 + 7天打卡表</strong>
          <span style="font-size:12.5px;color:#7A5A3A;font-weight:700">打印出来用蜡笔连线涂色，今晚 1 分钟复习巩固</span>
        </div>
      </div>
      <a class="ws-dl-btn clay-press" href="${EP.worksheet}" download="兔猫英语小镇-${EP.id}-${EP.title}-亲子涂色卡.jpg">保存打印卡</a>
    `;
    document.getElementById("stageParentModal").classList.add("open");
  }

  document.getElementById("closeStageParentBtn").onclick = () => {
    document.getElementById("stageParentModal").classList.remove("open");
  };
  document.getElementById("stageParentModal").onclick = (e) => {
    if (e.target.id === "stageParentModal") e.target.classList.remove("open");
  };
  document.getElementById("partyModal").onclick = (e) => {
    if (e.target.id === "partyModal") e.target.classList.remove("open");
  };

  /* 初始化页面 */
  syncStepStars();
  renderPocketTray();
  renderExploreView();
})();
