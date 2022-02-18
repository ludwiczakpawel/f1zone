import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/mercedes.png";
import Photo1 from "/static/mercedes/1.jpg";
import Photo2 from "/static/mercedes/2.jpg";
import Photo3 from "/static/mercedes/3.jpg";
import Photo4 from "/static/mercedes/4.jpg";
import Photo5 from "/static/mercedes/5.jpg";
import Photo6 from "/static/mercedes/6.jpg";
import Photo7 from "/static/mercedes/7.jpg";
import Photo8 from "/static/mercedes/8.jpg";
import Photo9 from "/static/mercedes/9.jpg";
import Photo10 from "/static/mercedes/10.jpeg";
import Photo11 from "/static/mercedes/11.jpeg";

const Mercedes = () => {
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
          <img src={Logo} className="max-w-xs mx-auto" alt="Mercedes logo" />
          <h1 className="text-4xl font-bold">Mercedes-AMG Petronas F1 Team</h1>
        </header>
        <Photo
          src={Photo1}
          alt="W13 from the side"
          caption="W13 from the side."
          source="Mercedes press release"
        />
        <Photo
          src={Photo2}
          alt="W13 from the side"
          caption="W13 from the side."
          source="Mercedes press release"
        />
        <Photo
          src={Photo3}
          alt="Back and the side of W13"
          caption="Back and the side of W13."
          source="Mercedes press release"
        />
        <Photo
          src={Photo4}
          alt="W13"
          caption="W13."
          source="Mercedes press release"
        />
        <Photo
          src={Photo5}
          alt="Front of the W13"
          caption="Front of the W13."
          source="Mercedes press release"
        />
        <Photo
          src={Photo6}
          alt="Front of the W13"
          caption="Front of the W13."
          source="Mercedes press release"
        />
        <Photo
          src={Photo7}
          alt="W13"
          caption="W13"
          source="Mercedes press release"
        />
        <Photo
          src={Photo8}
          alt="Front of the W13"
          caption="Front of the W13"
          source="Mercedes press release"
        />
        <Photo
          src={Photo9}
          alt="W13 from the top"
          caption="W13 from the top."
          source="Mercedes press release"
        />
        <Photo
          src={Photo10}
          alt="W13 on the track"
          caption="W13 on the track."
          source="@MercedesAMGF1 on Twitter"
        />
        <Photo
          src={Photo11}
          alt="W13 on the track"
          caption="W13 on the track."
          source="@MercedesAMGF1 on Twitter"
        />
      </div>
    </main>
  );
};

export default Mercedes;
