import "./globals.css";

export const metadata = {
  title: "Wuhuahuhu | The Eye of Sourcing",
  description: "254km Resilience Built Into Every Trade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <body className="antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}