import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/alphatauri.png";
import Photo1 from "/static/alphatauri/1.jpeg";
import Photo2 from "/static/alphatauri/2.jpeg";
import Photo3 from "/static/alphatauri/3.jpeg";
import Photo4 from "/static/alphatauri/4.jpeg";

const AlphaTauri = () => {
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
            alt="AlphaTauri logo"
          />
          <h1 className="text-4xl font-bold">Scuderia AlphaTauri</h1>
        </header>
        <Photo
          src={Photo1}
          alt="Side of the AT03"
          caption="Side of the AT03"
          source="AlphaTauri press release"
        />
        <Photo
          src={Photo2}
          alt="AT03 from the top"
          caption="AT03 from the top."
          source="AlphaTauri press release"
        />
        <Photo
          src={Photo3}
          alt="Side of the AT03"
          caption="Side of the AT03."
          source="AlphaTauri press release"
        />
        <Photo
          src={Photo4}
          alt="Another side of the AT03"
          caption="Another side of the AT03."
          source="AlphaTauri press release"
        />
      </div>
    </main>
  );
};

export default AlphaTauri;
