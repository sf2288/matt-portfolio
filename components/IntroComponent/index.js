import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";

export default function IntroComponent() {
  const intro = AppConfig?.intro;
  return (
    <Container even>
      <div className="md:bg-secondary-light-500 md:dark:bg-primary-dark-500 bg-container lg:w-30 w-full container-padding lg:text-right container-border-top">
        <LeftContainer
          title={intro?.title}
          subTitle={intro?.subTitle}
          showSubTitle={intro?.showSubTitle}
        />
      </div>
      <div className="lg:w-70 w-full font-normal text-lg container-padding bg-container container-border-top">
        <div className="text-secondary-light-text-300 dark:text-primary-dark-text-300 pb-b-container">
          {intro?.description()}
        </div>
      </div>
    </Container>
  );
}
