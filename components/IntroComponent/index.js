import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { RightContainer } from "../Common/RightContainer";

export default function IntroComponent() {
  const intro = AppConfig?.intro;
  return (
    <Container even>
      <LeftContainer
        even
        title={intro?.title}
        subTitle={intro?.subTitle}
        showSubTitle={intro?.showSubTitle}
      />

      <RightContainer even>
        <div className="text-secondary-light-text-300 md:text-[1.22rem] text-[1.1rem] dark:text-primary-dark-text-300 pb-b-container">
          {intro?.description()}
        </div>
      </RightContainer>
    </Container>
  );
}
