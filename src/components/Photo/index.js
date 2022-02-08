import * as React from "react";

export const Photo = (props) => {
  const { src, alt, caption, source } = props;

  return (
    <figure className="flex gap-6 sm:gap-10 flex-col sm:flex-row group">
      <div className="basis-2/3 relative">
        <img
          src={src}
          alt={alt}
          className="sm:rounded-3xl w-full group-hover:scale-105 transition-all z-10 relative"
        />
        <img
          src={src}
          alt=""
          className="sm:rounded-3xl w-full transition-all blur-md opacity-0 group-hover:translate-y-10 group-hover:opacity-50 absolute top-0 group-hover:blur-xl"
        />
      </div>
      <aside className="basis-1/3 px-6 sm:px-0 pb-6 sm:self-end group-hover:translate-x-2 transition-all">
        <figcaption>{caption}</figcaption>
        <ul className="text-sm opacity-75">
          <li>Source: {source}</li>
        </ul>
      </aside>
    </figure>
  );
};

export default Photo;
