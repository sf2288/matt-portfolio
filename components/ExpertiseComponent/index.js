import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";

export default function ExpertiseComponent() {
  const expertise = AppConfig?.expertise;
  return (
    <Container>
      <div className="bg-secondary-light-300 dark:bg-primary-dark-300 w-30 p-container md:mb-0 mb-6 flex-shrink-0 text-right">
        <LeftContainer
          title={expertise?.title}
          subTitle={expertise?.subTitle}
          showSubTitle={expertise?.showSubTitle}
        />
      </div>
      <div className="w-70 font-normal text-lg p-container  md:flex-grow bg-white dark:bg-primary-dark-200 flex flex-col">
        <div className="grid grid-flow-col gap-4 w-full ">
          <div className="inline-grid gap-4 w-full">
            <div className="flex flex-wrap mb-5 text-secondary-light-text-300 dark:text-primary-dark-text-300">
              {expertise?.data && expertise?.data.length
                ? expertise?.data.map((item, index) => (
                    <div
                      key={index + 1}
                      className="pr-12 title-line-height grid grid-flow-col gap-4 w-6/12 mb-5 text-secondary-light-text-300 dark:text-primary-dark-text-300  "
                    >
                      <div className="font-bold text-secondary-light-text-orange dark:text-primary-dark-text-orange">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="title-line-height font-bold text-secondary-light-text-500 dark:text-primary-dark-text-500 flex flex-col w-full">
                          <span className="text-title-size">
                            {item?.title} {index + 1}
                          </span>
                        </div>
                        <div className="flex flex-col w-full">
                          <p className="text-discription-text-size text-secondary-light-text-300 dark:text-primary-dark-text-300 leading-6">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
