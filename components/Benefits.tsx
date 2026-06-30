"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, MessageSquare, BadgeDollarSign } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Betrouwbaar",
    description:
      "U kunt op ons rekenen. We komen onze afspraken na en werken transparant.",
  },
  {
    icon: Sparkles,
    title: "Netjes afgewerkt",
    description:
      "Elk project wordt zorgvuldig uitgevoerd en netjes achtergelaten, zodat u er direct van kunt genieten.",
  },
  {
    icon: MessageSquare,
    title: "Heldere communicatie",
    description:
      "U weet altijd waar u aan toe bent: duidelijke offerte, eerlijke planning en directe communicatie.",
  },
  {
    icon: BadgeDollarSign,
    title: "Scherpe prijzen",
    description:
      "Eerlijke tarieven zonder verrassingen achteraf. Topkwaliteit hoeft niet duur te zijn.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-bh-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Waarom kiezen voor Black Hammer?
          </h2>
          <p className="text-bh-muted max-w-xl mx-auto">
            Wij doen wat we beloven. Geen verrassingen, gewoon goed werk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-bh-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
