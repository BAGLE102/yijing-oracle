const HEXAGRAMS = [
  ["乾", "Qián", "剛健創始", "充滿開創的力量，但真正的強大來自持續、自律與知進退。", "主動承擔，設定清楚方向；在氣勢正盛時仍保留謙遜。", "乾", "乾"],
  ["坤", "Kūn", "柔順承載", "此刻適合成為穩定的承載者，以耐心、包容與務實讓事情生長。", "先傾聽與配合大勢，把基礎照顧好，不急著搶先。", "坤", "坤"],
  ["屯", "Zhūn", "起始維艱", "新局面剛形成，混亂與阻力是萌芽期的自然現象。", "拆小步驟、尋找可信的協助，先建立秩序再求速度。", "坎", "震"],
  ["蒙", "Méng", "啟蒙求知", "資訊未明，現在最需要的是保持學習者姿態，而非急著下定論。", "承認不知道，找到好老師與好問題，建立判斷基礎。", "艮", "坎"],
  ["需", "Xū", "守時待機", "條件尚未成熟，等待不是停滯，而是有準備地保存力量。", "補足資源與能力，辨認真正的時機，避免焦躁出手。", "坎", "乾"],
  ["訟", "Sòng", "爭議辨界", "立場衝突正在消耗彼此；即使有理，也要衡量爭到底的代價。", "回到事實與界線，尋求公正協調，適可而止。", "乾", "坎"],
  ["師", "Shī", "整眾有紀", "要處理複雜任務，需要明確紀律、分工與值得信賴的領導。", "統一目標與規則，以責任感帶隊，不以情緒用事。", "坤", "坎"],
  ["比", "Bǐ", "親比合作", "真誠的結盟能帶來支持，但關係必須建立在共同價值上。", "主動連結合適的人，也檢視彼此是否真正互信。", "坎", "坤"],
  ["小畜", "Xiǎo Xù", "小積成勢", "力量尚不足以大幅推進，細小的累積正逐步改變局勢。", "改善一個可控制的環節，以穩定小成果等待突破。", "巽", "乾"],
  ["履", "Lǚ", "謹慎踐行", "正走在敏感地帶，禮節、分寸與清醒能讓你安全前進。", "尊重規則與他人界線，每一步都確認後果。", "乾", "兌"],
  ["泰", "Tài", "通泰交融", "上下相通、條件和順，適合合作、建設與推進。", "把握順勢完成重要工作，同時預先照顧盛極而衰的風險。", "坤", "乾"],
  ["否", "Pǐ", "閉塞守正", "溝通阻滯、方向不合，此刻勉強推動只會增加耗損。", "守住原則、減少無效投入，等待環境或關係重新鬆動。", "乾", "坤"],
  ["同人", "Tóng Rén", "求同聚力", "跨越小圈子的坦誠合作，能形成更大的共同力量。", "公開你的目標與原則，與志同道合者並肩行動。", "乾", "離"],
  ["大有", "Dà Yǒu", "豐盛有成", "資源與能見度增加，真正的考驗是如何公正而明智地運用。", "分享成果、妥善分配資源，讓成功形成正向循環。", "離", "乾"],
  ["謙", "Qiān", "謙退受益", "降低自我、保留空間，反而能獲得長久信任與成長。", "少說多做，正確認識自己的能力，也看見他人的貢獻。", "坤", "艮"],
  ["豫", "Yù", "和樂預備", "熱情能動員人心，但若只有興奮而缺乏準備，很快就會消散。", "把期待轉成具體計畫，讓團隊在共同節奏中行動。", "震", "坤"],
  ["隨", "Suí", "隨時而動", "順應值得跟隨的趨勢，不是失去主見，而是理解時勢。", "分辨誰與什麼值得跟隨，保持彈性但不放棄原則。", "兌", "震"],
  ["蠱", "Gǔ", "整治積弊", "被忽略的問題已累積到必須處理；修復過去才能重新前進。", "追溯根因、承擔責任，分階段清理舊制度與壞習慣。", "艮", "巽"],
  ["臨", "Lín", "臨事教養", "影響力正在靠近或增長，適合以關懷與遠見帶領局面。", "親自理解現場，給予支持，也為成長設下界線。", "坤", "兌"],
  ["觀", "Guān", "觀察省思", "先拉開距離觀看全局；你的行為也正在被他人觀察。", "暫緩反應，收集訊號，以一致的言行建立影響力。", "巽", "坤"],
  ["噬嗑", "Shì Kè", "決斷障礙", "必須咬開阻礙、明確處理違規或含糊，事情才能重新流通。", "釐清證據與規則，採取公平而有力度的處置。", "離", "震"],
  ["賁", "Bì", "文飾得宜", "形式能讓內容被看見，但裝飾應服務本質，不能掩蓋空洞。", "整理表達與呈現，同時確認核心內容足夠真實。", "艮", "離"],
  ["剝", "Bō", "剝落止損", "舊結構正在脫落，此時不宜硬撐擴張，應先保全根本。", "停止消耗、捨棄不再適用之物，安靜等待轉機。", "艮", "坤"],
  ["復", "Fù", "回歸正道", "在偏離或低谷之後，一點新的生機已經出現。", "回到最初真正重要的事，從微小而穩定的行動重新開始。", "坤", "震"],
  ["无妄", "Wú Wàng", "真誠無妄", "不以私心算計，依循事實與自然秩序，才能避開妄動。", "保持動機單純，做應做之事，不強求不可控制的結果。", "乾", "震"],
  ["大畜", "Dà Chù", "厚積待發", "力量正在大量累積，現在重點是鍛鍊、儲備與駕馭能力。", "深化專業、節制衝動，等資源與時機同時成熟。", "艮", "乾"],
  ["頤", "Yí", "滋養慎言", "你所攝取與給出的內容，正在塑造身心與關係。", "檢視飲食、資訊與言語，只留下真正能滋養你的事物。", "艮", "震"],
  ["大過", "Dà Guò", "承重過度", "負荷已超過常態，需要非常手段與清楚取捨才能避免折斷。", "辨認最關鍵的支點，減少次要負擔，果斷處理失衡。", "兌", "巽"],
  ["坎", "Kǎn", "習險守心", "困難可能反覆出現；真正可靠的是內在的誠信與熟練。", "一步一步穿越風險，建立備案，不因恐懼失去判斷。", "坎", "坎"],
  ["離", "Lí", "明辨依附", "清楚的認知能照亮局勢，但光明也需要依附正確的根基。", "確認你依賴的資訊與關係，保持清明並持續學習。", "離", "離"],
  ["咸", "Xián", "感應相通", "彼此影響正在形成，真誠而不操控的互動最有力量。", "感受細微信號，尊重對方，以開放態度建立連結。", "兌", "艮"],
  ["恆", "Héng", "持久有常", "長期成果來自穩定原則與持續調整，而非一時熱情。", "建立可維持的節奏，忠於方向，也容許方法更新。", "震", "巽"],
  ["遯", "Dùn", "適時退讓", "局勢不利時，主動拉開距離是保存力量與尊嚴的智慧。", "退出無益糾纏，整理邊界，為下一階段保留空間。", "乾", "艮"],
  ["大壯", "Dà Zhuàng", "盛強守正", "力量充沛，但越有能力越需克制；強行推進容易傷人傷己。", "把力量用在正當目標，避免逞強，以規則約束行動。", "震", "乾"],
  ["晉", "Jìn", "明出地上", "努力逐漸被看見，適合主動展現成果並持續向前。", "清楚呈現價值，接受支持，以正直方式擴大影響。", "離", "坤"],
  ["明夷", "Míng Yí", "晦明自保", "光明受到壓抑，直接顯露可能招致傷害，需內明外柔。", "保護核心能力，低調行事，不在錯誤時機證明自己。", "坤", "離"],
  ["家人", "Jiā Rén", "正家有序", "穩定來自清楚角色、日常責任與由內而外的一致。", "先整理自己的位置與承諾，再要求整體改變。", "巽", "離"],
  ["睽", "Kuí", "異中求同", "觀點分歧不必然是敵對；小處協作仍可能保留關係。", "承認差異，尋找最小共識，不強迫所有人完全一致。", "離", "兌"],
  ["蹇", "Jiǎn", "遇阻反身", "前方阻礙明顯，繞路、求助與回頭檢查都比硬闖有效。", "停下評估障礙，借助專業與夥伴，調整路線。", "坎", "艮"],
  ["解", "Xiè", "舒解脫困", "緊張開始鬆動，及時處理殘留問題，就能真正恢復流動。", "把握窗口化解誤會、簡化負擔；能回歸平常就不要拖延。", "震", "坎"],
  ["損", "Sǔn", "減損成全", "有意識地減少，能把有限資源集中到真正重要之處。", "刪除一項非必要投入，以真誠而非表面犧牲換取平衡。", "艮", "兌"],
  ["益", "Yì", "增益共享", "成長機會已出現，讓利益流向需要之處，整體才會更強。", "投入能長期增值的事，分享資源，迅速把握改善機會。", "巽", "震"],
  ["夬", "Guài", "果決宣告", "問題已到必須公開表態與切斷的時刻，但不可訴諸暴烈。", "把風險說清楚，先整合支持，再堅定移除不當因素。", "兌", "乾"],
  ["姤", "Gòu", "意外相遇", "突如其來的人事物具有強烈影響，吸引力不等於適合長久。", "保持清醒與界線，先觀察其影響，不輕易交出主導權。", "乾", "巽"],
  ["萃", "Cuì", "聚集共識", "人與資源正在匯聚，需要共同中心與真誠承諾避免散亂。", "明確召集目的，建立儀式與秩序，也為意外預作準備。", "兌", "坤"],
  ["升", "Shēng", "積小上升", "循序投入正在帶來穩定上升，適合謙遜地尋求更大舞台。", "從可行的小步開始，拜訪能提供指引的人，持續累積。", "坤", "巽"],
  ["困", "Kùn", "困中守志", "資源與理解受限，言語難以取信；此時品格比辯解更有力量。", "節省能量、守住核心承諾，以行動等待局勢轉開。", "兌", "坎"],
  ["井", "Jǐng", "養源利眾", "真正長久的價值像井水，需要維護取用系統，才能服務眾人。", "改善基礎設施與共享方法，不要讓好資源因管理失當而浪費。", "坎", "巽"],
  ["革", "Gé", "順時變革", "舊制度已不合時，變革需要正當理由、成熟時機與可信承諾。", "先取得共識，再明確更新規則；變後持續驗證成果。", "兌", "離"],
  ["鼎", "Dǐng", "鼎新養賢", "新的結構正在成形，適合轉化資源、培養人才與建立文化。", "安定團隊角色，把原料轉成共同成果，重視品質與傳承。", "離", "巽"],
  ["震", "Zhèn", "驚動而醒", "突發變化帶來震動，也迫使你醒來看清真正重要的事。", "先穩住自己，再迅速確認風險；從驚慌中恢復秩序。", "震", "震"],
  ["艮", "Gèn", "止於其所", "當止則止能恢復界線與專注；不是所有事情都需要回應。", "停下多餘行動，安定身心，只處理此刻職責範圍內的事。", "艮", "艮"],
  ["漸", "Jiàn", "循序漸進", "關係與成果都需要按次序成熟，跳過階段會使基礎不穩。", "設定可驗證的里程碑，尊重過程，讓信任逐步形成。", "巽", "艮"],
  ["歸妹", "Guī Mèi", "位置未正", "在條件或角色尚未對等時投入，容易被短期情勢牽動。", "先釐清名分、責任與長期代價，不被眼前吸引催促。", "震", "兌"],
  ["豐", "Fēng", "盛大明決", "事物來到高峰，資訊與任務同時繁多，需在明盛時果斷處理。", "聚焦最重要的決策，把成果照亮他人，也準備盛況過後的安排。", "震", "離"],
  ["旅", "Lǚ", "旅途守禮", "身處陌生或暫時環境，彈性、低調與尊重規矩能保平安。", "輕裝前行、保留紀錄與退路，不在客地捲入不必要衝突。", "離", "艮"],
  ["巽", "Xùn", "柔入漸深", "溫和而持續的滲透，比一次強攻更能進入問題核心。", "反覆確認方向，以謙遜溝通、小步執行累積影響。", "巽", "巽"],
  ["兌", "Duì", "喜悅相悅", "真誠交流帶來喜悅與合作，但討好或空談會削弱信任。", "開放對話、互相鼓勵，同時保持誠實與必要界線。", "兌", "兌"],
  ["渙", "Huàn", "渙散重聚", "隔閡與僵結需要被溶解，再以共同信念重新凝聚。", "先化解恐懼與誤會，建立共享目標，讓資訊重新流動。", "巽", "坎"],
  ["節", "Jié", "節制有度", "適當限制能帶來自由與效率，但過度苛刻會失去生命力。", "設定清楚、可持續的界線，定期檢查規則是否合理。", "坎", "兌"],
  ["中孚", "Zhōng Fú", "中心誠信", "內在真誠能穿透隔閡；信任來自言行一致，而非技巧。", "說真話、守承諾，也以同理心核對彼此真正理解的內容。", "巽", "兌"],
  ["小過", "Xiǎo Guò", "小事可為", "宜處理細節與小幅修正，不適合追求宏大跨越。", "保持謙下，把小事做好；降低姿態與風險，勿好高騖遠。", "震", "艮"],
  ["既濟", "Jì Jì", "已成防亂", "事情看似完成，正是最容易鬆懈而失序的階段。", "完成收尾、建立維護機制，注意微小偏差與新的風險。", "坎", "離"],
  ["未濟", "Wèi Jì", "未成慎終", "接近完成但仍未越過最後關口，急躁可能讓累積前功盡棄。", "確認最後條件與順序，保持專注，完成前不輕言成功。", "離", "坎"]
].map((x, i) => ({ number: i + 1, symbol: String.fromCodePoint(0x4DC0 + i), name: x[0], pinyin: x[1], theme: x[2], reading: x[3], advice: x[4], upper: x[5], lower: x[6] }));

