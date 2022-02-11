import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/astonmartin.png";
import Photo1 from "/static/astonmartin/1.jpeg";
import Photo2 from "/static/astonmartin/2.jpeg";
import Photo3 from "/static/astonmartin/3.jpeg";
import Photo4 from "/static/astonmartin/4.jpeg";
import Photo5 from "/static/astonmartin/5.jpeg";
import Photo6 from "/static/astonmartin/6.jpeg";
import Photo7 from "/static/astonmartin/7.jpeg";

const AstonMartin = () => {
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
          <img
            src={Logo}
            className="max-w-xs mx-auto"
            alt="Aston Martin logo"
          />
          <h1 className="text-4xl font-bold">
            Aston Martin Aramco Cognizant F1 Team
          </h1>
        </header>
        <Photo
          src={Photo1}
          alt="AMR22 from front"
          caption="Front of the car."
          source="Aston Martin press release"
        />
        <Photo
          src={Photo2}
          alt="AMR22 from side"
          caption="Side of the car."
          source="Aston Martin press release"
        />
        <Photo
          src={Photo3}
          alt="AMR22 from back"
          caption="Back of the car and rear wing."
          source="Aston Martin press release"
        />
        <Photo
          src={Photo4}
          alt="AMR22 from top"
          caption="Car from the top."
          source="Aston Martin press release"
        />
        <Photo
          src={Photo5}
          alt="AMR22 front wing"
          caption="Front wing."
          source="Aston Martin press release"
        />
        <Photo
          src={Photo6}
          alt="AMR22 cockpit"
          caption="Cockpit."
          source="Aston Martin press release"
        />

        <Photo
          src={Photo7}
          alt="AMR22 cockpit from distance"
          caption="Cockpit again."
          source="Aston Martin press release"
        />

        <Photo
          src={Photo8}
          alt="AMR22 on the track"
          caption="First time on the track."
          source="@AstonMartinF1 on Twitter"
        />
      </div>
    </main>
  );
};

export default AstonMartin;
