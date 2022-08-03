import { AppConfig } from "../../utils";
import { MotionDiv } from "../Common/MotionDiv";
import { SocialIconsComponent } from "../SocialIconsComponent";

export default function NameComponent({ footerContactView }) {
  return (
    <>
      <h1
        className={`xl:leading-custom leading-line-height-medium xl:text-custom-large text-custom-medium text-secondary-light-text-500 dark:text-primary-dark-text-500 flex ${
          footerContactView ? "md:items-start" : "lg:items-start"
        } items-center flex-col`}
      >
        <MotionDiv duration={1.1} initialY={10} delay={0.8}>
          <span className="font-light">{AppConfig?.first_name}</span>
        </MotionDiv>
        <MotionDiv duration={1.3} initialY={10} delay={1}>
          <span className="uppercase font-bold text-secondary-light-text-orange dark:text-primary-dark-text-orange">
            {AppConfig?.last_name}
          </span>
        </MotionDiv>
      </h1>

      <div
        className={`flex lg:items-start items-center lg:flex-row flex-col justify-between ${
          !footerContactView ? "mt-[1rem]" : ""
        }`}
      >
        {!footerContactView ? (
          <MotionDiv duration={1.5} initialY={10} delay={1.2}>
            <h2 className="xl:text-[1.5rem] text-custom-smallest font-light ml-[4px] mb-0 text-secondary-light-text-300 dark:text-primary-dark-text-300">
              {AppConfig?.subTitle}
            </h2>
          </MotionDiv>
        ) : null}
        <SocialIconsComponent />
      </div>
    </>
  );
}
