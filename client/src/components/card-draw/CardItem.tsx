/**
 * CardItem — Single card with 3D flip animation
 * Copy to: client/src/components/card-draw/CardItem.tsx
 * Dependencies: framer-motion (already in template)
 */
import { useState } from "react";
import { motion } from "framer-motion";

interface CardItemProps {
  frontImage: string;
  backImage: string;
  isReversed?: boolean;
  isFlipped: boolean;
  onFlip?: () => void;
  size?: "sm" | "md" | "lg";
  glowColor?: string; // e.g. "rgba(212, 175, 55, 0.6)"
}

const sizeMap = {
  sm: { width: 100, height: 160 },
  md: { width: 140, height: 224 },
  lg: { width: 200, height: 320 },
};

export default function CardItem({
  frontImage,
  backImage,
  isReversed = false,
  isFlipped,
  onFlip,
  size = "md",
  glowColor = "rgba(212, 175, 55, 0.6)",
}: CardItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height } = sizeMap[size];

  return (
    <motion.div
      className="relative cursor-pointer"
      style={{
        width,
        height,
        perspective: 1000,
      }}
      onClick={onFlip}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow effect on hover */}
      {isHovered && !isFlipped && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{ boxShadow: `0 0 20px ${glowColor}` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Card container with 3D flip */}
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Back face */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={backImage}
            alt="Card back"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Front face */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={frontImage}
            alt="Card front"
            className="w-full h-full object-cover rounded-lg"
            style={{ transform: isReversed ? "rotate(180deg)" : "none" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
