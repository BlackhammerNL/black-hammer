import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacybeleid – Black Hammer",
  description: "Lees het privacybeleid van Black Hammer klusbedrijf.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-bh-light min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Privacybeleid
          </h1>
          <p className="text-bh-muted text-sm mb-10">Laatst bijgewerkt: juli 2026</p>

          <div className="space-y-8 text-bh-text">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Wie zijn wij?</h2>
              <p className="leading-relaxed">
                Black Hammer is een klusbedrijf gevestigd in Nederland. Wij bieden diensten aan op het gebied van loodgieterswerk, timmerwerk en schilderwerk. Voor vragen over dit privacybeleid kunt u contact opnemen via <strong>Black-Hammer023@outlook.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. Welke gegevens verzamelen wij?</h2>
              <p className="leading-relaxed mb-3">
                Wij verzamelen alleen de gegevens die u zelf invult via het contactformulier op onze website:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-bh-muted">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Uw bericht of klusbeschrijving</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p className="leading-relaxed">
                Uw gegevens worden uitsluitend gebruikt om uw vraag of offerteaanvraag te beantwoorden. Wij verkopen uw gegevens nooit aan derden en gebruiken ze niet voor marketingdoeleinden zonder uw toestemming.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. Hoe lang bewaren wij uw gegevens?</h2>
              <p className="leading-relaxed">
                Wij bewaren uw contactgegevens niet langer dan noodzakelijk. Berichten worden maximaal 12 maanden bewaard, tenzij een lopende opdracht een langere bewaartermijn vereist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Cookies</h2>
              <p className="leading-relaxed">
                Onze website maakt gebruik van functionele cookies. Deze zijn noodzakelijk voor het goed functioneren van de website. Wij plaatsen geen tracking- of advertentiecookies zonder uw toestemming.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">6. Uw rechten (AVG)</h2>
              <p className="leading-relaxed mb-3">
                Op grond van de AVG (Algemene Verordening Gegevensbescherming) heeft u de volgende rechten:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-bh-muted">
                <li>Recht op inzage in uw persoonsgegevens</li>
                <li>Recht op correctie van onjuiste gegevens</li>
                <li>Recht op verwijdering van uw gegevens</li>
                <li>Recht op bezwaar tegen verwerking</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Neem contact met ons op via <strong>Black-Hammer023@outlook.com</strong> om gebruik te maken van uw rechten. Wij reageren binnen 30 dagen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">7. Beveiliging</h2>
              <p className="leading-relaxed">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik of ongeoorloofde toegang.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">8. Klachten</h2>
              <p className="leading-relaxed">
                Heeft u een klacht over hoe wij met uw persoonsgegevens omgaan? Dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens via{" "}
                <a
                  href="https://www.autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark underline"
                >
                  autoriteitpersoonsgegevens.nl
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">9. Contact</h2>
              <p className="leading-relaxed">Heeft u vragen over ons privacybeleid?</p>
              <div className="mt-3 bg-white rounded-2xl p-5 border border-gray-100 text-sm space-y-1">
                <p><strong>Black Hammer</strong></p>
                <p>Aart van der Leeuwstraat 128, Haarlem</p>
                <p>Black-Hammer023@outlook.com</p>
                <p>06 48 81 69 65</p>
                <p>KvK: 91300592</p>
              </div>
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
