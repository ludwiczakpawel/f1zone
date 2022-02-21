import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/alpine.png";
import Photo1 from "/static/alpine/1.jpeg";
import Photo2 from "/static/alpine/2.jpeg";
import Photo3 from "/static/alpine/3.jpeg";
import Photo4 from "/static/alpine/4.jpeg";
import Photo5 from "/static/alpine/5.jpeg";
import Photo6 from "/static/alpine/6.jpeg";
import Photo7 from "/static/alpine/7.jpeg";
import Photo8 from "/static/alpine/8.jpeg";

const Alpine = () => {
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
          <img src={Logo} className="max-w-xs mx-auto" alt="Alpine logo" />
          <h1 className="text-4xl font-bold">BWT Alpine F1 Team</h1>
        </header>
        <Photo
          src={Photo1}
          alt="A522"
          caption="A522."
          source="Alpine press release"
        />
        <Photo
          src={Photo2}
          alt="Front of the A522"
          caption="Front of the A522."
          source="Alpine press release"
        />
        <Photo
          src={Photo3}
          alt="Side of the A522"
          caption="Side of the A522."
          source="Alpine press release"
        />
        <Photo
          src={Photo4}
          alt="Side of the A522"
          caption="Side of the A522."
          source="Alpine press release"
        />
        <Photo
          src={Photo5}
          alt="Pink A522"
          caption="Pink A522 for season opener."
          source="Alpine press release"
        />
        <Photo
          src={Photo6}
          alt="Front of the pink A522"
          caption="Front of the pink A522."
          source="Alpine press release"
        />
        <Photo
          src={Photo7}
          alt="Side of the pink A522"
          caption="Side of the pink A522."
          source="Alpine press release"
        />
        <Photo
          src={Photo8}
          alt="Side of the pink A522"
          caption="Side of the pink A522."
          source="Alpine press release"
        />
      </div>
    </main>
  );
};

export default Alpine;
