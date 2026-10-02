import type { Metadata } from "next";
import { Caveat, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";
import ScrollNav from "@/components/layout/ScrollNav";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "MIYAO WORLD",
  description: "Miyao World official store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${lato.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body className="antialiased">
        <MobileHeader />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="min-w-0 flex-1 px-[20px] pt-[20px] lg:pl-0 lg:pr-[var(--content-gutter)] lg:pt-[var(--content-top)]">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <ScrollNav />
      </body>
    </html>
  );
}
