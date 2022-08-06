import Image from "next/image";
import React from "react";
import { MotionDiv } from "./../../Common/MotionDiv";
import { TldrComponent } from "./TldrComponent";

const DiscriptionComponent = ({ portfolio }) => {
  return (
    <div className="container-medium m-auto text-primary-dark-500">
      <div className="w-full flex flex-col lg:px-20 pb-40">
        <MotionDiv duration={0.5} initialY={0} delay={0.5}>
          <div className="flex flex-col">
            <p className="text-[22px]">{portfolio?.description}</p>
          </div>
        </MotionDiv>
      </div>
      <div className="flex flex-wrap pb-20">
        {portfolio?.images && portfolio?.images.length
          ? portfolio?.images.map((item, index) => {
              return (
                <div
                  key={index + 1}
                  className="mb-8 grid grid-flow-col lg:px-4 pr-0 gap-4 lg:w-6/12 w-full"
                >
                  <MotionDiv duration={1.5 + index + 1} initialY={0} delay={1}>
                    <div className="group relative w-full lg:h-[700px] h-[450px] cursor-pointer">
                      <Image
                        className="object-cover rounded transition absolute duration-1000 ease-out group-hover:scale-105"
                        src={item}
                        alt={item}
                        layout="fill"
                      />
                    </div>
                  </MotionDiv>
                </div>
              );
            })
          : null}
      </div>
      <div className="pb-20">
        <div className="flex flex-col lg:w-70 md:w-75 w-full m-auto">
          <TldrComponent />
        </div>
      </div>
    </div>
  );
};

export default DiscriptionComponent;
