"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bike, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 antialiased">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <h1 className="text-7xl font-black tracking-tighter">Wuhuahuhu</h1>
        <p className="text-orange-500 tracking-[0.5em] uppercase text-sm font-bold">The Eye of Sourcing</p>
        
        <div className="max-w-md p-8 border border-zinc-800 bg-zinc-900/50 rounded-3xl">
           <div className="flex justify-between items-center mb-4">
              <span className="flex items-center gap-2 font-bold"><Bike className="text-orange-500" size={18}/> 254km Resilience</span>
              <span className="text-orange-500 font-mono">100%</span>
           </div>
           <div className="w-full h-1 bg-black rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-orange-500"
              />
           </div>
        </div>

        <button className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 transition-colors inline-flex items-center gap-2">
          GET IN TOUCH <ArrowRight size={16} />
        </button>
      </motion.div>
    </main>
  );
}