import * as React from "react"
import { Helmet } from "react-helmet";
import Logo from "/static/logos/redbull.png";
import { Counter } from "../components/Counter";

const RedBull = () => {
  return (
    <main className="min-h-screen overflow-x-hidden sm:p-10 bg-white dark:bg-black text-slate-700 dark:text-neutral-300 flex items-center place-content-center flex-col">
      <Helmet>
        <title>🏎 Wroom wroom!</title>
      </Helmet>
      <a
        href="/"
        className="inline-block text-slate-400 hover:text-indigo-600 transition-all"
      >
        &laquo; Go back
      </a>
      <img src={Logo} className="max-w-xs mx-auto" alt="Red Bull logo" />
      <h1 className="text-2xl">Red Bull Racing</h1>
      <Counter ms={1644361200000} />
    </main>
  );
};

export default RedBull;
