"use client";

import { motion } from "framer-motion";
import { Wrench, Hammer, PaintBucket } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Loodgieterswerk",
    description:
      "Van kleine lekkages tot complete badkamerinstallaties. Snel, netjes en vakkundig.",
    items: [
      "Badkamermeubels plaatsen",
      "Wastafels plaatsen",
      "Toiletten plaatsen",
      "Kranen vervangen of monteren",
      "Kitwerk",
    ],
  },
  {
    icon: Hammer,
    title: "Timmerwerk",
    description:
      "Maatwerk in hout voor een nette, duurzame afwerking van uw interieur.",
    items: [
      "Binnendeuren plaatsen",
      "Plinten monteren",
      "Gipsplaten plaatsen",
    ],
  },
  {
    icon: PaintBucket,
    title: "Schilderwerk",
    description:
      "Professioneel schilderwerk binnen en buiten, met aandacht voor detail en duurzame materialen.",
    items: ["Binnen schilderwerk", "Buiten schilderwerk"],
  },
];

export default function Services() {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Onze diensten
          </h2>
          <p className="text-bh-muted max-w-xl mx-auto">
            Alles in en rondom uw woning. Één aanspreekpunt, één rekening.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-primary p-7">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card body */}
              <div className="p-7">
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                      </span>
                      <span className="text-bh-text">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 w-full block text-center border border-primary text-primary font-semibold text-sm py-3 rounded-xl hover:bg-primary hover:text-white transition-colors"
                >
                  Offerte aanvragen
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
