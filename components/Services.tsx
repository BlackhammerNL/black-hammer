"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, Hammer, PaintBucket } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Loodgieterswerk",
    subtitle: "Voor renovatie, vervanging en montage.",
    description:
      "Van kleine lekkages tot complete badkamerinstallaties. Snel, netjes en vakkundig.",
    photo:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
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
    subtitle: "Voor renovatie, afwerking en maatwerk.",
    description:
      "Maatwerk in hout voor een nette, duurzame afwerking van uw interieur.",
    photo:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    items: [
      "Binnendeuren plaatsen",
      "Plinten monteren",
      "Gipsplaten plaatsen",
    ],
  },
  {
    icon: PaintBucket,
    title: "Schilderwerk",
    subtitle: "Binnen en buiten, voor particulier en bedrijf.",
    description:
      "Professioneel schilderwerk binnen en buiten, met aandacht voor detail en duurzame materialen.",
    photo:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80",
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
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
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
              {/* Photo header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.photo}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/60" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center mb-3">
                    <service.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-xs mt-1">{service.subtitle}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7">
                <p className="text-bh-muted text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
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
