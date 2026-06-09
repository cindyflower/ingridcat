/**
 * Card Draw Logic — Fisher-Yates shuffle + draw without replacement
 * Copy to: client/src/lib/card-draw-logic.ts
 */

export interface CardData {
  id: number;
  name: string;
  nameEn?: string;
  category: string;
  image: string;
  backImage: string;
  keywords: string[];
  meaning: {
    upright: string;
    reversed?: string;
  };
  message: string;
  element?: string;
  planet?: string;
}

export interface DrawnCard {
  card: CardData;
  isReversed: boolean;
  position?: string; // e.g. "past", "present", "future"
}

export type SpreadType = "single" | "three-card" | "yes-no";

export interface SpreadConfig {
  type: SpreadType;
  name: string;
  description: string;
  count: number;
  positions: string[];
}

export const SPREADS: Record<SpreadType, SpreadConfig> = {
  single: {
    type: "single",
    name: "每日一牌",
    description: "抽取一張牌，接收今日宇宙訊息",
    count: 1,
    positions: ["今日訊息"],
  },
  "three-card": {
    type: "three-card",
    name: "時間之流",
    description: "過去、現在、未來三張牌的時間軸解讀",
    count: 3,
    positions: ["過去", "現在", "未來"],
  },
  "yes-no": {
    type: "yes-no",
    name: "是/否占卜",
    description: "正位代表「是」，逆位代表「否」",
    count: 1,
    positions: ["答案"],
  },
};

/** Fisher-Yates shuffle — O(n), unbiased */
export function shuffleDeck<T>(deck: T[]): T[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/** Draw cards with optional reversal */
export function drawCards(
  deck: CardData[],
  spread: SpreadConfig,
  allowReversed: boolean = true
): DrawnCard[] {
  const shuffled = shuffleDeck(deck);
  return shuffled.slice(0, spread.count).map((card, i) => ({
    card,
    isReversed: allowReversed ? Math.random() > 0.5 : false,
    position: spread.positions[i],
  }));
}