const TRIGRAM_BITS = { "乾": "111", "兌": "110", "離": "101", "震": "100", "巽": "011", "坎": "010", "艮": "001", "坤": "000" };
const PATTERN_TO_INDEX = new Map(HEXAGRAMS.map((h, i) => [TRIGRAM_BITS[h.lower] + TRIGRAM_BITS[h.upper], i]));
const $ = (id) => document.getElementById(id);
const state = { question: "", lines: [], primary: null, changed: null };
const LINE_LABELS = { 6: "老陰 · 動爻", 7: "少陽 · 靜爻", 8: "少陰 · 靜爻", 9: "老陽 · 動爻" };
const ORDINALS = ["一", "二", "三", "四", "五", "六"];
let ritualStage = "idle", shakeEnergy = 0, shellPointerActive = false, shellLastX = 0, shakeTimer = null;

$("question").addEventListener("input", (e) => { $("charCount").textContent = e.target.value.length; $("formNote").textContent = ""; });
$("openGuide").addEventListener("click", () => $("guideDialog").showModal());
$("closeGuide").addEventListener("click", () => $("guideDialog").close());
$("guideDialog").addEventListener("click", (e) => { if (e.target === $("guideDialog")) $("guideDialog").close(); });

function randomBit() {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
  return buf[0] & 1;
}

