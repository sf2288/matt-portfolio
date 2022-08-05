import Image from "next/image";
import React from "react";
import { MotionDiv } from "../../Common/MotionDiv";

const ImageComponent = ({ portfolio }) => {
  return (
    <MotionDiv duration={0.3} initialY={0} delay={0}>
      <div className="py-20 container-medium lg:px-0 m-auto">
        <div className="lg:h-[550px] md:h-[500px] h-[300px] relative">
          <Image
            alt={portfolio?.title}
            src={portfolio?.thumbnail}
            className="rounded absolute"
            layout="fill"
          />
        </div>
      </div>
    </MotionDiv>
  );
};

export default ImageComponent;
