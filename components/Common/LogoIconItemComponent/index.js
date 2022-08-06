import React from "react";

export const LogoIconItemComponent = ({ data }) => {
  return data && data?.length
    ? data.map(item => {
        return (
          <li key={item?.title} className="float-left mr-10 mb-6">
            <a
              href={item?.url}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 transition-all ease-linear duration-[.15s] delay-[0s]"
            >
              <img
                src={item?.image}
                alt={item?.title}
                className="max-w-full sm:h-[50px] h-[30px]"
                loading="lazy"
              />
            </a>
          </li>
        );
      })
    : null;
};
