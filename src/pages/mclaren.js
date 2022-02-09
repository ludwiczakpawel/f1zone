import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Logo from "/static/logos/mclaren.png";
import { Counter } from "../components/Counter";

const McLaren = () => {
  return (
    <main className="min-h-screen overflow-x-hidden sm:p-10 bg-white dark:bg-black text-slate-700 dark:text-neutral-300 flex items-center place-content-center flex-col">
      <Helmet>
        <title>🏎 Wroom wroom!</title>
      </Helmet>
      <Link
        to="/"
        className="inline-block text-slate-400 hover:text-indigo-600 transition-all"
      >
        &laquo; Go back
      </Link>
      <img src={Logo} className="max-w-xs mx-auto" alt="McLaren logo" />
      <h1 className="text-2xl">McLaren F1 Team</h1>
      <Counter ms={1644534000000} />
    </main>
  );
};

export default McLaren;
