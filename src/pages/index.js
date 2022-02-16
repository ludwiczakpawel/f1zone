import * as React from "react";
import { Helmet } from "react-helmet";
import { GridCell } from "../components/GridCell";
import AlfaRomeoLogo from "/static/logos/alfaromeo.png";
import AlphaTauriLogo from "/static/logos/alphatauri.png";
import AlpineLogo from "/static/logos/alpine.png";
import AstonMartinLogo from "/static/logos/astonmartin.png";
import FerrariLogo from "/static/logos/ferrari.png";
import HaasLogo from "/static/logos/haas.png";
import McLarenLogo from "/static/logos/mclaren.png";
import MercedesLogo from "/static/logos/mercedes.png";
import RedBullLogo from "/static/logos/redbull.png";
import WilliamsLogo from "/static/logos/williams.png";

const Home = () => {
  return (
    <main className="min-h-screen md:grid lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-7 overflow-x-hidden p-6 sm:p-10 bg-white dark:bg-black text-slate-700 dark:text-slate-200">
      <Helmet>
        <title>🏎 Wroom wroom!</title>
      </Helmet>
      <div className="flex gap-2 rounded-2xl p-7 sm:p-10 flex-col bg-slate-50 dark:bg-neutral-900 place-content-center text-lg">
        <p>
          This site <em>will be</em> a gallery of F1 cars for the upcoming 2022
          season.
        </p>
        <p>
          I created it because I <strong>personally</strong> think 2022 cars
          will be the most beautiful cars in F1 history (or at least{" "}
          <em>almost</em>).
        </p>
        <p>
          It's an <a
            href="https://github.com/ludwiczakpawel/f1zone"
            className="inline-block decoration-2 underline-offset-2 underline decoration-indigo-600 hover:text-indigo-600 transition-all"
            target="_blank"
          >
            open source
          </a> project I created as I simply couldn't wait for new cars to be revealed 😍.
        </p>
        <p>
          Cheers,{" "}
          <a
            href="https://twitter.com/ludwiczakpawel"
            className="inline-block decoration-2 underline-offset-2 underline decoration-indigo-600 hover:text-indigo-600 transition-all"
            target="_blank"
          >
            Paweł
          </a>
          . Wroom wroom! 🏎
        </p>
      </div>
      <GridCell
        href="/alfa-romeo"
        title="Alfa Romeo F1 Team ORLEN"
        logo={AlfaRomeoLogo}
        revealDate={1645916400000}
      />
      <GridCell
        href="/alphatauri"
        title="Scuderia AlphaTauri"
        logo={AlphaTauriLogo}
        revealDate={1644793200000}
        revealed
      />
      <GridCell
        href="/alpine"
        title="BWT Alpine F1 Team"
        logo={AlpineLogo}
        revealDate={1645398000000}
      />
      <GridCell
        href="/aston-martin"
        title="Aston Martin Aramco Cognizant F1 Team"
        logo={AstonMartinLogo}
        revealDate={1644447600000}
        revealed
      />
      <GridCell
        href="/ferrari"
        title="Scuderia Ferrari"
        logo={FerrariLogo}
        revealDate={1645052400000}
      />
      <GridCell
        href="/haas"
        title="Uralkali Haas F1 Team"
        logo={HaasLogo}
        revealDate={1643929200000}
        revealed
      />
      <GridCell
        href="/mclaren"
        title="McLaren F1 Team"
        logo={McLarenLogo}
        revealDate={1644534000000}
        revealed
      />
      <GridCell
        href="/mercedes"
        title="Mercedes-AMG Petronas Formula One Team"
        logo={MercedesLogo}
        revealDate={1645138800000}
      />
      <GridCell
        href="/red-bull"
        title="Red Bull Racing"
        logo={RedBullLogo}
        revealDate={1644361200000}
        revealed
      />
      <GridCell
        href="/williams"
        title="Williams Racing"
        logo={WilliamsLogo}
        revealDate={1644879600000}
        revealed
      />
    </main>
  );
};

export default Home;
