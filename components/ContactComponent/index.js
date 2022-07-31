import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { ContactDetailsComponent } from "../ContactDetailsComponent";
import NameComponent from "../NameComponent";

export default function ContactComponent() {
  const contact = AppConfig?.contact;
  return (
    <Container even>
      <div className="bg-secondary-light-500 dark:bg-primary-dark-500 w-30 container-padding lg:mb-0 mb-6 flex-shrink-0 text-right">
        <LeftContainer
          title={contact?.title}
          subTitle={contact?.subTitle}
          showSubTitle={contact?.showSubTitle}
        />
      </div>
      <div className="w-70 font-normal text-lg container-padding lg:flex-grow bg-secondary-light-200 dark:bg-primary-dark-300 flex flex-col">
        <div
          className="border-b-2 border-secondary-border-color dark:border-primary-border-color grid grid-flow-col 
                 grid-cols-4 gap-4 pb-16"
        >
          <ContactDetailsComponent />
        </div>
        <div className="flex flex-grow justify-center flex-col mt-[5rem]">
          <NameComponent />
        </div>
      </div>
    </Container>
  );
}
