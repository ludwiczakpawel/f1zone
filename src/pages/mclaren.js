import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/mclaren.png";
import Photo1 from "/static/mclaren/1.jpeg";
import Photo2 from "/static/mclaren/2.jpeg";
import Photo3 from "/static/mclaren/3.jpeg";
import Photo4 from "/static/mclaren/4.jpeg";
import Photo5 from "/static/mclaren/5.jpeg";

const McLaren = () => {
  return (
    <main className="min-h-screen overflow-x-hidden sm:p-10 bg-white dark:bg-black text-slate-700 dark:text-neutral-300">
      <Helmet>
        <title>🏎 Wroom wroom!</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
        <header className="text-center p-8 sm:p-0 mb-6">
          <Link
            to="/"
            className="inline-block text-slate-400 hover:text-indigo-600 transition-all"
          >
            &laquo; Go back
          </Link>
          <img src={Logo} className="max-w-xs mx-auto" alt="McLaren logo" />
          <h1 className="text-4xl font-bold">McLaren F1 Team</h1>
        </header>
        <Photo
          src={Photo1}
          alt="Side of the MCL36"
          caption="Side of the MCL36"
          source="McLaren press release"
        />
        <Photo
          src={Photo2}
          alt="Front of the MCL36"
          caption="Front of the MCL36."
          source="McLaren press release"
        />
        <Photo
          src={Photo3}
          alt="Side of the MCL36"
          caption="Side of the MCL36."
          source="McLaren press release"
        />
        <Photo
          src={Photo4}
          alt="MCL36 from the top"
          caption="MCL36 from the top."
          source="McLaren press release"
        />
        <Photo
          src={Photo5}
          alt="MCL36 on a track"
          caption="MCL36 on a track."
          source="@LandoNorris on Twitter"
        />
      </div>
    </main>
  );
};

export default McLaren;
