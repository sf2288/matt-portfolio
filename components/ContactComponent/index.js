import { AppConfig } from "../../utils";
import { ContactDetailsComponent } from "../Common/ContactDetailsComponent";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { RightContainer } from "../Common/RightContainer";
import NameComponent from "../NameComponent";

export default function ContactComponent() {
  const contact = AppConfig?.contact;
  return (
    <Container even>
      <LeftContainer
        even
        title={contact?.title}
        subTitle={contact?.subTitle}
        showSubTitle={contact?.showSubTitle}
      />
      <RightContainer even>
        <div className="border-b-2 md:pb-6 pb-0 xl:mb-0 mb-7 border-secondary-border-color dark:border-primary-border-color grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-0">
          <ContactDetailsComponent />
        </div>
        <div className="flex flex-grow justify-center md:justify-between md:flex-row flex-col mt-[5rem] relative w-100">
          <NameComponent footerContactView={true} />
        </div>
      </RightContainer>
    </Container>
  );
}
