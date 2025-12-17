import type { JSX } from "react";

export const App = (): JSX.Element => {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <header className="border-b-4 border-double border-stone-900 pb-2 mb-2">
        <div className="flex flex-col sm:flex-row justify-between text-[0.5rem] sm:text-xs tracking-widest mb-2">
          <span>EST. 2024</span>
          <span className="hidden sm:block">
            BERLIN'S ONLY SOURCE FOR PASTA PHENOMENA
          </span>
          <span>PRICE: €0.69</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center tracking-wide py-2 font-display">
          LACHSNUDEL.SPACE
        </h1>
        <div className="flex flex-col sm:flex-row justify-between text-[0.5rem] sm:text-xs tracking-widest border-t border-stone-900 pt-2">
          <span>VOL. I — NO. 42</span>
          <span>BERLIN, GERMANY</span>
          <span>CASE FILE #4217</span>
        </div>
      </header>

      <div className="border-b border-stone-900 py-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-center leading-[0.9] font-display">
          LOCAL COUPLE CLAIMS EXTRATERRESTRIAL CONTACT
        </h2>
        <p className="text-center text-sm sm:text-base tracking-wide mt-3 font-display">
          "They told us to cook the dish. We obey." — Pair reports recurring
          compulsion since first sighting
        </p>
      </div>

      <div className="border-b border-stone-900">
        <figure className="">
          <img
            src="sighting.png"
            alt="The Berlin Sighting"
            className="w-full block grayscale"
          />
          <figcaption className="text-xs tracking-wide py-3">
            <strong>EXCLUSIVE</strong> — Image captured near Fernsehturm.
            Analysts confirm tagliatelle-class vessel. Salmon visible in beam.
          </figcaption>
        </figure>
      </div>

      <article className="py-4 border-b border-stone-900 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm sm:text-base leading-relaxed">
        <p>
          <span className="font-display tracking-widest">BERLIN</span> — Two
          individuals, known only as N. and F., have come forward with claims
          that baffle investigators. Since witnessing an object over Prenzlauer
          Berg, they feel "compelled" to prepare the same dish: tagliatelle with
          salmon and dill.
        </p>

        <p>
          "We don't question it," N. stated. "The urge returns. We cook. It
          feels necessary." Dr. ████████ of the Berlin Institute suggests
          "culinary conditioning" — behavioral programming from contact.
        </p>

        <p>
          N. claims to receive "technical instructions" during sightings. He has
          built devices to maintain their connection across distances. "They
          want us linked," F. explained. "Even apart."
        </p>

        <p>
          Authorities decline comment. The couple continues to cook. The devices
          remain active. This publication will continue to monitor.
        </p>
      </article>

      <div className="py-6 border-b border-stone-900 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl leading-tight font-display">
          "THE CRAFT APPEARED. WE SMELLED DILL. SINCE THEN, WE COOK WHAT THEY
          SHOWED US."
        </p>
        <p className="text-xs tracking-widest mt-3">— CONTACTEE F.</p>
      </div>

      <section className="py-4">
        <h3 className="text-xl border-b-2 border-stone-900 pb-2 mb-4 font-display">
          DEVICES CONSTRUCTED BY CONTACTEES
        </h3>

        <a
          href="https://lto.lachsnudel.space"
          className="block border border-stone-900 p-4 mb-3 hover:bg-stone-200 transition-colors"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h4 className="text-lg">LTO — SYNCHRONIZED RECEIVER</h4>
              <p className="text-sm mt-2 leading-relaxed">
                F. monitors broadcast from LTO.DE. Device syncs signal to both
                contactees regardless of location. "We must hear it together.
                That's what they want."
              </p>
            </div>
          </div>
        </a>

        {/* <div className="border border-dashed border-stone-400 p-4 text-stone-500">
          <h4 className="text-lg">SCHEMATICS PENDING</h4>
          <p className="text-sm mt-1">Further instructions incoming.</p>
        </div> */}
      </section>

      <footer className="border-t-4 border-double border-stone-900 pt-4 mt-4">
        <div className="flex flex-col sm:flex-row justify-between text-xs tracking-widest">
          <span>FILED BY N. FOR F.</span>
          <span>LACHSNUDEL.SPACE</span>
          <span>THE TRUTH IS DELICIOUS.</span>
        </div>
      </footer>
    </main>
  );
};
