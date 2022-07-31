import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";

export default function ProfilLinkComponent() {
  const profileLinks = AppConfig?.profileLinks;
  return (
    <Container even>
      <div className="bg-secondary-light-500 dark:bg-primary-dark-500 w-30 p-container md:mb-0 mb-6 flex-shrink-0 text-right">
        <LeftContainer
          title={profileLinks?.title}
          subTitle={profileLinks?.subTitle}
          showSubTitle={profileLinks?.showSubTitle}
        />
      </div>
      <div className="w-70 font-normal text-lg p-container md:flex-grow bg-secondary-light-200 dark:bg-primary-dark-300">
        <div className="flex flex-wrap text-secondary-light-text-300 dark:text-primary-dark-text-300 pb-b-container">
          {profileLinks?.links && profileLinks?.links.length
            ? profileLinks?.links.map((item, index) => (
                <div
                  key={index + 1}
                  className="pr-12 title-line-height grid grid-flow-col gap-4 w-6/12 mb-10 text-secondary-light-text-300 dark:text-primary-dark-text-300  "
                >
                  <div className="text-title-size font-bold text-secondary-light-text-orange dark:text-primary-dark-text-orange">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="title-line-height font-bold dark:text-primary-dark-text-500 flex flex-col w-full">
                      <a
                        href="#"
                        className=" text-secondary-light-text-orange dark:text-primary-dark-text-orange dark:hover:text-white transition"
                      >
                        <span className="text-title-size">{item?.title}</span>
                      </a>
                    </div>
                    <div className="flex flex-col w-full">
                      <p className="text-discription-text-size leading-6">
                        Cras ornare tristique elit lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit. Phasellus hendrerit.
                        Pellentesque aliquet nibh nec urna. In nisi neque,
                        aliquet vel, dapibus id.
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </Container>
  );
}
