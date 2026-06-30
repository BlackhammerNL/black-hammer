"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Terug naar boven"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
    >
      <ArrowUp size={20} />
    </button>
  );
}
