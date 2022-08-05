import Image from "next/image";
import React from "react";
import { MotionDiv } from "./../../Common/MotionDiv";

const DiscriptionComponent = ({ portfolio }) => {
  return (
    <div className="container-medium m-auto text-primary-dark-500">
      <div className="w-full flex flex-col lg:px-20 pb-40">
        {/* <p className="text-[32px] mb-6">It’s time to get serious about scale</p>
        <div className="flex flex-col mb-5">
          <p className="text-[20px] leading-normal mb-12">
            UFC Gym is the world leader in MMA-inspired fitness. With locations
            all over the world, they empower people to find their fit through
            unique classes and high-intensity workouts
          </p>
          <p className="text-[20px] leading-normal">
            In the discovery phase, we uncovered a few problems.
          </p>

          <ol className="list-decimal text-[20px] leading-normal p-12 ">
            <li className="list-item">
              Their brand image spoke to the professional fighter and serious
              athlete, but proved to be inaccessible for the average person.
            </li>
            <li className="list-item">
              Their brand image spoke to the professional fighter and serious
              athlete, but proved to be inaccessible for the average person.
            </li>
            <li className="list-item">
              Their brand image spoke to the professional fighter and serious
              athlete, but proved to be inaccessible for the average person.
            </li>
          </ol>
        </div>
        <p className="text-[32px] mb-6">Capturing a new audience</p> */}
        <MotionDiv duration={0.5} initialY={0} delay={0.5}>
          <div className="flex flex-col">
            <p className="text-[22px]">{portfolio?.description}</p>
          </div>
        </MotionDiv>
      </div>
      <div className="flex flex-wrap pb-40 text-secondary-light-text-300 dark:text-primary-dark-text-300">
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
    </div>
  );
};

export default DiscriptionComponent;