function castLine() {
  const heads = randomBit() + randomBit() + randomBit();
  return 6 + heads; // 6老陰、7少陽、8少陰、9老陽
}

function lineIsYang(value) { return value === 7 || value === 9; }
function lineChanges(value) { return value === 6 || value === 9; }
function bitsFromLines(lines, changed = false) {
  return lines.map(v => Number(changed && lineChanges(v) ? !lineIsYang(v) : lineIsYang(v))).join("");
}

function makeLine(value, isMoving = false) {
  const el = document.createElement("div");
  el.className = `gua-line ${lineIsYang(value) ? "yang" : "yin"}${isMoving && lineChanges(value) ? " moving" : ""}`;
  return el;
}

function renderLines(container, lines, moving = false) {
  container.replaceChildren(...lines.map(v => makeLine(v, moving)));
}

function getHexagram(bits) { return HEXAGRAMS[PATTERN_TO_INDEX.get(bits)]; }

function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function getCastingMode() { return document.querySelector('input[name="castingMode"]:checked')?.value || "quick"; }

function updateCastingModeCopy() {
  const ritual = getCastingMode() === "ritual";
  $("castButtonTitle").textContent = ritual ? "進入龜甲起卦" : "誠心起卦";
  $("castButtonHint").textContent = ritual ? "親手搖六次銅錢" : "自動擲六次銅錢";
}

