import React from "react";

export const Container = ({ children, even }) => {
  return (
    <section className="relative">
      <div
        className={`${
          even ? "bg-container-left-even" : "bg-container-left-odd"
        } absolute h-full w-50 z-[1] lg:block hidden`}
      />
      <div
        className={`${
          even ? "bg-container-right-even" : "bg-container-right-odd"
        } absolute h-full w-50 z-[1] right-0 lg:block hidden`}
      />

      <section className="text-gray-600 max-w-[1276px] mt-0 mx-auto relative z-10">
        <div className="lg:container mx-auto">
          <div className="flex flex-wrap">{children}</div>
        </div>
      </section>
    </section>
  );
};
