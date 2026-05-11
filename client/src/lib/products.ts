/**
 * IngridCat Product Data
 * Shared product information for homepage sections and detail pages
 */

export interface Product {
  id: number;
  slug: string;
  name: string;
  nameEn: string;
  tag: string;
  tagEn: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  heroImage: string;
  detailImage: string;
  productImage: string;
  features: string[];
  details: {
    title: string;
    content: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  relatedIds: number[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "spiritual-picture-book",
    name: "心靈繪本",
    nameEn: "Spiritual Picture Book",
    tag: "療癒閱讀",
    tagEn: "Healing Reading",
    price: 680,
    originalPrice: 880,
    shortDescription:
      "以溫暖的插畫與文字，陪伴你走過內心的風景。每一頁都是一次與自己的對話，在故事中找到共鳴與力量。",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_book_scene-b3dhVtAa9h6Fgb5ZnG6SnX.webp",
    detailImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_book_scene-mihx7GiXUnmdm5gXbWNZrE.png",
    productImage: "/manus-storage/product_book_spiritual_39615334.png",
    features: [
      "手繪水彩風格插畫，每一幅都蘊含療癒能量",
      "結合心理學與靈性智慧的故事敘事",
      "適合獨處時的自我對話與反思",
      "精裝硬殼設計，值得珍藏的藝術品",
    ],
    details: [
      {
        title: "關於這本繪本",
        content:
          "《心靈繪本》是 IngridCat 品牌的第一件作品，誕生於創辦人最深沉的自我療癒旅程。每一頁的插畫都以手繪水彩風格呈現，描繪著一個個關於迷失、尋找與重生的故事。這不只是一本書，而是一面溫柔的鏡子，映照出你內心深處那些未曾說出口的感受。",
      },
      {
        title: "如何使用",
        content:
          "你可以在任何需要靜下心來的時刻翻開它。不需要從頭讀到尾，隨意翻到任何一頁，那就是此刻宇宙想對你說的話。搭配一杯溫暖的茶，在柔和的燈光下，讓文字與畫面帶領你進入內在的寧靜空間。",
      },
      {
        title: "適合的人",
        content:
          "正在經歷人生轉折的你、想要更了解自己的你、需要一個溫暖陪伴的你。無論你是剛開始接觸心靈成長，還是已經在這條路上走了很久，這本繪本都能為你帶來新的啟發。",
      },
    ],
    specs: [
      { label: "規格", value: "精裝硬殼 / 全彩印刷" },
      { label: "頁數", value: "128 頁" },
      { label: "尺寸", value: "21 × 21 cm" },
      { label: "語言", value: "繁體中文" },
      { label: "ISBN", value: "978-XXX-XXX-XXX-X" },
    ],
    relatedIds: [2, 3],
  },
  {
    id: 2,
    slug: "personal-autobiography",
    name: "個人自傳書",
    nameEn: "Personal Autobiography",
    tag: "書寫療癒",
    tagEn: "Writing Therapy",
    price: 980,
    originalPrice: 1280,
    shortDescription:
      "一本屬於你的生命之書。透過引導式書寫，記錄你的故事、情緒與成長，將人生的每個篇章化為珍貴的文字。",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_autobiography_scene-LnKXrnZguUpFS59suwKi5r.webp",
    detailImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_autobiography_scene-YAvqCTMxoKHogwhyj3se2v.png",
    productImage: "/manus-storage/product_autobiography_26ab117f.png",
    features: [
      "52 週引導式書寫練習，循序漸進探索自我",
      "結合正念冥想與反思日記的獨特方法",
      "精選書寫提示，幫助你突破思維盲點",
      "優質紙張與裝幀，書寫體驗舒適流暢",
    ],
    details: [
      {
        title: "關於這本自傳書",
        content:
          "《個人自傳書》不是一本空白筆記本，而是一套精心設計的生命書寫系統。透過 52 週的引導式練習，你將從回顧過去開始，逐步理解現在的自己，最終描繪出未來的藍圖。每一個書寫提示都經過心理學與敘事療法的驗證，確保你在安全的空間中進行深度自我探索。",
      },
      {
        title: "書寫的力量",
        content:
          "研究顯示，定期的反思性書寫能有效降低壓力、提升自我覺察，並促進情緒調節。當你將內心的想法化為文字，那些模糊的感受會變得清晰，那些糾結的情緒會找到出口。這本書就是你最忠實的傾聽者。",
      },
      {
        title: "如何開始",
        content:
          "每週只需要 20-30 分鐘的書寫時間。找一個安靜的角落，泡一杯你喜歡的飲品，翻開當週的引導頁面，讓文字自然流淌。不需要追求完美的文筆，真誠就是最好的表達。",
      },
    ],
    specs: [
      { label: "規格", value: "精裝線裝 / 可平攤書寫" },
      { label: "頁數", value: "256 頁" },
      { label: "尺寸", value: "A5 (14.8 × 21 cm)" },
      { label: "紙張", value: "100gsm 無酸書寫紙" },
      { label: "語言", value: "繁體中文" },
    ],
    relatedIds: [1, 3],
  },
  {
    id: 3,
    slug: "cosmic-oracle-cards",
    name: "宇宙環星神諭卡",
    nameEn: "Cosmic Oracle Cards",
    tag: "占卜工具",
    tagEn: "Divination Tool",
    price: 1680,
    originalPrice: 2080,
    shortDescription:
      "80 張原創神諭卡牌，結合東西方的神諭智慧，代表宇宙要傳達的知識。宇宙環星下的靈魂低語，引導你聆聽內在的聲音。",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_oracle_spread-W5eg4uqMiPwBzgWXpXoeUQ.webp",
    detailImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_oracle_spread-QFZa2KDrXHtwZimTAQE7SB.png",
    productImage: "/manus-storage/product_oracle_cards_417dfb1d.png",
    features: [
      "80 張全原創手繪卡牌，融合東西方神秘學符號",
      "附贈完整牌義解說書與多種牌陣教學",
      "結合占星學、塔羅與東方易經的獨特系統",
      "燙金邊框設計，質感與美感兼具",
    ],
    details: [
      {
        title: "關於宇宙環星神諭卡",
        content:
          "這套 80 張的原創神諭卡牌，是 IngridCat 歷時兩年精心創作的核心作品。每一張卡牌都代表宇宙想要傳達的一則訊息，結合了西方塔羅的象徵系統、占星學的行星能量，以及東方易經的陰陽哲學。卡牌的圖像以宇宙星辰為主題，描繪了星座、行星、星雲與神聖幾何圖形，每一張都是一件獨立的藝術品。",
      },
      {
        title: "卡牌結構",
        content:
          "80 張卡牌分為五大系列：星辰之門（16張）代表宇宙的基本法則；月相之輪（16張）對應情緒與潛意識的流動；行星使者（16張）連結不同的生命課題；星座守護（16張）映照個人特質與天賦；以及宇宙密碼（16張）揭示更高維度的靈性訊息。",
      },
      {
        title: "使用方式",
        content:
          "你可以在日常中抽取單張卡牌作為每日指引，也可以使用附贈的牌陣進行深度解讀。無論你是占卜新手還是經驗豐富的讀牌者，這套卡牌都能與你建立獨特的連結。建議在使用前先靜心冥想，讓直覺引導你與卡牌對話。",
      },
    ],
    specs: [
      { label: "卡牌數量", value: "80 張" },
      { label: "卡牌尺寸", value: "7 × 12 cm" },
      { label: "材質", value: "350gsm 銅版紙 / 燙金邊框" },
      { label: "附贈", value: "解說書 + 絨布收納袋" },
      { label: "包裝", value: "磁吸翻蓋禮盒" },
    ],
    relatedIds: [4, 1],
  },
  {
    id: 4,
    slug: "qi-men-dun-jia-cards",
    name: "奇門遁甲五氣秘笈",
    nameEn: "Qi Men Dun Jia Cards",
    tag: "占卜工具",
    tagEn: "Divination Tool",
    price: 1880,
    originalPrice: 2380,
    shortDescription:
      "結合東方古代天文、地理和陰陽五行與易經的底層邏輯，具有時間軸的元素。以古老智慧解讀當下，指引未來方向。",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_qimen_spread-97KWN4Zj6XNkKoYUwaffR4.webp",
    detailImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663149097567/f4dg2EnJEReuh6Q48oQ8j3/detail_qimen_spread-Q34MfqRXAE4xmkVbg3B5Ft.png",
    productImage: "/manus-storage/product_qimen_cards_f10ee64f.png",
    features: [
      "融合奇門遁甲、天文地理與陰陽五行的獨創系統",
      "具有時間軸元素，可進行時空維度的解讀",
      "結合易經六十四卦的底層邏輯",
      "附贈詳細教學手冊與進階牌陣指南",
    ],
    details: [
      {
        title: "關於奇門遁甲五氣秘笈",
        content:
          "《奇門遁甲五氣秘笈》是 IngridCat 最具深度的占卜工具，將中國古代最神秘的預測術「奇門遁甲」轉化為現代人可以理解與使用的卡牌系統。這套卡牌不僅融合了天干地支、陰陽五行的基本元素，更獨創性地加入了時間軸的概念，讓使用者能夠在時空的維度中尋找答案。",
      },
      {
        title: "五氣系統",
        content:
          "卡牌以「木、火、土、金、水」五行之氣為核心架構，每一行氣對應不同的生命領域與能量狀態。木氣代表成長與創造；火氣象徵熱情與轉化；土氣承載穩定與滋養；金氣主導決斷與收穫；水氣流動著智慧與適應。透過五氣的交互作用，揭示事物運行的深層規律。",
      },
      {
        title: "時間軸解讀",
        content:
          "與一般占卜卡牌不同，這套卡牌獨特的時間軸設計讓你能夠解讀過去、現在與未來的能量流動。每張卡牌都標記了對應的天干地支與節氣，使用者可以根據提問的時間點，結合卡牌的時間元素，獲得更精準的指引。這是古老智慧與現代設計的完美結合。",
      },
    ],
    specs: [
      { label: "卡牌數量", value: "64 張 + 輔助卡 8 張" },
      { label: "卡牌尺寸", value: "7 × 12 cm" },
      { label: "材質", value: "400gsm 特種紙 / 燙金工藝" },
      { label: "附贈", value: "教學手冊 + 五行對照表 + 收納盒" },
      { label: "包裝", value: "古典木紋禮盒" },
    ],
    relatedIds: [3, 2],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}
