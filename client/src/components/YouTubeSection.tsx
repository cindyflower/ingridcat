/**
 * YouTube Section - IngridCat Brand
 * Design: Cosmic Mysticism dark theme
 * Colors: Deep space black + Gold accent + Teal healing
 * Fonts: Space Mono (headings) + Cormorant Garamond (body) + Noto Sans TC (Chinese)
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CHANNEL_URL = "https://www.youtube.com/@ingridflower8742";

interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
  date: string;
  series: string;
}

const videos: Video[] = [
  {
    id: "b6RfH5vNRKM",
    title: "英格貓的卡牌世界-五行系（下）五行合圖與納迦蛇神：序章與封存",
    duration: "11:50",
    views: "1",
    date: "1 天前",
    series: "卡牌世界",
  },
  {
    id: "c202xmewv1o",
    title: "英格貓的卡牌世界-五行系（中）土、金、水：承載、取捨、沉靜",
    duration: "16:23",
    views: "4",
    date: "1 個月前",
    series: "卡牌世界",
  },
  {
    id: "Ppn7macCuLA",
    title: "英格貓的卡牌世界-五行系（上）木與火：萌發與點燃",
    duration: "12:27",
    views: "10",
    date: "2 個月前",
    series: "卡牌世界",
  },
  {
    id: "f-QFU9L6Ghs",
    title: "英格貓的卡牌世界：世界入口",
    duration: "10:58",
    views: "64",
    date: "3 個月前",
    series: "卡牌世界",
  },
  {
    id: "n-dgx1HEriY",
    title: "如果人生可以重來《如何放下過去、活出未來》結語",
    duration: "10:47",
    views: "18",
    date: "1 年前",
    series: "人生故事",
  },
  {
    id: "uXSOfEYAzvw",
    title: "如果人生可以重來《如何放下過去、活出未來》端午尋親之旅NO.3",
    duration: "9:51",
    views: "8",
    date: "1 年前",
    series: "人生故事",
  },
  {
    id: "_zliI98tfkw",
    title: "如果人生可以重來《如何放下過去、活出未來》端午尋親之旅NO.2",
    duration: "10:07",
    views: "4",
    date: "1 年前",
    series: "人生故事",
  },
  {
    id: "cid5dkjKzvY",
    title: "如果人生可以重來《如何放下過去、活出未來》端午尋親之旅NO.1",
    duration: "11:54",
    views: "5",
    date: "1 年前",
    series: "人生故事",
  },
];

export default function YouTubeSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedVideos = showAll ? videos : videos.slice(0, 4);

  return (
    <section id="videos" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.02_270)] via-[oklch(0.07_0.02_272)] to-[oklch(0.06_0.02_270)]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.25_0.03_275)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.25_0.03_275)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span
              className="text-xs tracking-[0.5em] uppercase block mb-4"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.72 0.12 185)" }}
            >
              Videos
            </span>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] uppercase"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                color: "oklch(0.92 0.01 80)",
              }}
            >
              影片頻道
            </h2>
            <p
              className="mt-4 text-base md:text-lg max-w-xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "oklch(0.6 0.01 80)",
                fontSize: "1.15rem",
                lineHeight: 1.8,
              }}
            >
              透過影片，與你分享卡牌世界的奧秘與生命故事的啟發
            </p>
          </div>
          {/* Subscribe CTA */}
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-[oklch(0.75_0.12_85/0.4)] rounded-full hover:border-[oklch(0.75_0.12_85)] hover:bg-[oklch(0.75_0.12_85/0.05)] transition-all duration-500"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              style={{ color: "oklch(0.75 0.12 85)" }}
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                fill="currentColor"
              />
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="oklch(0.06 0.02 270)" />
            </svg>
            <span
              className="text-xs tracking-[0.2em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.7 0.01 80)" }}
            >
              訂閱頻道
            </span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="oklch(0.75 0.12 85)"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Featured Video Player */}
        <AnimatePresence mode="wait">
          {activeVideo && (
            <motion.div
              key={activeVideo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[oklch(0.2_0.03_275)]">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="mt-4 flex items-center gap-2 group"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="oklch(0.5 0.02 270)"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span
                  className="text-xs tracking-[0.2em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors"
                  style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.5 0.02 270)" }}
                >
                  關閉播放器
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              isPlaying={activeVideo === video.id}
              onPlay={() => setActiveVideo(video.id)}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {!showAll && videos.length > 4 && (
            <button
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-3"
            >
              <span
                className="text-sm tracking-[0.2em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors"
                style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.55 0.02 270)" }}
              >
                顯示更多
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="oklch(0.55 0.02 270)"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <span
              className="text-sm tracking-[0.2em] uppercase group-hover:text-[oklch(0.75_0.12_85)] transition-colors"
              style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.55 0.02 270)" }}
            >
              前往 YouTube 頻道觀看全部影片
            </span>
            <span className="w-8 h-[1px] bg-[oklch(0.75_0.12_85/0.4)] group-hover:w-14 transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  index,
  isPlaying,
  onPlay,
}: {
  video: Video;
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative cursor-pointer rounded-sm overflow-hidden border transition-all duration-500 ${
        isPlaying
          ? "border-[oklch(0.75_0.12_85/0.6)] bg-[oklch(0.1_0.03_275)]"
          : "border-[oklch(0.2_0.03_275)] bg-[oklch(0.08_0.02_270/0.6)] hover:border-[oklch(0.35_0.04_275)] hover:bg-[oklch(0.1_0.025_275/0.8)]"
      }`}
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.02_270/0.8)] via-[oklch(0.06_0.02_270/0.2)] to-transparent" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "oklch(0.75 0.12 85 / 0.9)",
              boxShadow: "0 0 30px oklch(0.75 0.12 85 / 0.3)",
            }}
          >
            <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="oklch(0.06 0.02 270)">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </div>
        {/* Duration badge */}
        <div
          className="absolute bottom-3 right-3 px-2 py-1 rounded-sm text-xs"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "oklch(0.06 0.02 270 / 0.85)",
            color: "oklch(0.85 0.01 80)",
          }}
        >
          {video.duration}
        </div>
        {/* Series badge */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-sm text-xs"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "oklch(0.75 0.12 85 / 0.15)",
            color: "oklch(0.75 0.12 85)",
            border: "1px solid oklch(0.75 0.12 85 / 0.3)",
          }}
        >
          {video.series}
        </div>
      </div>
      {/* Info */}
      <div className="p-5">
        <h3
          className="text-sm md:text-base leading-relaxed mb-3 line-clamp-2 group-hover:text-[oklch(0.92_0.01_80)] transition-colors"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            color: "oklch(0.8 0.01 80)",
            fontWeight: 500,
          }}
        >
          {video.title}
        </h3>
        <div className="flex items-center gap-4">
          <span
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.45 0.02 270)" }}
          >
            {video.views} 次觀看
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.35 0.02 270)" }}
          >
            •
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.45 0.02 270)" }}
          >
            {video.date}
          </span>
        </div>
        {/* Watch on YouTube link */}
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-[oklch(0.75_0.12_85)]"
          style={{ fontFamily: "'Space Mono', monospace", color: "oklch(0.55 0.02 270)" }}
        >
          在 YouTube 觀看
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
