"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

/* ── Vul hier de echte contactgegevens in ─────────────────── */
const PHONE = "[TELEFOONNUMMER]";
const WHATSAPP_NUMBER = "31600000000"; // formaat: landcode + nummer zonder +
const EMAIL = "[E-MAILADRES]";
const ADDRESS = "[ADRES EN PLAATSNAAM]";
/* ─────────────────────────────────────────────────────────── */

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Offerte aanvraag - Black Hammer");
    const body = encodeURIComponent(
      `Naam: ${form.name}\nE-mail: ${form.email}\n\nBericht:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-bh-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Neem contact op
          </h2>
          <p className="text-bh-muted max-w-xl mx-auto">
            Vraag een gratis offerte aan of stel uw vraag. Wij reageren binnen 24 uur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {[
              {
                icon: Phone,
                label: "Telefoon",
                value: PHONE,
                href: `tel:${PHONE}`,
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Stuur een bericht",
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
              },
              {
                icon: Mail,
                label: "E-mail",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
              },
              {
                icon: MapPin,
                label: "Adres",
                value: ADDRESS,
                href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <item.icon
                    size={20}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <div className="text-xs text-bh-muted font-medium mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-bh-text font-semibold text-sm">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {sent ? (
              <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-primary font-bold text-xl mb-2">
                  Bericht verstuurd!
                </h3>
                <p className="text-bh-muted text-sm">
                  We nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-bh-text mb-1.5">
                    Naam *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Uw naam"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bh-text mb-1.5">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="uw@email.nl"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-bh-text mb-1.5">
                    Uw bericht of klus *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Omschrijf uw klus of stel een vraag..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-xl transition-colors"
                >
                  Stuur bericht →
                </button>
                <p className="text-center text-xs text-bh-muted">
                  Of app direct via{" "}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
