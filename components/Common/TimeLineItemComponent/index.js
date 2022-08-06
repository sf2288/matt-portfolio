import React from "react";

export const TimeLineItemComponent = ({ data, end }) => {
  return data && data?.length
    ? data.map((item, index) => {
        return (
          <div key={index} className="w-full pb-[2.7125rem]">
            <div className="h-[10px] w-[10px] absolute rounded-full -left-[6px] bg-primary-dark-text-orange ring-[6px] ring-white dark:ring-primary-dark-300" />
            {end ? (
              <div className="border-b-2 h-[2px] w-[16px] absolute -left-[9px] bottom-0 dark:border-primary-border-color border-secondary-border-color" />
            ) : null}
            <div className="flex flex-wrap mb-5">
              <div className="title-line-height grid grid-flow-col gap-4 md:w-5/12 w-full text-secondary-light-text-300 dark:text-primary-dark-text-300">
                <div>
                  <p className="text-experience-text-smallest-size font-medium lg:mt-[-7px] mt-[-3px]">
                    {item?.date}
                  </p>
                  <h2 className="mt-2 md:mt-1 text-title-size leading-line-height font-bold text-secondary-light-text-500 dark:text-primary-dark-text-500">
                    {item?.title}
                  </h2>
                  <p className="mt-2 md:mt-1 text-experience-text-smaller-size text-secondary-light-text-500 dark:text-primary-dark-text-500">
                    {item?.designation}
                  </p>
                  <p className="mt-2 md:mt-1 text-experience-text-smallest-size font-medium">
                    {item?.city}
                  </p>
                </div>
              </div>

              <div className="title-line-height grid grid-flow-col gap-4 md:w-7/12 w-full mt-2 md:mt-0 text-secondary-light-text-300 dark:text-primary-dark-text-300  ">
                <p>{item?.description}</p>
              </div>
            </div>
          </div>
        );
      })
    : null;
};
