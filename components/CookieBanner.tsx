"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-primary border-t border-white/10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p className="text-sm text-white/80 text-center sm:text-left">
          Wij gebruiken cookies om de website goed te laten werken. Lees ons{" "}
          <Link href="/privacy" className="text-accent underline hover:text-accent-dark">
            privacybeleid
          </Link>{" "}
          voor meer informatie.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/70 hover:text-white px-4 py-2 rounded-xl border border-white/20 hover:border-white/50 transition-colors"
          >
            Weigeren
          </button>
          <button
            onClick={accept}
            className="text-sm bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2 rounded-xl transition-colors"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
