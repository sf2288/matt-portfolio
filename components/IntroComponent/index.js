import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";

export default function IntroComponent() {
  const intro = AppConfig?.intro;
  return (
    <Container even>
      <div className="bg-secondary-light-500 dark:bg-primary-dark-500 w-30 p-container md:mb-0 mb-6 flex-shrink-0 text-right">
        <LeftContainer
          title={intro?.title}
          subTitle={intro?.subTitle}
          showSubTitle={intro?.showSubTitle}
        />
      </div>
      <div className="w-70 font-normal text-lg p-container md:flex-grow bg-secondary-light-200 dark:bg-primary-dark-300">
        <div className="text-secondary-light-text-300 dark:text-primary-dark-text-300 pb-b-container">
          {intro?.description()}
        </div>
      </div>
    </Container>
  );
}
