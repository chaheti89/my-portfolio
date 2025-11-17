import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chaheti Jha – Portfolio",
  description: "Software Engineer | ML & AI Enthusiast",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={`abstract-aura bg-black text-white min-h-screen antialiased ${geistSans.variable} ${geistMono.variable}`}>

        {children}
      </body>
    </html>
  );
}
