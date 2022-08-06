import React from "react";

export const LeftContainer = ({ title, subTitle, showSubTitle, even }) => {
  return (
    <div
      className={`lg:w-30 w-full container-padding lg:text-right container-border-top ${
        even
          ? "dark:bg-md-primary lg:dark:bg-primary-dark-500 lg:bg-secondary-light-500 bg-md-secondary lg:dark:md-primary"
          : "dark:bg-md-primary lg:dark:bg-primary-dark-300 lg:bg-secondary-light-200 bg-md-secondary lg:dark:md-primary"
      } `}
    >
      <div className="relative flex flex-col">
        <h2 className="uppercase text-title-size mb-2 leading-line-height font-bold text-secondary-light-text-300 dark:text-primary-dark-text-300">
          {title}
        </h2>
        {showSubTitle ? (
          <span className="text-secondary-light-text-300 dark:text-primary-dark-text-300">
            {subTitle}
          </span>
        ) : null}
      </div>
    </div>
  );
};
