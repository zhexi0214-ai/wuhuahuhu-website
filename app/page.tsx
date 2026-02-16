"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-black tracking-tighter">Wuhuahuhu</h1>
        <p className="text-orange-500 tracking-[0.5em] uppercase text-sm font-bold">The Eye of Sourcing</p>
        <div className="mt-8 p-6 border border-zinc-800 bg-zinc-900/50 rounded-2xl">
          <p className="text-zinc-400 italic font-serif">"No nos conformamos con el 996."</p>
        </div>
        <div className="pt-10">
          <div className="text-[10px] text-zinc-500 font-mono mb-2 text-left uppercase">254km Resilience</div>
          <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
}