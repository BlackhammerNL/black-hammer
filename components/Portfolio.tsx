"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  { id: 1,  title: "Badkamer renovatie",       category: "Loodgieterswerk", seed: 20  },
  { id: 2,  title: "Binnendeuren plaatsen",     category: "Timmerwerk",      seed: 30  },
  { id: 3,  title: "Buiten schilderwerk",       category: "Schilderwerk",    seed: 40  },
  { id: 4,  title: "Wastafels monteren",        category: "Loodgieterswerk", seed: 50  },
  { id: 5,  title: "Plinten & afwerking",       category: "Timmerwerk",      seed: 60  },
  { id: 6,  title: "Binnen schilderwerk",       category: "Schilderwerk",    seed: 70  },
  { id: 7,  title: "Toilet plaatsen",           category: "Loodgieterswerk", seed: 80  },
  { id: 8,  title: "Gipsplaten plaatsen",       category: "Timmerwerk",      seed: 90  },
  { id: 9,  title: "Kranen vervangen",          category: "Loodgieterswerk", seed: 100 },
  { id: 10, title: "Kozijnen schilderen",       category: "Schilderwerk",    seed: 110 },
  { id: 11, title: "Kitwerk badkamer",          category: "Loodgieterswerk", seed: 120 },
  { id: 12, title: "Complete woning schilderen",category: "Schilderwerk",    seed: 130 },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-bh-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Eerder werk
          </h2>
          <p className="text-bh-muted max-w-xl mx-auto">
            Een greep uit onze projecten. Elk klus verdient dezelfde aandacht
            en zorg.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={`https://picsum.photos/seed/${item.seed}/600/450`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-white font-semibold mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-bh-muted text-sm mt-8">
          * Foto&apos;s worden vervangen door eigen projectfoto&apos;s.
        </p>
      </div>
    </section>
  );
}
