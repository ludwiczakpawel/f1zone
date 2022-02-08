import * as React from "react"
import { Helmet } from "react-helmet";
import Logo from "/static/logos/mclaren.png";
import Countdown from "react-countdown";

const Completionist = () => {
  return (
    <div className="text-center text-2xl font-bold bg-amber-400 text-amber-900 px-6 py-4 shadow-xl shadow-amber-600/30 rounded-xl mt-3">
      🥳 Todaaaay! 🎉
    </div>
  );
};

const renderer = ({ days, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="text-center text-2xl font-bold">
        {days > 0
          ? `Car will be revealed in ${days} ${days > 1 ? "days" : "day"}...`
          : `Car will be revealed in less than a day!`}
      </div>
    );
  }
};

const McLaren = () => {
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
      <img src={Logo} className="max-w-xs mx-auto" alt="McLaren logo" />
      <h1 className="text-2xl">McLaren F1 Team</h1>
      <Countdown date={1644534000000} renderer={renderer} />
    </main>
  );
};

export default McLaren;
