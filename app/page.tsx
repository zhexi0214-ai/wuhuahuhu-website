"use client";

import { motion } from "framer-motion";
import { Bike, ShieldCheck, Mail, MessageSquare, ArrowRight } from "lucide-react";
import FireflyCursor from "@/components/FireflyCursor";

/**
 * Wuhuahuhu 官方品牌站 - 首页
 * 设计核心：哑光黑背景 + 橙色火花交互 + 254km 骑行意志展示
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200 selection:bg-orange-500 selection:text-black overflow-x-hidden">
      {/* 萤火虫光标组件 - 象征“火花的初现” */}
      <FireflyCursor />

      {/* 顶部灵动岛：时间与状态 */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-black/60 border border-zinc-800 rounded-full backdrop-blur-md flex gap-4 text-[10px] font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span>STATUS: PEACE & TRADE</span>
        </div>
        <div className="w-px h-3 bg-zinc-800 self-center"></div>
        <span>BEIJING: {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Shanghai' })}</span>
      </nav>

      {/* Hero Section: 品牌首屏 */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-transparent">
            Wuhuahuhu
          </h1>
          <p className="mt-6 text-zinc-500 tracking-[0.4em] uppercase text-xs md:text-sm">
            The Eye of Sourcing, The Soul of Trade.
          </p>
        </motion.div>

        {/* 温暖伙伴宣言 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-xl p-8 glass-panel rounded-2xl italic text-zinc-500 text-sm leading-relaxed"
        >
          "No nos conformamos con el 996. We seek freedom and perfection in every detail."
        </motion.div>
        
        <div className="absolute bottom-10 animate-bounce text-zinc-700">
          <p className="text-[10px] tracking-widest uppercase mb-2">Scroll to explore</p>
        </div>
      </section>

      {/* 精神图腾：254km 雨夜骑行意志 */}
      <section className="w-full max-w-5xl mx-auto px-6 py-32">
        <div className="relative p-8 md:p-12 glass-panel rounded-[2.5rem] overflow-hidden group">
          <div className="flex justify-between items-end mb-16 relative z-10">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Bike className="text-orange-500" /> The 254km Resilience
              </h3>
              <p className="text-zinc-500 text-xs font-mono">SNPU CAMPUS ➔ WEIYANG AVE ➔ HUAYIN CITY</p>
            </div>
            <div className="text-right">
              <span className="text-5xl font-mono text-orange-500 font-black">100%</span>
              <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-tighter">Willpower Delivered</p>
            </div>
          </div>

          {/* 进度条动画 */}
          <div className="relative h-1.5 bg-zinc-900 rounded-full mb-6 overflow-hidden">
             <motion.div 
               className="h-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 4, ease: "circOut" }}
             />
          </div>

          <div className="flex justify-between text-[10px] text-zinc-700 uppercase tracking-widest font-bold">
            <span>The Rain at Midnight</span>
            <span>The Dawn of Victory</span>
          </div>

          {/* 悬停彩蛋：意志宣言 */}
          <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center p-12 text-center">
             <p className="text-xl md:text-2xl italic font-serif text-orange-400 leading-relaxed">
               "Do what you want to do. <br/>Every road has its own scenery."
             </p>
          </div>
        </div>
      </section>

      {/* 服务核心：我就是你的眼 */}
      <section className="w-full max-w-5xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 text-orange-500 rounded-full text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={14}/> Professional Sourcing
          </div>
          <h2 className="text-5xl font-bold text-white tracking-tight">"I am your eyes."</h2>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            Born in SNPU, specialized in Aviation Logistics.
            I treat every shipment with the precision of hazardous materials handling standards. 
            From QC inspection to final delivery, perfection is our only baseline.
          </p>
          <button className="group flex items-center gap-3 text-orange-500 text-sm font-bold border-b border-orange-500/20 pb-1 hover:border-orange-500 transition-all">
            Get in touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3D 模拟区域占位 */}
        <div className="aspect-[4/3] bg-zinc-900/30 border border-zinc-800 rounded-[2rem] flex items-center justify-center group relative overflow-hidden">
          <div className="text-zinc-800 text-[10px] tracking-[0.5em] uppercase font-black rotate-90">3D Mockup Space</div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-sm">
             <div className="px-8 py-4 border-4 border-orange-500 text-orange-500 font-black -rotate-12 text-2xl tracking-tighter">
               QC PASSED <br/> <span className="text-sm">BY WUHUAHUHU</span>
             </div>
          </div>
        </div>
      </section>

      {/* Footer: 品牌沉淀 */}
      <footer className="w-full py-24 border-t border-zinc-900 mt-20 text-center px-6">
        <div className="flex justify-center gap-10 mb-12 text-zinc-600">
          <Mail className="hover:text-orange-500 cursor-pointer transition-colors" size={22}/>
          <MessageSquare className="hover:text-orange-500 cursor-pointer transition-colors" size={22}/>
        </div>
        <p className="text-[10px] text-zinc-700 tracking-[0.3em] uppercase mb-4">
          © 2026 Wuhuahuhu Global Trade | Designed for the Resilient
        </p>
        <div className="text-[9px] text-zinc-800 italic">
          Creative Soul: Yomai & Zhexi
        </div>
      </footer>
    </main>
  );
}