document.querySelectorAll('input[name="castingMode"]').forEach(input => input.addEventListener("change", updateCastingModeCopy));
updateCastingModeCopy();

$("castButton").addEventListener("click", async () => {
  const question = $("question").value.trim();
  if (!question) {
    $("formNote").textContent = "請先寫下一個此刻真正關心的問題。";
    $("question").focus();
    return;
  }

  if (getCastingMode() === "ritual") {
    startRitualCasting(question);
    return;
  }
  await startQuickCasting(question);
});

async function startQuickCasting(question) {
  state.question = question;
  state.lines = [];
  $("castButton").disabled = true;
  $("resultSection").hidden = true;
  $("castingSection").hidden = false;
  $("quickCasting").hidden = false;
  $("ritualCasting").hidden = true;
  $("miniLines").replaceChildren();
  $("castingSection").scrollIntoView({ behavior: "smooth", block: "center" });

  for (let i = 0; i < 6; i++) {
    $("castingStatus").textContent = `凝神，擲出第${ORDINALS[i]}爻…`;
    await delay(520);
    const value = castLine();
    state.lines.push(value);
    const mini = document.createElement("div");
    mini.className = `mini-line ${lineIsYang(value) ? "yang" : "yin"}`;
    $("miniLines").appendChild(mini);
    await delay(180);
  }

  finishCasting();
}

