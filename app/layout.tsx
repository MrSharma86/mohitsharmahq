import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata = {
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
    { name: "Coaching", href: "/coaching" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-white"
          >
            Mohit Sharma
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <details className="md:hidden">
            <summary className="cursor-pointer list-none text-sm text-neutral-300 transition hover:text-white">
              Menu
            </summary>

            <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-neutral-950/95 px-6 py-4 backdrop-blur-xl">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/cv"
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  CV
                </Link>
                <Link
                  href="/projects"
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  Projects
                </Link>
                <Link
                  href="/writing"
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  Writing
                </Link>
                <Link
                  href="/coaching"
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  Coaching
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-neutral-300 transition hover:text-white"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-400 md:px-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mohit Sharma. All rights reserved.</p>
          <p>Built with clarity, intent, and thoughtful ambition.</p>
        </div>
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
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}