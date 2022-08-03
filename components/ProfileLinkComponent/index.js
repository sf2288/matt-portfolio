import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { RightContainer } from "../Common/RightContainer";

export default function ProfilLinkComponent() {
  const profileLinks = AppConfig?.profileLinks;
  return (
    <Container even>
      <LeftContainer
        even
        title={profileLinks?.title}
        subTitle={profileLinks?.subTitle}
        showSubTitle={profileLinks?.showSubTitle}
      />
      <RightContainer even>
        <div className="flex flex-wrap text-secondary-light-text-300 dark:text-primary-dark-text-300">
          {profileLinks?.links && profileLinks?.links.length
            ? profileLinks?.links.map((item, index) => (
                <div
                  key={index + 1}
                  className="pr-12 title-line-height grid grid-flow-col gap-4 lg:w-4/12 md:w-6/12 w-full xl:pb-11 pb-7 text-secondary-light-text-300 dark:text-primary-dark-text-300"
                >
                  <div className="text-title-size font-bold text-secondary-light-text-orange dark:text-primary-dark-text-orange">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="title-line-height font-bold dark:text-primary-dark-text-500 flex flex-col w-full">
                      <a
                        href="#"
                        className="text-secondary-light-text-orange dark:text-primary-dark-text-orange dark:hover:text-white transition"
                      >
                        <span className="text-title-size">{item?.title}</span>
                      </a>
                    </div>
                    <div className="flex flex-col w-full">
                      <p className="text-discription-text-size leading-6">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </RightContainer>
    </Container>
  );
}
