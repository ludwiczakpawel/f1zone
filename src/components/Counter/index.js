import * as React from "react";
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

export const Counter = ({ms}) => {
  return <Countdown date={ms} renderer={renderer} />;
};

export default Counter;
