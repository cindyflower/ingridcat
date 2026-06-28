/**
 * CardDrawPage — 線上抽牌體驗
 * 支援宇宙環星神諭卡 (80張) 和奇門遁甲五氣秘笈 (45張) 兩組卡牌
 * Design: Cosmic Mysticism — deep space, gold accents, ritual feel
 */
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import CardItem from "@/components/card-draw/CardItem";
import StarField from "@/components/StarField";
import {
  drawCards,
  SPREADS,
  type SpreadType,
  type DrawnCard,
} from "@/lib/card-draw-logic";
import {
  CARDS as ORACLE_CARDS,
  DECK_NAME as ORACLE_NAME,
  DECK_BACK_IMAGE as ORACLE_BACK,
} from "@/lib/oracle-cards-data";
import {
  CARDS as QIMEN_CARDS,
  DECK_NAME as QIMEN_NAME,
  DECK_BACK_IMAGE as QIMEN_BACK,
} from "@/lib/qimen-cards-data";

type Phase = "select-deck" | "select-spread" | "drawing" | "reveal" | "reading";
type DeckId = "oracle" | "qimen";

const DECKS = {
  oracle: {
    id: "oracle" as DeckId,
    name: ORACLE_NAME,
    subtitle: "宇宙環星下的靈魂低語",
    description: "結合東西方神諭，代表宇宙要傳達的知識。80張牌，涵蓋五行、星宿、元素與靈性訊息。",
    cards: ORACLE_CARDS,
    backImage: ORACLE_BACK,
    cardCount: 80,
    glowColor: "rgba(212, 175, 55, 0.6)",
    accentClass: "text-amber-400",
    borderClass: "border-amber-500/30",
    bgClass: "from-amber-950/20 to-transparent",
  },
  qimen: {
    id: "qimen" as DeckId,
    name: QIMEN_NAME,
    subtitle: "天文地理・陰陽五行・時間之門",
    description: "結合東方古代天文、地理和陰陽五行＋易經的底層邏輯，具有時間軸的元素。45張牌。",
    cards: QIMEN_CARDS,
    backImage: QIMEN_BACK,
    cardCount: 45,
    glowColor: "rgba(168, 130, 255, 0.6)",
    accentClass: "text-purple-400",
    borderClass: "border-purple-500/30",
    bgClass: "from-purple-950/20 to-transparent",
  },
};

