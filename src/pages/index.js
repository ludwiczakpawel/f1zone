import * as React from "react"
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
    <main className="min-h-screen md:grid lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-7 overflow-x-hidden p-10 bg-white dark:bg-black text-slate-700 dark:text-slate-200">
      <div className="flex gap-2 rounded-2xl p-10 flex-col bg-slate-50 dark:bg-neutral-900/50 place-content-center text-lg">
        <p>Hi 👋</p>
        <p>
          This is a gallery of cars from all Formula 1 teams in 2022.
          Reprehenderit adipisicing officia mollit velit reprehenderit excepteur
          ullamco eiusmod officia dolore nostrud. Eu veniam id proident
          incididunt fugiat enim irure adipisicing ex consequat ad. Nisi fugiat
          et aliqua anim consectetur ullamco cupidatat.
        </p>
        <p>Cheers, Paweł. Wroom wroom! 🏎</p>
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
      />
      <GridCell
        href="/"
        title="Alpine F1 Team"
        logo={AlpineLogo}
        revealDate={1645398000000}
      />
      <GridCell
        href="/aston-martin"
        title="Aston Martin Cognizant Formula One Team"
        logo={AstonMartinLogo}
        revealDate={1644447600000}
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
        subtitle="Haas has revealed only 'new' painting on a standard F1 2022 livery."
        logo={HaasLogo}
        revealDate={1643929200000}
        revealed
      />
      <GridCell
        href="/mclaren"
        title="McLaren F1 Team"
        logo={McLarenLogo}
        revealDate={1644534000000}
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
      />
      <GridCell
        href="/williams"
        title="Williams Racing"
        logo={WilliamsLogo}
      />
    </main>
  );
};

export default Home;
