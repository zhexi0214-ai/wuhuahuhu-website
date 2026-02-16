"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DynamicIsland() {
  const [timeBJ, setTimeBJ] = useState("");
  const [timeKiev, setTimeKiev] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeBJ(now.toLocaleTimeString("en-US", { timeZone: "Asia/Shanghai", hour: '2-digit', minute: '2-digit' }));
      setTimeKiev(now.toLocaleTimeString("en-US", { timeZone: "Europe/Kiev", hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ width: 100 }}
        animate={{ width: 320 }}
        className="h-10 bg-black border border-zinc-800 rounded-full flex items-center justify-between px-6 shadow-2xl shadow-orange-500/10"
      >
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>CN: {timeBJ}</span>
        </div>
        <div className="w-px h-4 bg-zinc-800"></div>
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span>UA: {timeKiev}</span>
        </div>
      </motion.div>
    </div>
  );
}