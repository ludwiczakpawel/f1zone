import * as React from "react";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/redbull.png";
import Photo1 from "/static/redbull/1.jpeg";
import Photo2 from "/static/redbull/2.jpeg";
import Photo3 from "/static/redbull/3.jpeg";
import Photo4 from "/static/redbull/4.jpeg";

const RedBull = () => {
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
          <img src={Logo} className="max-w-xs mx-auto" alt="Red Bull logo" />
          <h1 className="text-4xl font-bold">Red Bull Racing</h1>
        </header>
        <Photo
          src={Photo1}
          alt="RB18 from front"
          caption="Front of the car."
          source="Red Bull press release"
        />
        <Photo
          src={Photo2}
          alt="RB18 from side"
          caption="Side and front of the car."
          source="Red Bull press release"
        />
        <Photo
          src={Photo3}
          alt="RB18 from back"
          caption="Back of the car."
          source="Red Bull press release"
        />
        <Photo
          src={Photo4}
          alt="RB18 front wing and nose"
          caption="A bit of front wing and nose."
          source="Red Bull press release"
        />
      </div>
    </main>
  );
};

export default RedBull;
