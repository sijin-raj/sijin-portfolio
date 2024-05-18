import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sijin Raj | Personal",
  metadataBase: new URL("https://www.sijinraj.engineer/"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Sijin", url: "https://github.com/erich2s" },
    { name: "黄士崧", url: "https://github.com/erich2s" },
  ],
  description: "Sijin's personal portfolio website",
  openGraph: {
    title: " Sijin Raj| Personal",
    description: "Sijin's personal portfolio website",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Sijin's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
