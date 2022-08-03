import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { RightContainer } from "../Common/RightContainer";

export default function ExpertiseComponent() {
  const expertise = AppConfig?.expertise;
  return (
    <Container>
      <LeftContainer
        title={expertise?.title}
        subTitle={expertise?.subTitle}
        showSubTitle={expertise?.showSubTitle}
      />

      <RightContainer>
        <div className="flex flex-wrap text-secondary-light-text-300 dark:text-primary-dark-text-300">
          {expertise?.data && expertise?.data.length
            ? expertise?.data.map((item, index) => (
                <div
                  key={index + 1}
                  className="pr-12 lg:pr-0 title-line-height grid grid-flow-col gap-4 md:w-6/12 w-full mb-7 text-secondary-light-text-300 dark:text-primary-dark-text-300"
                >
                  <div className="text-title-size font-bold text-secondary-light-text-orange dark:text-primary-dark-text-orange">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="title-line-height font-bold text-secondary-light-text-500 dark:text-primary-dark-text-500 flex flex-col w-full">
                      <span className="text-title-size">
                        {item?.title} {index + 1}
                      </span>
                    </div>
                    <div className="flex flex-col w-full">
                      <p className=" text-secondary-light-text-300 dark:text-primary-dark-text-300 leading-7">
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
