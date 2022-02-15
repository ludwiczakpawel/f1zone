import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Photo } from "../components/Photo";
import Logo from "/static/logos/williams.png";
import Photo1 from "/static/williams/1.jpeg";
import Photo2 from "/static/williams/2.jpeg";
import Photo3 from "/static/williams/3.jpeg";
import Photo4 from "/static/williams/4.jpeg";
import Photo5 from "/static/williams/5.jpeg";
import Photo6 from "/static/williams/6.jpeg";
import Photo7 from "/static/williams/7.jpeg";
import Photo8 from "/static/williams/8.jpeg";
import Photo9 from "/static/williams/9.jpeg";
import Photo10 from "/static/williams/10.jpeg";
import Photo11 from "/static/williams/11.jpeg";

const Williams = () => {
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
          <img src={Logo} className="max-w-xs mx-auto" alt="Williams logo" />
          <h1 className="text-4xl font-bold">Williams Racing</h1>
        </header>
        <Photo
          src={Photo1}
          alt="Front of the FW44"
          caption="Front of the FW44"
          source="Williams press release"
        />
        <Photo
          src={Photo2}
          alt="Rear wing of the FW44"
          caption="Rear wing of the FW44."
          source="Williams press release"
        />
        <Photo
          src={Photo3}
          alt="FW44"
          caption="FW44."
          source="Williams press release"
        />
        <Photo
          src={Photo4}
          alt="Rear wing of the FW44"
          caption="Rear wing of the FW44."
          source="Williams press release"
        />
        <Photo
          src={Photo5}
          alt="FW44 from the side"
          caption="FW44 from the side"
          source="Williams press release"
        />
        <Photo
          src={Photo6}
          alt="FW4 from the top"
          caption="FW4 from the top"
          source="Williams press release"
        />
        <Photo
          src={Photo7}
          alt="Front wing"
          caption="Front wing"
          source="Williams press release"
        />
        <Photo
          src={Photo8}
          alt="Some details"
          caption="Some details"
          source="Williams press release"
        />
        <Photo
          src={Photo9}
          alt="Front of the FW44"
          caption="Front of the FW44"
          source="Williams press release"
        />
        <Photo
          src={Photo10}
          alt="Actual FW44 on the race track"
          caption="Actual FW44 on the race track"
          source="Williams press release"
        />
        <Photo
          src={Photo11}
          alt="Side of the FW44"
          caption="Side of the FW44"
          source="Williams press release"
        />
      </div>
    </main>
  );
};

export default Williams;
