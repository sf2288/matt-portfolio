import { AppConfig } from "../../utils";
import { MotionDiv } from "../Common/MotionDiv";
import { FacebookIcon } from "../SVG/FacebookIcon";
import { GithubIcon } from "../SVG/GithubIcon";
import { LinkedInIcon } from "../SVG/LinkedInIcon";
import { TwitterIcon } from "../SVG/TwitterIcon";

export const SocialIconsComponent = () => {
  const social = AppConfig?.social;
  return (
    <div className="flex items-center lg:mt-0 mt-7">
      {social?.github?.enabled ? (
        <IconsWrapperComponent
          href={social?.github?.url}
          ariaLabel={social?.github?.ariaLabel}
          icon={GithubIcon}
          duration={1.5}
          delay={1.2}
        />
      ) : null}
      {social?.twitter?.enabled ? (
        <IconsWrapperComponent
          href={social?.twitter?.url}
          ariaLabel={social?.twitter?.ariaLabel}
          icon={TwitterIcon}
          duration={1.7}
          delay={1.4}
        />
      ) : null}
      {social?.linkedIn?.enabled ? (
        <IconsWrapperComponent
          href={social?.linkedIn?.url}
          ariaLabel={social?.linkedIn?.ariaLabel}
          icon={LinkedInIcon}
          duration={1.8}
          delay={1.5}
        />
      ) : null}
      {social?.facebook?.enabled ? (
        <IconsWrapperComponent
          href={social?.facebook?.url}
          ariaLabel={social?.facebook?.ariaLabel}
          icon={FacebookIcon}
          duration={1.9}
          delay={1.6}
        />
      ) : null}
    </div>
  );
};

const IconsWrapperComponent = ({ href, ariaLabel, icon, duration, delay }) => {
  const Icon = icon;
  return (
    <MotionDiv duration={duration} initialY={10} delay={delay}>
      <div className="flex items-center">
        <a
          href={href}
          aria-label={ariaLabel}
          target="_blank"
          rel="noreferrer"
          className="p-[7px] ml-[6px] rounded border-2 transition delay-100
      border-secondary-light-icon-bg bg-secondary-light-icon-bg text-secondary-light-icon 
      dark:border-primary-dark-icon-bg dark:bg-primary-dark-icon-bg dark:text-primary-dark-icon 
      hover:text-secondary-light-icon-hover
      hover:dark:text-primary-dark-text-orange hover:bg-transparent hover:dark:bg-transparent"
        >
          <Icon className="w-5 h-5" />
        </a>
      </div>
    </MotionDiv>
  );
};
