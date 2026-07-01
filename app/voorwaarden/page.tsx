import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden – Black Hammer",
  description: "Algemene voorwaarden van Black Hammer klusbedrijf.",
};

export default function VoorwaardenPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-bh-light min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Algemene Voorwaarden
          </h1>
          <p className="text-bh-muted text-sm mb-10">
            Versie: juli 2026 · Black Hammer, Haarlem
          </p>

          <div className="space-y-8 text-bh-text">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 1 – Definities</h2>
              <ul className="space-y-2 text-bh-muted leading-relaxed">
                <li><strong className="text-bh-text">Opdrachtnemer:</strong> Black Hammer, gevestigd te Haarlem, ingeschreven bij de KvK onder nummer 91300592.</li>
                <li><strong className="text-bh-text">Opdrachtgever:</strong> de persoon of het bedrijf dat opdracht geeft tot het uitvoeren van werkzaamheden.</li>
                <li><strong className="text-bh-text">Overeenkomst:</strong> de afspraken tussen opdrachtnemer en opdrachtgever over uit te voeren werkzaamheden.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 2 – Toepasselijkheid</h2>
              <p className="leading-relaxed text-bh-muted">
                Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen en overeenkomsten van Black Hammer. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 3 – Offertes en overeenkomsten</h2>
              <ul className="space-y-2 text-bh-muted leading-relaxed list-disc pl-6">
                <li>Offertes zijn vrijblijvend en geldig gedurende 30 dagen na dagtekening.</li>
                <li>Een overeenkomst komt tot stand na schriftelijke of mondelinge bevestiging door Black Hammer.</li>
                <li>Wijzigingen in de opdracht kunnen invloed hebben op de prijs en/of levertijd.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 4 – Uitvoering van werkzaamheden</h2>
              <ul className="space-y-2 text-bh-muted leading-relaxed list-disc pl-6">
                <li>Black Hammer voert alle werkzaamheden uit naar beste vermogen en met inachtneming van goed vakmanschap.</li>
                <li>De opdrachtgever zorgt voor toegang tot de werklocatie en beschikbaarheid van elektra en water, tenzij anders afgesproken.</li>
                <li>Genoemde (op)leveringstermijnen zijn indicatief en niet bindend, tenzij schriftelijk anders overeengekomen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 5 – Prijzen en betaling</h2>
              <ul className="space-y-2 text-bh-muted leading-relaxed list-disc pl-6">
                <li>Alle vermelde prijzen zijn inclusief BTW, tenzij uitdrukkelijk anders vermeld.</li>
                <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum.</li>
                <li>Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim en zijn incassokosten verschuldigd.</li>
                <li>Bij grote opdrachten kan een aanbetaling van maximaal 30% worden gevraagd.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 6 – Aansprakelijkheid</h2>
              <ul className="space-y-2 text-bh-muted leading-relaxed list-disc pl-6">
                <li>Black Hammer is uitsluitend aansprakelijk voor directe schade die het gevolg is van aantoonbare fouten bij de uitvoering van de werkzaamheden.</li>
                <li>De aansprakelijkheid is te allen tijde beperkt tot het bedrag van de betreffende factuur.</li>
                <li>Black Hammer is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 7 – Garantie</h2>
              <ul className="space-y-2 text-bh-muted leading-relaxed list-disc pl-6">
                <li>Op uitgevoerde arbeid geldt een garantietermijn van 3 maanden na oplevering.</li>
                <li>Op toegepaste materialen geldt de fabrieksgarantie.</li>
                <li>Garantie vervalt bij onjuist gebruik of ondeskundige ingrepen door derden.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 8 – Klachten</h2>
              <ul className="space-y-2 text-bh-muted leading-relaxed list-disc pl-6">
                <li>Klachten over de uitgevoerde werkzaamheden dienen binnen 7 dagen na oplevering schriftelijk te worden gemeld.</li>
                <li>Na deze termijn vervalt het recht op reclamatie, tenzij het gebrek redelijkerwijs niet eerder ontdekt kon worden.</li>
                <li>Het indienen van een klacht schort de betalingsverplichting niet op.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Artikel 9 – Toepasselijk recht</h2>
              <p className="leading-relaxed text-bh-muted">
                Op alle overeenkomsten met Black Hammer is uitsluitend Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Haarlem.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              ← Terug naar home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
