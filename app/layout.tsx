import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Hammer – Vakwerk voor iedere klus",
  description:
    "Black Hammer staat voor kwaliteit, duidelijke communicatie en een nette afwerking. Van loodgieterswerk tot timmer- en schilderwerk in en rondom uw woning.",
  keywords:
    "klusbedrijf, loodgieterswerk, timmerwerk, schilderwerk, vakman, Black Hammer",
  openGraph: {
    title: "Black Hammer – Vakwerk voor iedere klus",
    description:
      "Van loodgieterswerk tot timmer- en schilderwerk. Kwaliteit, heldere communicatie en nette afwerking.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white text-bh-text antialiased">{children}</body>
    </html>
  );
}
