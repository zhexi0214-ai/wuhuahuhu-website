import type { Metadata } from "next";
import "./globals.css"; // 关键：这一行必须有，否则样式无法加载

export const metadata: Metadata = {
  title: "Wuhuahuhu Global Trade",
  description: "The Eye of Sourcing, The Soul of Trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}