import React from "react";

export const LeftContainer = ({ title, subTitle, showSubTitle }) => {
  return (
    <div className="relative flex flex-col">
      <h2 className="text-title-size mb-2 leading-line-height font-bold text-secondary-light-text-300 dark:text-primary-dark-text-300">
        {title}
      </h2>
      {showSubTitle ? (
        <span className="text-sm text-secondary-light-text-300 dark:text-primary-dark-text-300">
          {subTitle}
        </span>
      ) : null}
    </div>
  );
};
