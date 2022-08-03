import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { RightContainer } from "../Common/RightContainer";
import { TimeLineItemComponent } from "../Common/TimeLineItemComponent";

export default function ExperienceComponent() {
  const experience = AppConfig?.experience;
  return (
    <Container even>
      <LeftContainer
        even
        title={experience?.title}
        subTitle={experience?.subTitle}
        showSubTitle={experience?.showSubTitle}
      />
      <RightContainer
        even
        className="xl:p-no-b-container md:p-sm-no-b-container p-xs-no-b-container"
      >
        <div className="w-full relative border-l-2 dark:border-primary-border-color border-secondary-border-color pb-no-b-inner-top pl-6 ml-3">
          <TimeLineItemComponent data={experience?.data} />
        </div>
      </RightContainer>
    </Container>
  );
}
