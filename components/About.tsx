"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Jarenlange vakervaring in loodgieterswerk, timmerwerk en schilderwerk",
  "Altijd eerlijk advies — ook als een klus bij iemand anders beter past",
  "Nette werkplek: we ruimen altijd alles netjes op na afloop",
  "Honderden tevreden klanten in de regio",
];

export default function About() {
  return (
    <section id="over" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Over Black Hammer
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Bij Black Hammer draait alles om vakmanschap en vertrouwen. We
              zijn een nuchter klusbedrijf dat gewoon goed werk levert — zonder
              mooie praatjes, maar mét een nette afwerking.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Of het nu gaat om een lekkende kraan, een nieuwe deur of een
              complete schilderbeurt: u kunt erop rekenen dat we doen wat we
              zeggen. Duidelijke afspraken, eerlijke prijzen en een eindresultaat
              waar u trots op kunt zijn.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <CheckCircle
                    size={20}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-2xl transition-all hover:scale-105"
            >
              Neem contact op
            </a>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Jaar ervaring" },
                { value: "200+", label: "Tevreden klanten" },
                { value: "3", label: "Vakgebieden" },
                { value: "100%", label: "Nette afwerking" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
