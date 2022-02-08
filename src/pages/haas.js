import * as React from "react"
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import HaasLogo from "/static/logos/haas.png";
import Photo1 from "/static/haas/1.jpeg";
import Photo2 from "/static/haas/2.jpeg";
import Photo3 from "/static/haas/3.jpeg";
import Photo4 from "/static/haas/4.jpeg";

const Haas = () => {
  return (
    <main className="min-h-screen overflow-x-hidden sm:p-10 bg-white dark:bg-black text-slate-700 dark:text-neutral-300">
      <Helmet>
        <title>🏎 Wroom wroom!</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
        <header className="text-center p-8 sm:p-0 mb-6">
          <a
            href="/"
            className="inline-block text-slate-400 hover:text-indigo-600 transition-all"
          >
            &laquo; Go back
          </a>
          <img src={HaasLogo} className="max-w-xs mx-auto" alt="Haas logo" />
          <h1 className="text-4xl font-bold">Uralkali Haas F1 Team</h1>
        </header>
        <Photo
          src={Photo1}
          alt="Haas from front"
          caption="Front."
          source="Haas press release"
        />
        <Photo
          src={Photo2}
          alt="Haas from side"
          caption="Side."
          source="Haas press release"
        />
        <Photo
          src={Photo3}
          alt="Haas from top"
          caption="Top."
          source="Haas press release"
        />
        <Photo
          src={Photo4}
          alt="Haas from back"
          caption="Funky back."
          source="Haas press release"
        />
      </div>
    </main>
  );
};

export default Haas;
