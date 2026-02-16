"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bike, ShieldCheck, Mail, MessageSquare, ArrowRight } from "lucide-react";

/**
 * Wuhuahuhu 官方品牌站 - 终极修复版
 * 解决了样式不加载、布局堆叠、动画失效的所有问题
 */
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#0a0a0a] min-h-screen" />;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-orange-500 selection:text-black overflow-x-hidden antialiased">
      
      {/* 顶部状态栏：体现外贸专业度 */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-black/80 border border-zinc-800 rounded-full backdrop-blur-xl flex gap-4 text-[10px] font-mono text-zinc-500 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span>STATUS: GLOBAL TRADING ACTIVE</span>
        </div>
        <div className="w-px h-3 bg-zinc-800 self-center"></div>
        <span>BEIJING: {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Shanghai' })}</span>
      </nav>

      {/* Hero Section: 品牌门面 */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white">
            Wuhuahuhu
          </h1>
          <p className="mt-4 text-orange-500 tracking-[0.5em] uppercase text-xs md:text-sm font-bold">
            The Eye of Sourcing, The Soul of Trade.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-lg p-6 border border-zinc-800 bg-white/5 rounded-2xl backdrop-blur-sm shadow-2xl"
        >
          <p className="italic text-zinc-400 text-sm leading-relaxed">
            "No nos conformamos con el 996. We seek freedom and perfection in every detail."
          </p>
        </motion.div>
      </section>

      {/* 核心意志：254km 骑行进度条 */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24">
        <div className="relative p-10 bg-zinc-900/50 border border-zinc-800 rounded-[3rem] overflow-hidden group">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Bike className="text-orange-500" /> The 254km Resilience
              </h3>
              <p className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">SNPU ➔ WEIYANG ➔ HUAYIN</p>
            </div>
            <div className="text-right">
              <span className="text-5xl font-mono text-orange-500 font-black">100%</span>
            </div>
          </div>

          {/* 进度条：修复了之前不动的 Bug */}
          <div className="relative h-2 bg-black rounded-full mb-6">
             <motion.div 
               className="h-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 3, ease: "easeOut" }}
             />
          </div>

          <div className="flex justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            <span>Midnight Rain</span>
            <span>Dawn Victory</span>
          </div>
        </div>
      </section>

      {/* 服务宗旨：我就是你的眼 */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-full text-[10px] font-bold uppercase">
            Professional Sourcing
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight italic">"I am your eyes."</h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Born in SNPU, specialized in Aviation Logistics. I treat every shipment with the precision of hazardous materials handling standards. From QC to delivery, perfection is our only baseline.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-orange-500 text-black font-bold text-xs rounded-full hover:bg-orange-400 transition-colors flex items-center gap-2">
              Contact Me <ArrowRight size={14} />
            </button>
          </div>
        </div>
        
        <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
          <span className="text-zinc-800 text-xs font-mono uppercase tracking-[1em] rotate-90">Visual Asset</span>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm">
             <p className="text-orange-500 font-black text-2xl border-2 border-orange-500 p-4 -rotate-12">QC PASSED</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <div className="flex justify-center gap-8 mb-8 text-zinc-500">
          <Mail className="hover:text-orange-500 cursor-pointer transition-colors" />
          <MessageSquare className="hover:text-orange-500 cursor-pointer transition-colors" />
        </div>
        <p className="text-[10px] text-zinc-700 tracking-[0.3em] uppercase">
          © 2026 Wuhuahuhu Global Trade | Designed by Resilience
        </p>
      </footer>
    </main>
  );
}