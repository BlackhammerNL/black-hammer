"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Hoe snel kunnen jullie langskomen?",
    answer:
      "Dat hangt af van de planning, maar we proberen altijd binnen een week langs te komen. Bij spoed doen we ons best om sneller te schakelen. Neem contact op en we kijken samen wat er mogelijk is.",
  },
  {
    question: "Doen jullie ook kleine klussen?",
    answer:
      "Zeker. Of het nu gaat om een lekkende kraan, een kapotte deur of een paar vierkante meter schilderwerk: geen klus is te klein voor ons.",
  },
  {
    question: "Moet ik materiaal zelf kopen?",
    answer:
      "Dat hoeft niet. We regelen de benodigde materialen voor u. De kosten worden transparant opgenomen in de offerte. Heeft u zelf al materiaal liggen? Dan werken we daar ook mee.",
  },
  {
    question: "Komen er voorrijkosten bij?",
    answer:
      "Dit bespreken we altijd vooraf. In de meeste gevallen nemen we de voorrijkosten mee in de offerte, zodat u achteraf nooit voor verrassingen staat.",
  },
  {
    question: "Geven jullie garantie op het werk?",
    answer:
      "Ja. Op al ons uitgevoerd werk geven wij 3 maanden garantie. Op gebruikte materialen geldt de fabrieksgarantie van de fabrikant.",
  },
  {
    question: "Werken jullie ook in het weekend?",
    answer:
      "In overleg is dat mogelijk. Neem contact op en we kijken samen naar een passend moment.",
  },
  {
    question: "Hoe verloopt de betaling?",
    answer:
      "Na afronding van de klus ontvangt u een factuur. Betaling dient te geschieden binnen 14 dagen. Voor grotere klussen kan een aanbetaling worden gevraagd.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-bh-muted max-w-xl mx-auto">
            Staat uw vraag er niet tussen? Neem gerust contact op, we helpen u graag verder.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-bh-light transition-colors"
              >
                <span className="font-semibold text-bh-text text-sm sm:text-base">
                  {faq.question}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  {open === i ? (
                    <Minus size={14} className="text-primary" />
                  ) : (
                    <Plus size={14} className="text-primary" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-bh-muted text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
