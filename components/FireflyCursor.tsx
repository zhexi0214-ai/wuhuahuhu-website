"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function FireflyCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // 萤火虫的坐标轴
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 设置弹簧动画，让跟随效果更丝滑，不僵硬
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 核心光点：象征“火花的初现” */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#f97316]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* 外围扩散的光晕：增加“磨砂玻璃”质感 */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-orange-500/30 rounded-full pointer-events-none z-[9999]"
        style={{ 
          x, y, 
          translateX: "-50%", 
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}