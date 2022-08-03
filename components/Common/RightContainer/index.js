import React from "react";

export const RightContainer = ({
  even,
  children,
  className = "container-padding",
}) => {
  return (
    <div
      className={`lg:w-70 w-full font-normal container-border-top ${className} ${
        even
          ? "dark:bg-primary-dark-200 lg:dark:bg-primary-dark-300 lg:bg-secondary-light-200 bg-white"
          : "dark:bg-primary-dark-200 lg:dark:bg-primary-dark-200 lg:bg-white"
      }`}
    >
      {children}
    </div>
  );
};