export default function CardDrawPage() {
  const [phase, setPhase] = useState<Phase>("select-deck");
  const [selectedDeck, setSelectedDeck] = useState<DeckId>("oracle");
  const [spreadType, setSpreadType] = useState<SpreadType>("single");
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deck = DECKS[selectedDeck];

  const handleSelectDeck = useCallback((deckId: DeckId) => {
    setSelectedDeck(deckId);
    setPhase("select-spread");
  }, []);

  const handleSelectSpread = useCallback((type: SpreadType) => {
    setSpreadType(type);
    setIsShuffling(true);
    setPhase("drawing");

    setTimeout(() => {
      const spread = SPREADS[type];
      const result = drawCards(DECKS[selectedDeck].cards, spread, true);
      setDrawnCards(result);
      setIsShuffling(false);
    }, 2000);
  }, [selectedDeck]);

  const handleFlipCard = useCallback((index: number) => {
    if (revealedIndices.has(index)) return;
    setRevealedIndices((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });

    const spread = SPREADS[spreadType];
    if (revealedIndices.size + 1 >= spread.count) {
      setTimeout(() => setPhase("reading"), 1000);
    }
  }, [revealedIndices, spreadType]);

  const handleReset = useCallback(() => {
    setPhase("select-deck");
    setDrawnCards([]);
    setRevealedIndices(new Set());
    setIsShuffling(false);
  }, []);

  const handleChangeDeck = useCallback(() => {
    setPhase("select-deck");
    setDrawnCards([]);
    setRevealedIndices(new Set());
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "oklch(0.13 0.02 270)" }}>
      <StarField />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-sm" style={{ background: "rgba(10, 10, 30, 0.7)" }}>
        <Link href="/" className="text-white/70 hover:text-white transition-colors font-mono text-sm tracking-wider flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          INGRIDCAT
        </Link>
        {phase !== "select-deck" && (
          <button
            onClick={handleChangeDeck}
            className="text-white/50 hover:text-white transition-colors font-mono text-xs tracking-wider"
          >
            更換牌組
          </button>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <AnimatePresence mode="wait">
          {/* Phase 1: Select Deck */}
          {phase === "select-deck" && (
            <motion.div
              key="select-deck"
              className="flex flex-col items-center gap-10 w-full max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <h1 className="font-mono text-3xl md:text-5xl tracking-widest text-white uppercase mb-4">
                  CARD READING
                </h1>
                <p className="font-serif text-lg md:text-xl text-white/60 italic">
                  靜心片刻，選擇你的牌組，讓宇宙為你揭示訊息
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {Object.values(DECKS).map((d) => (
                  <motion.button
                    key={d.id}
                    className={`relative p-8 rounded-2xl border ${d.borderClass} bg-gradient-to-b ${d.bgClass} backdrop-blur-sm text-left overflow-hidden group`}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectDeck(d.id)}
                  >
                    {/* Card back preview */}
                    <div className="absolute top-4 right-4 w-16 h-24 rounded-lg overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity shadow-lg">
                      <img src={d.backImage} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="pr-20">
                      <span className={`font-mono text-xs tracking-wider ${d.accentClass} uppercase`}>
                        {d.cardCount} CARDS
                      </span>
                      <h2 className="text-white text-xl md:text-2xl font-bold mt-2 mb-1">
                        {d.name}
                      </h2>
                      <p className={`text-sm ${d.accentClass} mb-3 font-serif italic`}>
                        {d.subtitle}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: `inset 0 0 60px ${d.glowColor.replace("0.6", "0.1")}` }} />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 2: Select Spread */}
          {phase === "select-spread" && (
            <motion.div
              key="select-spread"
              className="flex flex-col items-center gap-8 w-full max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <span className={`font-mono text-xs tracking-wider ${deck.accentClass}`}>
                  {deck.name}
                </span>
                <h2 className="text-white text-2xl md:text-3xl font-bold mt-2 mb-2">
                  選擇牌陣
                </h2>
                <p className="text-white/50 font-serif italic">
                  每種牌陣帶來不同維度的訊息
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {Object.values(SPREADS).map((spread) => (
                  <motion.button
                    key={spread.type}
                    className={`p-6 rounded-xl border ${deck.borderClass} bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-left`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelectSpread(spread.type)}
                  >
                    <div className={`font-mono text-2xl mb-3 ${deck.accentClass}`}>
                      {spread.count === 1 ? "◇" : spread.count === 3 ? "◇◇◇" : "◈"}
                    </div>
                    <span className="block text-white font-semibold text-lg">{spread.name}</span>
                    <span className="block text-white/50 text-sm mt-2 leading-relaxed">
                      {spread.description}
                    </span>
                    <span className={`block text-xs mt-3 ${deck.accentClass} font-mono`}>
                      {spread.count} 張牌
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 3: Drawing / Shuffle */}
          {phase === "drawing" && (
            <motion.div
              key="drawing"
              className="flex flex-col items-center gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {isShuffling ? (
                <div className="flex flex-col items-center gap-6">
                  <motion.p
                    className="text-white/70 font-serif text-lg italic"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    正在洗牌⋯⋯
                  </motion.p>
                  <motion.div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-12 h-[72px] md:w-16 md:h-24 rounded-lg overflow-hidden shadow-xl"
                        animate={{
                          x: [0, (i - 3) * 25, (3 - i) * 15, 0],
                          rotateZ: [0, (i - 3) * 8, (3 - i) * 5, 0],
                          y: [0, -10, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.08,
                          repeat: 1,
                          ease: "easeInOut",
                        }}
                      >
                        <img src={deck.backImage} alt="" className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-8">
                  <motion.p
                    className="text-white/70 font-serif text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    點擊卡牌翻開，接收宇宙訊息
                  </motion.p>
                  <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {drawnCards.map((drawn, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <span className={`text-sm font-mono tracking-wider ${deck.accentClass}`}>
                          {drawn.position}
                        </span>
                        <CardItem
                          frontImage={drawn.card.image}
                          backImage={drawn.card.backImage}
                          isReversed={drawn.isReversed}
                          isFlipped={revealedIndices.has(i)}
                          onFlip={() => handleFlipCard(i)}
                          size="lg"
                          glowColor={deck.glowColor}
                        />
                        {revealedIndices.has(i) && (
                          <motion.span
                            className="text-white text-sm font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {drawn.card.name}
                            {drawn.isReversed && <span className="text-white/50 text-xs ml-1">逆</span>}
                          </motion.span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Phase 4: Reading */}
          {phase === "reading" && (
            <motion.div
              key="reading"
              className="flex flex-col items-center gap-8 w-full max-w-3xl pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-4">
                <span className={`font-mono text-xs tracking-wider ${deck.accentClass}`}>
                  {deck.name} · {SPREADS[spreadType].name}
                </span>
                <h2 className="text-white text-2xl md:text-3xl font-bold mt-2">
                  你的牌面解讀
                </h2>
              </div>

              {/* Cards display */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {drawnCards.map((drawn, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <img
                      src={drawn.card.image}
                      alt={drawn.card.name}
                      className="w-16 h-24 md:w-20 md:h-30 object-cover rounded-lg shadow-lg"
                      style={{ transform: drawn.isReversed ? "rotate(180deg)" : "none" }}
                    />
                    <span className="text-white/60 text-xs">{drawn.position}</span>
                  </motion.div>
                ))}
              </div>

              {/* Reading cards */}
              {drawnCards.map((drawn, i) => (
                <motion.div
                  key={i}
                  className={`w-full p-6 md:p-8 rounded-2xl border ${deck.borderClass} backdrop-blur-sm`}
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 + 0.2 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0">
                      <img
                        src={drawn.card.image}
                        alt={drawn.card.name}
                        className="w-20 h-30 md:w-24 md:h-36 object-cover rounded-xl shadow-lg"
                        style={{ transform: drawn.isReversed ? "rotate(180deg)" : "none" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-mono ${deck.accentClass} tracking-wider`}>
                          {drawn.position}
                        </span>
                        <span className="text-white/30 text-xs">·</span>
                        <span className="text-white/40 text-xs">{drawn.card.category}</span>
                      </div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mt-1">
                        {drawn.card.name}
                        {drawn.isReversed && (
                          <span className="text-white/40 text-sm font-normal ml-2">（逆位）</span>
                        )}
                      </h3>

                      {/* 基本牌義（三行詩句）— 主要解讀文字 */}
                      {drawn.card.basicMeaning && (
                        <div className="mt-4 space-y-1">
                          {drawn.card.basicMeaning.split(/\s{2,}|(?<=[。\uff01\uff1f])/).length > 1
                            ? drawn.card.basicMeaning.split(/\s{2,}/).map((line, idx) => (
                                <p key={idx} className="text-white/90 leading-relaxed text-sm md:text-base font-serif">
                                  {line}
                                </p>
                              ))
                            : <p className="text-white/90 leading-relaxed text-sm md:text-base font-serif">
                                {drawn.card.basicMeaning}
                              </p>
                          }
                        </div>
                      )}

                      {/* 正位/逆位關鍵詞標籤 */}
                      {drawn.card.keywords.length > 0 && (
                        <div className="flex gap-2 mt-4 flex-wrap">
                          <span className="text-xs text-white/40 self-center mr-1">
                            {drawn.isReversed ? "逆位" : "正位"}
                          </span>
                          {(drawn.isReversed
                            ? (drawn.card.meaning.reversed || "").split(" ").filter(Boolean)
                            : drawn.card.keywords
                          ).map((kw) => (
                            <span
                              key={kw}
                              className={`text-xs px-2.5 py-1 rounded-full border ${deck.borderClass} ${deck.accentClass} bg-white/5`}
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* 沒有 basicMeaning 時的 fallback（奇門遁甲牌組） */}
                      {!drawn.card.basicMeaning && (
                        <p className="mt-4 text-white/80 leading-relaxed text-sm md:text-base">
                          {drawn.isReversed
                            ? drawn.card.meaning.reversed
                            : drawn.card.meaning.upright}
                        </p>
                      )}

                      {drawn.card.message && (
                        <blockquote className={`mt-4 pl-4 border-l-2 ${deck.accentClass.replace("text-", "border-")} text-sm italic text-white/50`}>
                          {drawn.card.message}
                        </blockquote>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-8">
                <motion.button
                  className={`px-8 py-3.5 rounded-full font-mono text-sm tracking-wider border ${deck.borderClass} text-white hover:bg-white/10 transition-colors`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setDrawnCards([]);
                    setRevealedIndices(new Set());
                    setPhase("select-spread");
                  }}
                >
                  換個牌陣
                </motion.button>
                <motion.button
                  className="px-8 py-3.5 rounded-full font-mono text-sm tracking-wider text-white"
                  style={{ background: deck.glowColor.replace("0.6", "0.3"), border: `1px solid ${deck.glowColor.replace("0.6", "0.5")}` }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleReset}
                >
                  重新開始
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
