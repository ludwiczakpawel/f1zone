import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/ferrari.png";
import Photo1 from "/static/ferrari/1.jpeg";
import Photo2 from "/static/ferrari/2.jpeg";
import Photo3 from "/static/ferrari/3.jpeg";
import Photo4 from "/static/ferrari/4.jpeg";
import Photo5 from "/static/ferrari/5.jpeg";
import Photo6 from "/static/ferrari/6.jpeg";
import Photo7 from "/static/ferrari/7.jpeg";
import Photo8 from "/static/ferrari/8.jpeg";
import Photo9 from "/static/ferrari/9.jpeg";
import Photo10 from "/static/ferrari/10.jpeg";
import Photo11 from "/static/ferrari/11.jpeg";
import Photo12 from "/static/ferrari/12.jpeg";
import Photo13 from "/static/ferrari/13.jpeg";

const Ferrari = () => {
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
          <img src={Logo} className="max-w-xs mx-auto" alt="Ferrari logo" />
          <h1 className="text-4xl font-bold">Scuderia Ferrari</h1>
        </header>
        <Photo
          src={Photo1}
          alt="Front of the F1-75"
          caption="Front of the F1-75"
          source="Ferrari press release"
        />
        <Photo
          src={Photo2}
          alt="Side of the F1-75"
          caption="Side of the F1-75."
          source="Ferrari press release"
        />
        <Photo
          src={Photo3}
          alt="Side of the F1-75"
          caption="Side of the F1-75."
          source="Ferrari press release"
        />
        <Photo
          src={Photo4}
          alt="Front of the F1-75"
          caption="Front of the F1-75."
          source="Ferrari press release"
        />
        <Photo
          src={Photo5}
          alt="F1-75"
          caption="F1-75"
          source="Ferrari press release"
        />
        <Photo
          src={Photo6}
          alt="F1-75 sidepod"
          caption="F1-75 sidepod"
          source="Ferrari press release"
        />
        <Photo
          src={Photo7}
          alt="F1-75 photo from presentation"
          caption="F1-75 photo from presentation"
          source="Ferrari press release"
        />
        <Photo
          src={Photo8}
          alt="F1-75 front wing"
          caption="F1-75 front wing"
          source="Ferrari press release"
        />
        <Photo
          src={Photo9}
          alt="F1-75 on a track"
          caption="F1-75 on a track"
          source="@ScuderiaFerrari on Twitter"
        />
        <Photo
          src={Photo10}
          alt="F1-75 on a track"
          caption="F1-75 on a track"
          source="@SokolimOkiem on Twitter"
        />
        <Photo
          src={Photo11}
          alt="F1-75 on a track"
          caption="F1-75 on a track"
          source="@SokolimOkiem on Twitter"
        />
        <Photo
          src={Photo12}
          alt="F1-75 on a track"
          caption="F1-75 on a track"
          source="@PartsfinderGP on Twitter"
        />
        <Photo
          src={Photo13}
          alt="F1-75 on a track"
          caption="F1-75 on a track"
          source="@PartsfinderGP on Twitter"
        />
      </div>
    </main>
  );
};

export default Ferrari;