function finishCasting() {
  state.primary = getHexagram(bitsFromLines(state.lines));
  state.changed = getHexagram(bitsFromLines(state.lines, true));
  renderResult();
  $("castingSection").hidden = true;
  $("resultSection").hidden = false;
  $("castButton").disabled = false;
  $("resultSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function startRitualCasting(question) {
  state.question = question;
  state.lines = [];
  ritualStage = "shaking";
  $("castButton").disabled = true;
  $("resultSection").hidden = true;
  $("castingSection").hidden = false;
  $("quickCasting").hidden = true;
  $("ritualCasting").hidden = false;
  $("ritualBuiltLines").replaceChildren();
  prepareRitualRound();
  $("castingSection").scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetRitualCoins() {
  const tray = $("coinTray");
  tray.classList.remove("spilled");
  tray.querySelectorAll(".ritual-coin").forEach(coin => {
    coin.className = "ritual-coin";
    coin.querySelector("b").textContent = "？";
    coin.querySelector("small").textContent = "";
  });
}

function prepareRitualRound() {
  ritualStage = "shaking";
  shakeEnergy = 0;
  const round = state.lines.length;
  $("ritualRoundNumber").textContent = String(round + 1);
  $("ritualRoundLabel").textContent = `第${ORDINALS[round]}爻 · ${round === 0 ? "由最下方開始" : "由下而上"}`;
  $("ritualInstruction").textContent = "將三枚銅錢收入龜甲。按住金龜持續搖動，鬆手即可停下。";
  $("shakeMeterFill").style.width = "0%";
  $("spillCoinsButton").disabled = true;
  $("spillCoinsButton").textContent = "先按住金龜搖動";
  $("tortoiseShell").classList.remove("is-pouring", "is-shaking", "is-ready", "nudge");
  resetRitualCoins();
}

function addShakeEnergy(amount) {
  if (ritualStage !== "shaking") return;
  shakeEnergy = Math.min(10, shakeEnergy + amount);
  $("shakeMeterFill").style.width = `${shakeEnergy * 10}%`;
  if (shakeEnergy >= 10) {
    $("spillCoinsButton").disabled = false;
    $("spillCoinsButton").textContent = "將銅錢倒在案上";
    $("ritualInstruction").textContent = shellPointerActive ? "銅錢已充分搖勻，現在可以鬆手。" : "銅錢已充分搖勻。按下方按鈕，將它們倒在案上。";
    $("tortoiseShell").classList.add("is-ready");
    if (navigator.vibrate) navigator.vibrate(18);
  }
}

function nudgeRitualShell() {
  if (ritualStage !== "shaking") return;
  const shell = $("tortoiseShell");
  shell.classList.remove("nudge");
  void shell.offsetWidth;
  shell.classList.add("nudge");
  addShakeEnergy(1.8);
  setTimeout(() => shell.classList.remove("nudge"), 430);
}

function endShellPointer(event) {
  if (!shellPointerActive) return;
  shellPointerActive = false;
  clearInterval(shakeTimer);
  shakeTimer = null;
  const shell = $("tortoiseShell");
  shell.classList.remove("is-shaking");
  if (event.pointerId !== undefined && shell.hasPointerCapture?.(event.pointerId)) shell.releasePointerCapture(event.pointerId);
  if (shakeEnergy >= 10) $("ritualInstruction").textContent = "銅錢已充分搖勻。按下方按鈕，將它們倒在案上。";
}

$("tortoiseShell").addEventListener("pointerdown", event => {
  if (ritualStage !== "shaking") return;
  shellPointerActive = true;
  shellLastX = event.clientX;
  event.currentTarget.setPointerCapture?.(event.pointerId);
  event.currentTarget.classList.add("is-shaking");
  $("ritualInstruction").textContent = "保持按住；也可以一邊輕輕左右移動，加快搖勻。";
  addShakeEnergy(.45);
  clearInterval(shakeTimer);
  shakeTimer = setInterval(() => addShakeEnergy(.65), 90);
});

$("tortoiseShell").addEventListener("pointermove", event => {
  if (!shellPointerActive || ritualStage !== "shaking") return;
  const dx = event.clientX - shellLastX;
  shellLastX = event.clientX;
  if (Math.abs(dx) > 3) addShakeEnergy(Math.min(.8, Math.abs(dx) / 18));
});

$("tortoiseShell").addEventListener("pointerup", endShellPointer);
$("tortoiseShell").addEventListener("pointercancel", endShellPointer);
$("tortoiseShell").addEventListener("click", () => {
  if (!shellPointerActive && shakeEnergy < 10) nudgeRitualShell();
});

async function spillRitualCoins() {
  ritualStage = "spilling";
  $("spillCoinsButton").disabled = true;
  const faces = [randomBit(), randomBit(), randomBit()];
  const value = 6 + faces.reduce((sum, face) => sum + face, 0);
  $("tortoiseShell").classList.add("is-pouring");
  await delay(280);
  $("coinTray").querySelectorAll(".ritual-coin").forEach((coin, index) => {
    const isFront = faces[index] === 1;
    coin.classList.toggle("is-back", !isFront);
    coin.querySelector("b").textContent = isFront ? "正" : "背";
    coin.querySelector("small").textContent = isFront ? "3" : "2";
  });
  $("coinTray").classList.add("spilled");
  if (navigator.vibrate) navigator.vibrate([12, 35, 16]);
  await delay(1050);
  state.lines.push(value);
  const line = document.createElement("div");
  line.className = `mini-line ${lineIsYang(value) ? "yang" : "yin"}${lineChanges(value) ? " moving" : ""}`;
  $("ritualBuiltLines").appendChild(line);
  $("ritualInstruction").textContent = `${faces.map(face => face ? "正" : "背").join("、")}，合計 ${value}：${LINE_LABELS[value]}。`;
  ritualStage = "landed";
  $("spillCoinsButton").disabled = false;
  $("spillCoinsButton").textContent = state.lines.length === 6 ? "六爻已成，觀看卦象" : "收回銅錢，繼續下一爻";
}

$("spillCoinsButton").addEventListener("click", () => {
  if (ritualStage === "shaking" && shakeEnergy >= 10) spillRitualCoins();
  else if (ritualStage === "landed" && state.lines.length < 6) prepareRitualRound();
  else if (ritualStage === "landed" && state.lines.length === 6) finishCasting();
});

function renderResult() {
  const h = state.primary;
  const moving = state.lines.map((v, i) => lineChanges(v) ? i + 1 : null).filter(Boolean);
  const hasChanges = moving.length > 0;
  $("primaryNumber").textContent = String(h.number).padStart(2, "0");
  $("primaryName").textContent = h.name;
  $("primaryPinyin").textContent = `${h.pinyin} · ${h.upper}上${h.lower}下`;
  $("primarySymbol").textContent = h.symbol;
  $("theme").textContent = h.theme;
  $("reading").textContent = h.reading;
  $("advice").textContent = h.advice;
  $("questionEcho").textContent = `「${state.question}」`;
  renderLines($("primaryLines"), state.lines, true);

  $("changingArrow").hidden = !hasChanges;
  $("changedWrap").hidden = !hasChanges;
  if (hasChanges) {
    const changedValues = state.lines.map(v => lineChanges(v) ? (lineIsYang(v) ? 8 : 7) : v);
    renderLines($("changedLines"), changedValues, false);
    $("changedName").textContent = `${state.changed.symbol} ${state.changed.name} · ${state.changed.theme}`;
    $("movingNote").textContent = `動爻：${moving.map(n => ["初", "二", "三", "四", "五", "上"][n - 1]).join("、")}爻。局勢正由「${h.theme}」轉向「${state.changed.theme}」，可同時留意當下與變化後的方向。`;
  } else {
    $("movingNote").textContent = "本次無動爻，卦象較為穩定。宜專注理解本卦核心，不必急著尋求額外變化。";
  }
  $("resultDate").textContent = new Intl.DateTimeFormat("zh-Hant-TW", { dateStyle: "long" }).format(new Date());
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 10) {
  const chars = [...text]; let line = ""; let count = 0;
  for (let i = 0; i < chars.length && count < maxLines; i++) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y + count * lineHeight); count++; line = chars[i];
    } else line = test;
  }
  if (line && count < maxLines) ctx.fillText(line, x, y + count * lineHeight);
  return y + (count + 1) * lineHeight;
}

