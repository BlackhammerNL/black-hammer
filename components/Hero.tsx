"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Achtergrond foto — vervang de URL door een eigen foto */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80')",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Klusbedrijf Black Hammer
          </span>

          {/* Titel */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Vakwerk voor iedere klus{" "}
            <span className="text-accent">in en rondom</span> uw woning.
          </h1>

          {/* Subtitel */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Van loodgieterswerk tot timmer- en schilderwerk. Black Hammer staat
            voor kwaliteit, duidelijke communicatie en een nette afwerking.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <FileText size={18} />
              Vraag offerte aan
            </a>
            <a
              href="https://wa.me/31600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-2xl backdrop-blur-sm transition-all hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-white/60 text-sm"
        >
          {["✓ Gratis offerte", "✓ Snel geholpen", "✓ Nette afwerking"].map(
            (item) => (
              <span key={item} className="font-medium">
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} className="text-white/50" />
      </motion.div>
    </section>
  );
}
