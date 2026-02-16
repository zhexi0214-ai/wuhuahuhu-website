"use client";

import React, { useState, useEffect } from "react";
import { Bike, ShieldCheck, Zap, Globe, ArrowRight } from "lucide-react";

export default function WuhuahuhuHome() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500">
      {/* 顶部导航状态栏 */}
      <nav className="fixed top-0 w-full border-b border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-md z-50 px-6 py-3 flex justify-between items-center text-[10px] tracking-widest uppercase text-zinc-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> System Active</span>
          <span>Beijing: 06:00</span>
        </div>
        <div className="font-bold text-zinc-300">Wuhuahuhu Global</div>
      </nav>

      {/* Hero 核心意志区 */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter text-white leading-none">
            WU<span className="text-orange-500">HUA</span>HUHU
          </h1>
          <p className="text-orange-500 font-bold tracking-[0.8em] uppercase text-sm md:text-base">
            The Eye of Sourcing · The Soul of Trade
          </p>
        </div>

        {/* 254km 韧性进度条模块 */}
        <div className="mt-20 max-w-2xl group">
          <div className="flex justify-between items-end mb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-bold">
                <Bike className="text-orange-500" size={20} /> 
                <span className="text-xl italic">254km Resilience</span>
              </div>
              <p className="text-zinc-500 text-xs uppercase tracking-tighter">SNPU Campus → Huayin City</p>
            </div>
            <div className="text-4xl font-black text-orange-500 font-mono">{progress}%</div>
          </div>
          <div className="h-4 w-full bg-zinc-900 rounded-full p-1 border border-zinc-800">
            <div 
              className="h-full bg-orange-500 rounded-full transition-all duration-[2000ms] ease-out shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-zinc-400 max-w-md text-sm leading-relaxed italic border-l-2 border-orange-500 pl-4">
            "No nos conformamos con el 996. We seek freedom and perfection in every detail."
          </p>
        </div>
      </section>

      {/* 核心业务网格 */}
      <section className="px-6 max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <ShieldCheck />, title: "Precision QC", desc: "Aviation-standard handling for every shipment." },
          { icon: <Zap />, title: "Direct Sourcing", desc: "Eliminating noise. Direct eye-to-eye trade." },
          { icon: <Globe />, title: "Global Logistics", desc: "From SNPU to the world's most remote nodes." }
        ].map((item, i) => (
          <div key={i} className="p-8 border border-zinc-800 bg-zinc-900/30 rounded-3xl hover:border-orange-500/50 transition-all group">
            <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 底部交互 */}
      <footer className="p-20 flex flex-col items-center">
        <button className="px-12 py-6 bg-white text-black font-black text-xl rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4">
          INITIATE CONTACT <ArrowRight />
        </button>
      </footer>
    </main>
  );
}