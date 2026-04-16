import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Sharma | Data Scientist",
  description:
    "A data scientist who solves real problems, writes thoughtfully, competes rigorously, and coaches people to grow.",
  icons: {
    icon: "/favicon.ico",
  },
};

function Navbar() {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "CV", href: "/cv" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
    { name: "Work with Me", href: "/work-with-me" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.12em] text-zinc-100 transition hover:text-zinc-300"
        >
          Mohit Sharma
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer text-sm text-zinc-300">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-44 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-3 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Mohit Sharma. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Built with clarity, intent, and thoughtful ambition.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}