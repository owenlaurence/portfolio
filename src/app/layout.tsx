import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "mcpartlan.dev",
  description: "How I can help you and your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Analytics/>
        <SpeedInsights/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
