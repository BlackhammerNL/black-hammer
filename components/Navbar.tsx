"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Over ons", href: "#over" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Black Hammer logo"
            width={64}
            height={64}
            className="object-contain drop-shadow-md"
            priority
          />
          <span
            className={`font-extrabold text-2xl tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Black <span className="text-accent">Hammer</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-bh-text" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Offerte aanvragen
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
          aria-label="Menu openen"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-bh-text font-medium border-b border-gray-100 last:border-0 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-center bg-accent text-white font-semibold py-3 rounded-xl hover:bg-accent-dark transition-colors"
              >
                Offerte aanvragen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
