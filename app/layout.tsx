import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./nav";

const lmroman = localFont({
  variable: "--font-lmroman",
  src: [
    { path: "./fonts/lmroman-regular-webfont.woff", weight: "400", style: "normal" },
    { path: "./fonts/lmroman-italic-webfont.woff", weight: "400", style: "italic" },
    { path: "./fonts/lmroman-bold-webfont.woff", weight: "700", style: "normal" },
    { path: "./fonts/lmroman-bolditalic-webfont.woff", weight: "700", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Ved Vedere",
  description: "Personal website of Ved Vedere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lmroman.variable} h-full`}>
      <body className="flex min-h-full">
        <Nav />
        <div className="ml-56 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
