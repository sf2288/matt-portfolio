import React from "react";
import styles from "./Styles.module.scss";

export const Container = ({ children, leftClasses, rightClasses, even }) => {
  return (
    <section className={styles.mainContainer}>
      <div
        className={`${
          even
            ? "bg-secondary-light-500 dark:bg-primary-dark-500"
            : "bg-secondary-light-300 dark:bg-primary-dark-300"
        } ${styles.left} lg:block hidden`}
      />
      <div
        className={`${
          even
            ? "bg-secondary-light-200 dark:bg-primary-dark-300"
            : "bg-white dark:bg-primary-dark-200"
        } ${styles.right} lg:block hidden`}
      />

      <section className={`text-gray-600 body-font ${styles.contentContainer}`}>
        <div className="lg:container mx-auto">
          <div className="flex flex-wrap">{children}</div>
        </div>
      </section>
    </section>
  );
};