function drawHexagram(ctx, lines, x, y, width, color, markMoving = false) {
  const gap = 30, height = 15;
  lines.forEach((value, i) => {
    const yy = y + (5 - i) * gap;
    ctx.fillStyle = color;
    if (lineIsYang(value)) ctx.fillRect(x, yy, width, height);
    else { ctx.fillRect(x, yy, width * .42, height); ctx.fillRect(x + width * .58, yy, width * .42, height); }
    if (markMoving && lineChanges(value)) { ctx.fillStyle = "#a33b2b"; ctx.font = "24px sans-serif"; ctx.fillText(lineIsYang(value) ? "○" : "×", x + width + 17, yy + 15); }
  });
}

function buildExportCanvas() {
  const canvas = $("exportCanvas"); const ctx = canvas.getContext("2d"); const h = state.primary;
  ctx.fillStyle = "#f1ead8"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createRadialGradient(920, 180, 20, 920, 180, 640);
  gradient.addColorStop(0, "rgba(49,91,80,.16)"); gradient.addColorStop(1, "rgba(49,91,80,0)");
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(45,43,34,.3)"; ctx.lineWidth = 2; ctx.strokeRect(54, 54, 972, 1242); ctx.strokeRect(66, 66, 948, 1218);

  ctx.fillStyle = "#a33b2b"; ctx.fillRect(90, 92, 72, 72); ctx.fillStyle = "#f1ead8"; ctx.font = "44px 'Microsoft JhengHei', serif"; ctx.textAlign = "center"; ctx.fillText("易", 126, 145); ctx.textAlign = "left";
  ctx.fillStyle = "#20231f"; ctx.font = "34px 'Microsoft JhengHei', serif"; ctx.fillText("觀 易", 184, 125); ctx.fillStyle = "#68675d"; ctx.font = "16px sans-serif"; ctx.fillText("一念 · 六爻 · 萬象", 184, 151);
  ctx.fillStyle = "#a33b2b"; ctx.font = "18px sans-serif"; ctx.fillText("本卦 · THE PRESENT", 90, 242);
  ctx.fillStyle = "#20231f"; ctx.font = "72px 'Microsoft JhengHei', serif"; ctx.fillText(`${String(h.number).padStart(2,"0")}  ${h.name}`, 90, 327);
  ctx.fillStyle = "#68675d"; ctx.font = "24px sans-serif"; ctx.fillText(`${h.pinyin} · ${h.upper}上${h.lower}下`, 94, 365);
  ctx.fillStyle = "#20231f"; ctx.font = "132px serif"; ctx.fillText(h.symbol, 790, 325);
  ctx.strokeStyle = "rgba(45,43,34,.2)"; ctx.beginPath(); ctx.moveTo(90, 400); ctx.lineTo(990, 400); ctx.stroke();
  drawHexagram(ctx, state.lines, 130, 454, 270, "#20231f", true);

  const moving = state.lines.some(lineChanges);
  if (moving) {
    ctx.fillStyle = "#a33b2b"; ctx.font = "22px serif"; ctx.fillText("變", 492, 542);
    const changedValues = state.lines.map(v => lineChanges(v) ? (lineIsYang(v) ? 8 : 7) : v);
    drawHexagram(ctx, changedValues, 585, 473, 170, "#20231f");
    ctx.fillStyle = "#20231f"; ctx.font = "25px 'Microsoft JhengHei', serif"; ctx.fillText(`之卦 ${state.changed.name}`, 585, 685);
    ctx.fillStyle = "#68675d"; ctx.font = "18px 'Microsoft JhengHei', serif"; ctx.fillText(state.changed.theme, 585, 716);
  }

  ctx.fillStyle = "rgba(163,59,43,.06)"; ctx.fillRect(90, 755, 900, 95);
  ctx.fillStyle = "#5f6258"; ctx.font = "22px 'Microsoft JhengHei', serif"; wrapText(ctx, `「${state.question}」`, 116, 794, 848, 31, 2);
  ctx.fillStyle = "#a33b2b"; ctx.font = "17px sans-serif"; ctx.fillText("卦意", 90, 916);
  ctx.fillStyle = "#20231f"; ctx.font = "38px 'Microsoft JhengHei', serif"; ctx.fillText(h.theme, 90, 965);
  ctx.fillStyle = "#5f6258"; ctx.font = "24px 'Microsoft JhengHei', serif"; wrapText(ctx, h.reading, 90, 1010, 900, 40, 3);
  ctx.fillStyle = "#a33b2b"; ctx.font = "17px sans-serif"; ctx.fillText("此刻宜", 90, 1142);
  ctx.fillStyle = "#20231f"; ctx.font = "24px 'Microsoft JhengHei', serif"; wrapText(ctx, h.advice, 90, 1182, 900, 39, 2);
  ctx.fillStyle = "#777568"; ctx.font = "16px sans-serif"; ctx.fillText("觀易 · 易經占卜｜僅供自我反思與文化體驗", 90, 1260);
  ctx.textAlign = "right"; ctx.fillText($("resultDate").textContent, 990, 1260); ctx.textAlign = "left";
  return canvas;
}

$("downloadButton").addEventListener("click", () => {
  const canvas = buildExportCanvas();
  const link = document.createElement("a");
  link.download = `觀易-${state.primary.name}-${new Date().toISOString().slice(0,10)}.png`;
  link.href = canvas.toDataURL("image/png"); link.click();
  $("shareStatus").textContent = "結果圖片已下載。";
});

$("copyButton").addEventListener("click", async () => {
  try {
    const blob = await new Promise(resolve => buildExportCanvas().toBlob(resolve, "image/png"));
    if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") throw new Error("unsupported");
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    $("shareStatus").textContent = "結果圖片已複製，可直接貼到訊息或筆記中。";
  } catch {
    $("shareStatus").textContent = "此瀏覽器不支援直接複製圖片，請改用「下載結果圖片」。";
  }
});

$("restartButton").addEventListener("click", () => {
  $("resultSection").hidden = true; $("question").value = ""; $("charCount").textContent = "0"; $("shareStatus").textContent = "";
  window.scrollTo({ top: $("top").offsetTop, behavior: "smooth" }); $("question").focus();
});
