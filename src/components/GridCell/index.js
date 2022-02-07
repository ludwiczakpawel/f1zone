import * as React from "react";
import classNames from "classnames/bind";
import PendingIcon from "../../../static/pending.svg";
import TickIcon from "../../../static/tick.svg";
import QuestionIcon from "../../../static/question.svg";
import SVG from "react-inlinesvg";
import Countdown from "react-countdown";

const Completionist = () => {
  return (
    <div className="inline-flex bg-amber-400 text-amber-900 p-2 px-3 shadow-lg shadow-amber-600/40 rounded-lg gap-2">
      🥳 Todaaaay! 🎉
    </div>
  );
};

const renderer = ({ days, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="inline-flex text-sm text-slate-400 dark:text-neutral-500 font-light p-2 px-3 rounded-lg gap-2">
        <SVG src={PendingIcon} width={21} height={21} />
        Reveal in {days} {days > 1 ? "days" : "day"}
      </div>
    );
  }
};


export const GridCell = (props) => {
  const { logo, revealDate, revealed, title, subtitle, className, ...otherProps } = props;

  return (
    <a
      className={classNames(
        "flex relative items-center flex-col place-content-center p-8 group hover:rounded-2xl transition-all hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-slate-700/40 dark:hover:shadow-black/50 dark:hover:bg-neutral-900/75",
        {
          [className]: className,
        }
      )}
      {...otherProps}
    >
      <div className="text-center transition-all group-hover:scale-150 group-hover:opacity-20 group-hover:blur-xl">
        <img src={logo} alt="Logo" className="w-100 h-auto max-w-xs" />
        {revealed ? (
          <div className="inline-flex text-sm text-lime-600 p-2 px-3 rounded-lg gap-2">
            <SVG src={TickIcon} width={21} height={21} />
            Revealed
          </div>
        ) : revealDate ? (
          <Countdown date={revealDate} renderer={renderer} />
        ) : (
          <div className="inline-flex text-sm text-slate-400 dark:text-neutral-500 font-light p-2 px-3 rounded-lg gap-2">
            <SVG src={QuestionIcon} width={21} height={21} />
            Date not announced
          </div>
        )}
      </div>

      <div className="text-center absolute z-10 opacity-0 translate-y-10 transition-all blur-sm group-hover:blur-0 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col gap-2 px-8">
        <h2 className="text-xl">{title}</h2>
        {subtitle ? (
          <p className="opacity:75 dark:opacity-50">{subtitle}</p>
        ) : (
          ""
        )}
      </div>
    </a>
  );
};

export default GridCell;
