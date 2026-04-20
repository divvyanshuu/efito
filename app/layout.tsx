import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efito — Premium Gym Apparel",
  description: "Train hard. Look sharp. Premium gym apparel for athletes who refuse to compromise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans", geistSans.variable, geistMono.variable, figtree.variable)}
    >
      <body className="min-h-full flex flex-col">
  <Navbar />
  <div className="flex-1">{children}</div>
  <Footer />
</body>
    </html>
  );
}