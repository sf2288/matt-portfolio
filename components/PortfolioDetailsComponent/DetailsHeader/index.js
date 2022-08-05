import React from "react";
import Link from "next/link";
import { BackIcon } from "../../SVG/BackIcon";

const DetailsHeader = ({ portfolio }) => {
  return (
    <div className="w-full md:py-32 py-20 bg-primary-dark-500">
      <div className="container-medium m-auto xl:px-0 lg:px-10 px-5 flex items-center">
        <Link href="/" passHref>
          <a>
            <BackIcon className="text-white md:h-14 md:w-14 h-10 w-10" />
          </a>
        </Link>
        <h1 className="md:text-[50px] text-[30px] text-white lg:ml-10 ml-5">
          {portfolio?.title}
        </h1>
      </div>
    </div>
  );
};

export default DetailsHeader;
