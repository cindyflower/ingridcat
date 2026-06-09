/**
 * 奇門遁甲五氣秘笈 — Card Data
 * 結合東方古代天文、地理和陰陽五行＋易經的底層邏輯，具有時間軸的元素
 */
import { type CardData } from "./card-draw-logic";

export const DECK_NAME = "奇門遁甲五氣秘笈";
export const DECK_BACK_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/qimen_card_back-Puc9LNnTjTWBcoPWmGb8o9.webp";
export const DECK_CARD_COUNT = 45;
export const DECK_HAS_REVERSED = true;

const SAMPLE_IMAGES = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/oracle_card_sample_1-BJDNqytJUcWstjYmqycGpd.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/oracle_card_sample_2-BS3KLftUP6WfmgZGKqgry9.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/oracle_card_sample_3-7y6Wtt4VGpw2tVT8iYozWL.webp",
];

export const CARDS: CardData[] = [
  // === 天干系列 (10張) ===
  { id: 1, name: "甲木", category: "天干", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["生長", "開創", "仁慈"], meaning: { upright: "萬物萌芽，新計劃的開端。如同參天大樹，向上生長的力量正在匯聚。", reversed: "成長受阻，計劃停滯。需要重新審視方向，找到突破口。" }, message: "破土而出的力量，正在你心中醞釀。" },
  { id: 2, name: "乙木", category: "天干", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["柔韌", "適應", "包容"], meaning: { upright: "以柔克剛，順勢而為。如藤蔓般靈活，找到最適合的生長方式。", reversed: "過度妥協，失去自我。需要找回內在的堅定。" }, message: "柔軟不是軟弱，而是智慧的選擇。" },
  { id: 3, name: "丙火", category: "天干", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["光明", "熱情", "領導"], meaning: { upright: "如太陽般耀眼，充滿熱情與活力。是展現自我、發光發熱的時刻。", reversed: "過度張揚，能量耗散。需要收斂光芒，蓄積力量。" }, message: "你的光芒，足以照亮前方的道路。" },
  { id: 4, name: "丁火", category: "天干", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["溫暖", "智慧", "洞察"], meaning: { upright: "如燭光般溫柔而堅定，內在智慧正在覺醒。適合深度思考與內省。", reversed: "思慮過度，猶豫不決。信任直覺，讓內在之光指引方向。" }, message: "最深的智慧，往往來自最安靜的時刻。" },
  { id: 5, name: "戊土", category: "天干", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["穩固", "承載", "信任"], meaning: { upright: "如大地般穩固可靠，是建立根基的好時機。踏實前行，必有收穫。", reversed: "固執己見，不願改變。大地也需要翻新，才能孕育新生。" }, message: "穩固的根基，是一切成就的起點。" },
  { id: 6, name: "己土", category: "天干", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["滋養", "轉化", "包容"], meaning: { upright: "如沃土般包容萬物，接納所有經歷並轉化為養分。", reversed: "過度付出，忽略自身需求。記得也要滋養自己。" }, message: "每一段經歷，都是滋養靈魂的養分。" },
  { id: 7, name: "庚金", category: "天干", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["果斷", "正義", "變革"], meaning: { upright: "如利劍般果斷，是做出重要決定的時刻。勇敢切斷不再服務你的事物。", reversed: "過於嚴厲，缺乏彈性。正義需要慈悲的調和。" }, message: "果斷的決定，為新的可能性開啟大門。" },
  { id: 8, name: "辛金", category: "天干", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["精緻", "純淨", "蛻變"], meaning: { upright: "如寶石般經過打磨而閃耀。痛苦的經歷正在將你雕琢成更好的自己。", reversed: "過度追求完美，忽略過程的美好。接納不完美也是一種智慧。" }, message: "每一次打磨，都讓你更加閃耀。" },
  { id: 9, name: "壬水", category: "天干", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["智慧", "流動", "深邃"], meaning: { upright: "如大海般深邃廣闊，智慧與直覺正在流動。順流而行，信任生命的安排。", reversed: "情緒氾濫，方向迷失。需要找到內在的平靜之處。" }, message: "如水般流動，智慧自然顯現。" },
  { id: 10, name: "癸水", category: "天干", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["靈感", "淨化", "重生"], meaning: { upright: "如雨露般滋潤萬物，靈感與創意正在湧現。適合靜心冥想，接收宇宙訊息。", reversed: "能量低落，需要淨化。讓過去的情緒如水般流走。" }, message: "每一滴雨水，都帶著天空的祝福。" },
  // === 地支系列 (12張) ===
  { id: 11, name: "子・鼠", category: "地支", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["機敏", "開始", "潛藏"], meaning: { upright: "萬物之始，新的循環即將展開。保持機敏，抓住稍縱即逝的機會。", reversed: "過度算計，錯失良機。有時需要放下顧慮，勇敢行動。" }, message: "子時一陽生，新的開始就在眼前。" },
  { id: 12, name: "丑・牛", category: "地支", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["勤勉", "積累", "厚德"], meaning: { upright: "腳踏實地，一步一腳印。持續的努力終將帶來豐碩的成果。", reversed: "過度勞累，忽略休息。牛也需要在田間歇息。" }, message: "每一步踏實的前行，都在累積未來的豐收。" },
  { id: 13, name: "寅・虎", category: "地支", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["勇氣", "行動", "突破"], meaning: { upright: "如猛虎下山，充滿力量與勇氣。是大膽行動、突破限制的時刻。", reversed: "衝動魯莽，缺乏規劃。勇氣需要智慧的引導。" }, message: "內在的力量已經甦醒，勇敢向前。" },
  { id: 14, name: "卯・兔", category: "地支", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["溫和", "外交", "和平"], meaning: { upright: "以溫和的方式化解衝突，人際關係和諧順暢。", reversed: "過度迴避衝突，壓抑真實感受。適時表達也是愛自己。" }, message: "溫柔的力量，能化解最堅硬的壁壘。" },
  { id: 15, name: "辰・龍", category: "地支", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["變化", "神秘", "飛昇"], meaning: { upright: "龍騰九天，巨大的轉變即將到來。擁抱變化，你正在蛻變。", reversed: "抗拒改變，困於舊有模式。龍需要雲雨才能飛昇。" }, message: "蛻變的時刻已到，展開你的翅膀。" },
  { id: 16, name: "巳・蛇", category: "地支", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["智慧", "蛻皮", "直覺"], meaning: { upright: "如蛇蛻皮般，舊的自我正在脫落。信任你的直覺，它正在引導你。", reversed: "過度防備，不信任他人。放下防衛，讓愛流入。" }, message: "蛻去舊皮，嶄新的你正在誕生。" },
  { id: 17, name: "午・馬", category: "地支", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["自由", "奔放", "熱情"], meaning: { upright: "如駿馬奔騰，充滿自由與活力。追隨熱情，不受拘束地前行。", reversed: "方向不明，能量散亂。需要找到韁繩，集中力量。" }, message: "自由的靈魂，不需要任何人的許可。" },
  { id: 18, name: "未・羊", category: "地支", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["慈悲", "藝術", "群體"], meaning: { upright: "溫柔的力量正在匯聚，適合創作、療癒與群體合作。", reversed: "過度依賴他人，失去獨立性。在群體中也要保持自我。" }, message: "溫柔是你最強大的力量。" },
  { id: 19, name: "申・猴", category: "地支", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["靈巧", "創新", "變通"], meaning: { upright: "靈活變通，以創新的方式解決問題。不拘泥於傳統，找到新路徑。", reversed: "過度投機取巧，缺乏深度。聰明需要用在正確的地方。" }, message: "靈活的心智，能找到無限的可能。" },
  { id: 20, name: "酉・雞", category: "地支", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["精確", "秩序", "覺察"], meaning: { upright: "如雞鳴報曉，是覺醒與清明的時刻。注重細節，精確執行。", reversed: "過度挑剔，吹毛求疵。完美主義可能成為前進的阻礙。" }, message: "清晨的第一道光，帶來全新的覺察。" },
  { id: 21, name: "戌・狗", category: "地支", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["忠誠", "守護", "正直"], meaning: { upright: "忠於自己的價值觀，守護重要的人事物。正直是最好的指南針。", reversed: "過度固守，不願接納新事物。忠誠也需要彈性。" }, message: "守護你所珍視的，同時也守護自己。" },
  { id: 22, name: "亥・豬", category: "地支", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["豐盛", "圓滿", "歸藏"], meaning: { upright: "一個循環的圓滿結束，豐盛與滿足感充盈。享受成果，準備新的開始。", reversed: "過度放縱，沉溺享樂。豐盛需要節制才能持久。" }, message: "圓滿不是結束，而是新循環的起點。" },
  // === 八門系列 (8張) ===
  { id: 23, name: "開門", category: "八門", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["開啟", "機遇", "吉祥"], meaning: { upright: "大門敞開，機遇正在向你走來。勇敢踏出第一步，一切順遂。", reversed: "機會之門暫時關閉，需要耐心等待正確的時機。" }, message: "當一扇門開啟，宇宙正在邀請你前行。" },
  { id: 24, name: "休門", category: "八門", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["休息", "恢復", "平靜"], meaning: { upright: "是時候停下來休息了。在平靜中恢復能量，為下一段旅程做準備。", reversed: "過度休息變成逃避。休息是為了走更長的路，不是停滯不前。" }, message: "休息不是懶惰，而是智慧的選擇。" },
  { id: 25, name: "生門", category: "八門", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["生機", "財運", "成長"], meaning: { upright: "生機勃勃，萬物生長。財運與機會正在萌芽，好好培育它們。", reversed: "急於求成，拔苗助長。成長需要時間和耐心。" }, message: "種下的種子，正在土壤中悄悄發芽。" },
  { id: 26, name: "傷門", category: "八門", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["突破", "競爭", "挑戰"], meaning: { upright: "面對挑戰，以競爭的精神突破限制。傷痛是成長的催化劑。", reversed: "過度攻擊性，傷人傷己。力量需要慈悲的平衡。" }, message: "每一道傷痕，都是勇氣的勳章。" },
  { id: 27, name: "杜門", category: "八門", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["隱藏", "保護", "內省"], meaning: { upright: "適合隱退內省，保護自己的能量。不是所有事都需要對外展示。", reversed: "過度封閉，與世隔絕。保護不等於隔離，適時打開心門。" }, message: "在安靜的角落，找到內在的寶藏。" },
  { id: 28, name: "景門", category: "八門", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["光明", "文采", "表達"], meaning: { upright: "如陽光普照，適合表達、創作與展現自我。你的光芒值得被看見。", reversed: "虛榮浮華，表裡不一。真正的光明來自內在的真實。" }, message: "讓你的才華如陽光般自然綻放。" },
  { id: 29, name: "死門", category: "八門", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["結束", "放下", "轉化"], meaning: { upright: "舊的必須死去，新的才能誕生。勇敢放下不再服務你的一切。", reversed: "恐懼結束，執著不放。死亡不是終點，而是轉化的開始。" }, message: "放下的那一刻，自由便降臨。" },
  { id: 30, name: "驚門", category: "八門", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["驚醒", "警示", "覺知"], meaning: { upright: "突如其來的驚醒，宇宙正在給你重要的提醒。保持警覺，注意訊號。", reversed: "過度焦慮恐懼，被驚嚇所困。深呼吸，回到當下。" }, message: "每一次驚醒，都是宇宙的善意提醒。" },
  // === 九星系列 (9張) ===
  { id: 31, name: "天蓬星", category: "九星", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["智謀", "深沉", "策略"], meaning: { upright: "深謀遠慮，以智慧制定策略。如同深水之下暗流湧動，靜待時機。", reversed: "陰謀詭計，不正當手段。智慧應用於正道，方能長久。" }, message: "最深的智慧，藏在最平靜的水面之下。" },
  { id: 32, name: "天芮星", category: "九星", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["療癒", "關懷", "修復"], meaning: { upright: "療癒的能量正在流動，適合照顧自己和他人。傷口正在癒合。", reversed: "過度擔憂健康，疑病生病。信任身體的自癒力量。" }, message: "療癒正在發生，即使你還感覺不到。" },
  { id: 33, name: "天沖星", category: "九星", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["衝勁", "突破", "勇猛"], meaning: { upright: "充滿衝勁與勇氣，適合大膽行動。如同閃電劈開黑暗。", reversed: "魯莽衝動，缺乏思考。勇氣需要智慧的引導。" }, message: "勇敢的心，能劈開任何阻礙。" },
  { id: 34, name: "天輔星", category: "九星", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["學習", "文化", "指引"], meaning: { upright: "知識與智慧的光芒照耀，適合學習、教導與接受指引。", reversed: "固守舊知，拒絕新學。真正的智者永遠保持學習的心。" }, message: "每一次學習，都是靈魂的進化。" },
  { id: 35, name: "天禽星", category: "九星", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["中心", "平衡", "統合"], meaning: { upright: "回到中心，統合所有力量。你就是自己宇宙的中心。", reversed: "失去中心，四分五裂。需要重新找到內在的平衡點。" }, message: "回到中心，一切自然歸位。" },
  { id: 36, name: "天心星", category: "九星", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["領導", "決斷", "革新"], meaning: { upright: "以心為導，做出正確的決斷。適合領導、革新與重大決策。", reversed: "優柔寡斷，缺乏主見。相信自己的判斷，勇敢決定。" }, message: "心之所向，即是正確的方向。" },
  { id: 37, name: "天柱星", category: "九星", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["堅定", "獨立", "破舊"], meaning: { upright: "如擎天之柱般堅定不移。適合打破舊有框架，建立新秩序。", reversed: "過度固執，不聽他人意見。堅定不等於頑固。" }, message: "成為自己生命中的支柱。" },
  { id: 38, name: "天任星", category: "九星", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["承擔", "穩重", "厚道"], meaning: { upright: "以厚德承載萬物，穩重前行。承擔責任的同時，也在成長。", reversed: "負擔過重，不懂求助。學會分擔，也是一種智慧。" }, message: "每一份承擔，都在壯大你的靈魂。" },
  { id: 39, name: "天英星", category: "九星", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["才華", "光彩", "表現"], meaning: { upright: "才華橫溢，光彩照人。是展現天賦、綻放光芒的時刻。", reversed: "才華被埋沒，缺乏舞台。主動創造機會，讓世界看見你。" }, message: "你的才華，是宇宙賜予的禮物。" },
  // === 五行元素系列 (6張) ===
  { id: 40, name: "金之精", category: "五行", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["收斂", "決斷", "純淨"], meaning: { upright: "收斂能量，去蕪存菁。如同秋天的收穫，留下最珍貴的。", reversed: "過度削減，失去豐富性。收斂不等於匱乏。" }, message: "去除多餘，留下的都是精華。" },
  { id: 41, name: "木之精", category: "五行", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["生長", "仁愛", "向上"], meaning: { upright: "如春天般生機盎然，向上生長的力量充沛。適合開展新計劃。", reversed: "生長方向偏離，需要修正。回到初心，找到正確的方向。" }, message: "向著光的方向生長，永遠不會錯。" },
  { id: 42, name: "水之精", category: "五行", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["流動", "智慧", "適應"], meaning: { upright: "如水般靈活流動，適應任何環境。智慧在流動中自然顯現。", reversed: "情緒氾濫，失去方向。需要找到河道，讓水有方向地流動。" }, message: "水的智慧：不爭，卻能到達任何地方。" },
  { id: 43, name: "火之精", category: "五行", image: SAMPLE_IMAGES[0], backImage: DECK_BACK_IMAGE, keywords: ["熱情", "轉化", "光明"], meaning: { upright: "如火焰般熱情燃燒，轉化一切阻礙。是行動與創造的時刻。", reversed: "怒火中燒，失去控制。火需要適當的容器才能發揮作用。" }, message: "讓熱情成為你的燃料，而非你的牢籠。" },
  { id: 44, name: "土之精", category: "五行", image: SAMPLE_IMAGES[1], backImage: DECK_BACK_IMAGE, keywords: ["承載", "轉化", "中和"], meaning: { upright: "如大地般包容一切，在中心位置調和萬物。穩定是你最大的力量。", reversed: "過度沉重，動彈不得。大地也需要地震來釋放壓力。" }, message: "你就是自己世界的大地，穩固而慈悲。" },
  { id: 45, name: "太極歸元", category: "特別卡", image: SAMPLE_IMAGES[2], backImage: DECK_BACK_IMAGE, keywords: ["圓滿", "歸一", "無極"], meaning: { upright: "萬法歸一，一切回到源頭。你已經完整，無需外求。", reversed: "尚未完成的功課，需要繼續修行。圓滿是一個過程，不是終點。" }, message: "你本自具足，一切圓滿。" },
];
