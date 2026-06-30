"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  { id: 1,  title: "Badkamer renovatie",        category: "Loodgieterswerk", photo: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80" },
  { id: 2,  title: "Binnendeuren plaatsen",      category: "Timmerwerk",      photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id: 3,  title: "Buiten schilderwerk",        category: "Schilderwerk",    photo: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80" },
  { id: 4,  title: "Wastafels monteren",         category: "Loodgieterswerk", photo: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80" },
  { id: 5,  title: "Plinten & afwerking",        category: "Timmerwerk",      photo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd9?w=600&q=80" },
  { id: 6,  title: "Binnen schilderwerk",        category: "Schilderwerk",    photo: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80" },
  { id: 7,  title: "Toilet plaatsen",            category: "Loodgieterswerk", photo: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&q=80" },
  { id: 8,  title: "Gipsplaten plaatsen",        category: "Timmerwerk",      photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { id: 9,  title: "Kranen vervangen",           category: "Loodgieterswerk", photo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80" },
  { id: 10, title: "Kozijnen schilderen",        category: "Schilderwerk",    photo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" },
  { id: 11, title: "Kitwerk badkamer",           category: "Loodgieterswerk", photo: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80" },
  { id: 12, title: "Complete woning schilderen", category: "Schilderwerk",    photo: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=600&q=80" },
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
                src={item.photo}
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

      </div>
    </section>
  );
}
