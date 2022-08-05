import React from "react";
import DiscriptionComponent from "./DescriptionComponent";
import DetailsHeader from "./DetailsHeader";
import ImageComponent from "./ImageComponent";

const PortfolioDetailsComponent = ({ portfolio }) => {
  return (
    <>
      <DetailsHeader portfolio={portfolio} />
      <div className="bg-white lg:px-10 px-5">
        <ImageComponent portfolio={portfolio} />
        <DiscriptionComponent portfolio={portfolio} />
      </div>
    </>
  );
};

export default PortfolioDetailsComponent;
