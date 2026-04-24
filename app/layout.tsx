import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

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
        <nav className="fixed top-0 left-0 h-screen flex flex-col gap-7 px-10 py-16">
          <Link href="/" className="text-4xl underline-slide">Home</Link>
          <Link href="/writing" className="text-4xl underline-slide">Writing</Link>
          <Link href="/projects" className="text-4xl underline-slide">Projects</Link>
        </nav>
        <div className="ml-56 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
