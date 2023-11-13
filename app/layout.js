"use client";

import "./globals.css";
import { Swanky_and_Moo_Moo } from "next/font/google";

const swanky_and_moo_moo = Swanky_and_Moo_Moo({
  subsets: ["latin"],
  weight: ["400"],
});

import { usePathname } from "next/navigation";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en" className={swanky_and_moo_moo.className}>
      <body>
        <div className="flex flex-col align-middle">
          <Nav pathName={pathName} />
          <main className="app">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
