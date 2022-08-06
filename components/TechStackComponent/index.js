import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { LogoIconItemComponent } from "../Common/LogoIconItemComponent";
import { RightContainer } from "../Common/RightContainer";

export default function TechStackComponent() {
  const techStack = AppConfig?.techStack;
  return (
    <Container>
      <LeftContainer
        title={techStack?.title}
        subTitle={techStack?.subTitle}
        showSubTitle={techStack?.showSubTitle}
      />

      <RightContainer>
        <div className="pb-b-container">
          <ul className="list-none m-0 p-0">
            <LogoIconItemComponent data={techStack?.data} />
          </ul>
        </div>
      </RightContainer>
    </Container>
  );
}
