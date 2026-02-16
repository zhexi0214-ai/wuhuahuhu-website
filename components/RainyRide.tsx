"use client";
import { motion } from "framer-motion";
import { CloudRain, Bike } from "lucide-react";

export default function RainyRide() {
  return (
    <div className="w-full max-w-4xl mx-auto my-32 p-8 relative overflow-hidden glass-panel rounded-2xl group">
      {/* 标题 */}
      <div className="flex justify-between items-end mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-zinc-200">The 254km Resilience</h3>
          <p className="text-zinc-500 text-sm mt-1">SNPU Campus ➔ Weiyang Ave ➔ Huayin City</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono text-orange-500">100%</div>
          <div className="text-xs text-zinc-600">WILLPOWER</div>
        </div>
      </div>

      {/* 动画轨道 */}
      <div className="relative h-2 bg-zinc-800 rounded-full mb-4 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-orange-500/80"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </div>

      {/* 骑行者图标动画 */}
      <motion.div
        className="absolute bottom-12 left-8 text-zinc-400"
        initial={{ x: 0 }}
        whileInView={{ x: "85%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <Bike size={24} />
      </motion.div>

      {/* 雨滴特效 (CSS 模拟) */}
      <div className="absolute inset-0 bg-[url('/rain-pattern.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      {/* 悬停独白 */}
      <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <p className="text-xl font-serif italic text-orange-500 text-center px-4">
          "Do what you want to do.<br/>Every road has its own scenery."
        </p>
      </div>
    </div>
  );
}