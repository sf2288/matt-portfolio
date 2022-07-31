import { AppConfig } from "../../utils";
import { MotionDiv } from "../Common/MotionDiv";
import { SocialIconsComponent } from "../SocialIconsComponent";

export default function NameComponent({ showSubTitle = true }) {
  return (
    <>
      <h1 className="lg:leading-custom leading-line-height-medium lg:text-custom-large text-custom-medium text-secondary-light-text-500 dark:text-primary-dark-text-500 flex lg:items-start items-center flex-col">
        <MotionDiv duration={1.1} initialY={10} delay={0.8}>
          <span className="font-light">{AppConfig?.first_name}</span>
        </MotionDiv>
        <MotionDiv duration={1.3} initialY={10} delay={1}>
          <span className="uppercase font-bold text-secondary-light-text-orange dark:text-primary-dark-text-orange">
            {AppConfig?.last_name}
          </span>
        </MotionDiv>
      </h1>

      <div className="flex lg:items-start items-center lg:flex-row flex-col justify-between mt-[1rem] w-full">
        {showSubTitle ? (
          <MotionDiv duration={1.5} initialY={10} delay={1.2}>
            <h2 className="lg:text-[1.3rem] text-custom-smallest font-light ml-[4px] mb-0 text-secondary-light-text-300 dark:text-primary-dark-text-300">
              {AppConfig?.subTitle}
            </h2>
          </MotionDiv>
        ) : null}
        <SocialIconsComponent />
      </div>
    </>
  );
}
