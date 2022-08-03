import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { RightContainer } from "../Common/RightContainer";
import { TimeLineItemComponent } from "../Common/TimeLineItemComponent";

export default function EducationComponent() {
  const education = AppConfig?.education;
  return (
    <Container>
      <LeftContainer
        title={education?.title}
        subTitle={education?.subTitle}
        showSubTitle={education?.showSubTitle}
      />
      <RightContainer className="xl:p-no-t-container md:p-sm-no-t-container p-xs-no-t-container">
        <div className="w-full relative border-l-2 dark:border-primary-border-color border-secondary-border-color pt-no-t-inner-top pl-6 ml-3">
          <TimeLineItemComponent data={education?.data} end />
        </div>
      </RightContainer>
    </Container>
  );
}
