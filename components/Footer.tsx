import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Camera } from "lucide-react";

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Over ons", href: "#over" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Black Hammer logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="font-bold text-lg">Black Hammer</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Vakwerk voor iedere klus in en rondom uw woning. Kwaliteit,
              duidelijke communicatie en een nette afwerking.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-semibold mb-5 text-sm tracking-widest uppercase text-white/50">
              Navigatie
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijfsinfo */}
          <div>
            <h3 className="font-semibold mb-5 text-sm tracking-widest uppercase text-white/50">
              Bedrijfsinfo
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">KvK</span>
                [KVK-NUMMER]
              </li>
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">BTW</span>
                [BTW-NUMMER]
              </li>
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">Werkgebied</span>
                [WERKGEBIED]
              </li>
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">Openingstijden</span>
                [OPENINGSTIJDEN]
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5 text-sm tracking-widest uppercase text-white/50">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-accent shrink-0" />
                [TELEFOONNUMMER]
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-accent shrink-0" />
                [E-MAILADRES]
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                [ADRES EN PLAATSNAAM]
              </li>
            </ul>

            {/* Instagram CTA */}
            <a
              href="https://instagram.com/[INSTAGRAM_NAAM]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <Camera size={16} />
              Volg ons op Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white/40 text-xs">
          <span>© {year} Black Hammer. Alle rechten voorbehouden.</span>
          <span className="hidden sm:block">·</span>
          <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacybeleid</Link>
          <span className="hidden sm:block">·</span>
          <Link href="/voorwaarden" className="hover:text-white/70 transition-colors">Algemene Voorwaarden</Link>
        </div>
      </div>
    </footer>
  );
}
