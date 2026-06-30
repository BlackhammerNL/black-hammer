"use client";

import { motion } from "framer-motion";
import { Phone, FileText, CalendarCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Neem contact op",
    description:
      "Bel, app of mail ons. We reageren altijd snel en beantwoorden al uw vragen.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Ontvang een vrijblijvende offerte",
    description:
      "U ontvangt een heldere offerte zonder kleine lettertjes — transparant en eerlijk.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Plan een afspraak",
    description:
      "We plannen samen een datum die u uitkomt. Stipt en betrouwbaar.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Wij voeren de klus netjes uit",
    description:
      "We werken zorgvuldig, ruimen alles op en leveren vakwerk dat u ziet.",
  },
];

export default function Process() {
  return (
    <section id="werkwijze" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Hoe werkt het?
          </h2>
          <p className="text-bh-muted max-w-xl mx-auto">
            In vier simpele stappen van eerste contact tot een nette afgewerkte
            klus.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon bubble */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                    <item.icon size={30} className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-bh-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition-all hover:scale-105"
          >
            Start met stap 1 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
