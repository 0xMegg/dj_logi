// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
// import localFont from "next/font/local";

// const pretendard = localFont({
//   src: "next/font/local/target.css",
//   variable: "--font-pretendard",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "동진특수물류",
  description: "동진특수물류 공식 웹사이트",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="ko" className={`${pretendard.variable}`}>
    <html>
      <body className="font-pretendard">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
