import { AppConfig } from "../../utils";
import { MotionDiv } from "../Common/MotionDiv";

export const ContactDetailsComponent = () => (
  <>
    <MotionDiv duration={2.2} initialY={0} delay={1.8}>
      <div className="flex flex-col md:text-start text-center md:mb-0 mb-7">
        <span className="text-secondary-light-text-500 dark:text-primary-dark-text-500 font-bold text-sm mb-3">
          Location
        </span>
        <span className="text-sm text-secondary-light-text-500 dark:text-primary-dark-text-500">
          <address className="not-italic">{AppConfig?.location}</address>
        </span>
      </div>
    </MotionDiv>
    <MotionDiv duration={2.3} initialY={0} delay={2.1}>
      <div className="flex flex-col md:text-start text-center md:mb-0 mb-7">
        <span className="text-secondary-light-text-500 dark:text-primary-dark-text-500 font-bold text-sm mb-3">
          Phone
        </span>
        <a
          href={`tel:${AppConfig?.phone}`}
          className="text-sm text-secondary-light-text-500 dark:text-primary-dark-text-500 hover:text-primaryLightOrange"
        >
          <span className="text-sm text-secondary-light-text-500 dark:text-primary-dark-text-500">
            {AppConfig?.phone}
          </span>
        </a>
      </div>
    </MotionDiv>
    <MotionDiv duration={2.4} initialY={0} delay={2.3}>
      <div className="flex flex-col md:text-start text-center md:mb-0 mb-7">
        <span className="text-secondary-light-text-500 dark:text-primary-dark-text-500 font-bold text-sm mb-3">
          Web
        </span>
        <a
          href={AppConfig?.website}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-secondary-light-text-500 dark:text-primary-dark-text-500 hover:text-primaryLightOrange"
        >
          <span>{AppConfig?.website}</span>
        </a>
      </div>
    </MotionDiv>
    <MotionDiv duration={2.5} initialY={0} delay={2.4}>
      <div className="flex flex-col md:text-start text-center md:mb-0 mb-7">
        <span className="text-secondary-light-text-500 dark:text-primary-dark-text-500 font-bold text-sm mb-3">
          Email
        </span>
        <a
          href={`mailto:${AppConfig?.email}`}
          className="text-sm text-secondary-light-text-500 dark:text-primary-dark-text-500 hover:text-primaryLightOrange"
        >
          <span>{AppConfig?.email}</span>
        </a>
      </div>
    </MotionDiv>
  </>
);
