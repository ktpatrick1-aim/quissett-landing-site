"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/property", label: "The Property" },
  { href: "/area", label: "The Area" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-sm border-b border-driftwood/60"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <Link
          href="/"
          className={`font-display text-lg md:text-xl tracking-tight transition-colors duration-300 ${
            transparent ? "text-cream" : "text-harbor"
          }`}
        >
          The Quissett Landing
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-sans tracking-wide transition-colors duration-200 hover:text-tide ${
                transparent ? "text-cream/90" : "text-cedar"
              } ${pathname === href ? "border-b border-current" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className={`text-sm font-sans tracking-wide px-5 py-2.5 rounded-full transition-all duration-200 ${
              transparent
                ? "bg-cream text-harbor hover:bg-sand"
                : "bg-harbor text-cream hover:bg-tide"
            }`}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            transparent ? "text-cream" : "text-harbor"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-driftwood/60 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-harbor font-sans text-base py-1 border-b border-driftwood/40"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-2 bg-harbor text-cream font-sans text-sm tracking-wide px-5 py-3 rounded-full text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
