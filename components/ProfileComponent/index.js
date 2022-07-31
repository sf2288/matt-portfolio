import Image from "next/image";
import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { MotionDiv } from "../Common/MotionDiv";
import { ContactDetailsComponent } from "../ContactDetailsComponent";
import NameComponent from "../NameComponent";

export default function IntroComponent() {
  return (
    <Container>
      <div className="secondary-light-300 dark:bg-primary-dark-300 w-30 h-screen md:mb-0 mb-6 flex-shrink-0 flex items-center justify-center">
        {/* <div className="secondary-light-300 dark:bg-primary-dark-300 w-30 p-container h-screen md:mb-0 mb-6 flex-shrink-0 flex items-center justify-center"> */}
        <MotionDiv duration={1.3} initialY={10}>
          <div className="-mt-[3.3rem] relative">
            <Image
              src={AppConfig?.profilePic}
              className="rounded-full w-full h-auto"
              alt={`${AppConfig?.first_name} ${AppConfig?.last_name} | ${AppConfig?.subTitle}`}
              width={236}
              height={236}
              layout="fixed"
            />
          </div>
        </MotionDiv>
      </div>
      <div className="bg-white dark:bg-primary-dark-200 w-70 p-container h-screen md:flex-grow flex justify-center flex-col">
        <div className="flex flex-grow justify-center flex-col mt-[2.4rem] mb-[1.75rem]">
          <NameComponent />
        </div>
        <MotionDiv duration={2} initialY={10} delay={1.7}>
          <div className="border-t-2 border-secondary-border-color dark:border-primary-border-color" />
        </MotionDiv>
        <div className="grid grid-flow-col grid-cols-4 gap-4 pt-7 mb-9">
          <ContactDetailsComponent />
        </div>
      </div>
    </Container>
  );
}
