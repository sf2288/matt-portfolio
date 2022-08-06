import Link from "next/link";
import React from "react";
import { AppRoutes } from "../../../utils/routes";
import { BackIcon } from "../../SVG/BackIcon";

const DetailsHeader = ({ portfolio }) => {
  return (
    <div className="w-full lg:py-40 pt-10 pb-20 relative">
      <img
        className="bg-no-repeat bg-cover absolute top-0 left-0 w-full h-full opacity-40"
        style={{
          backgroundImage: `url('${portfolio?.thumbnail}')`,
          backgroundPosition: "50%",
          zIndex: "-1",
        }}
      />
      <div className="container-medium m-auto xl:px-0 lg:px-10 px-5 flex lg:flex-row flex-col">
        <Link href={AppRoutes?.home} passHref>
          <a>
            <BackIcon className="dark:text-white text-primary-dark-500 md:h-14 md:w-14 h-10 w-10" />
          </a>
        </Link>
        <div className="flex flex-col lg:mt-0 mt-5">
          <h1 className="text-[30px] dark:text-white text-primary-dark-500 lg:ml-10 ml-0 mb-5">
            {portfolio?.title}
          </h1>
          <h2 className="md:text-[42px] text-[25px] dark:text-white text-primary-dark-500 lg:ml-10 ml-0 leading-snug">
            {portfolio?.subTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
