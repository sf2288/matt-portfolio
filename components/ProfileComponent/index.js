import Image from "next/image";
import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { MotionDiv } from "../Common/MotionDiv";
import { ContactDetailsComponent } from "../ContactDetailsComponent";
import NameComponent from "../NameComponent";

export default function IntroComponent() {
  return (
    <Container>
      <div className="secondary-light-300 lg:dark:bg-primary-dark-300 dark:bg-primary-dark-200 lg:w-30 w-full lg:h-screen container-padding lg:mb-0 flex items-center justify-center">
        <MotionDiv duration={1.3} initialY={10}>
          <div className="lg:-mt-[3.3rem] relative lg:w-[236px] lg:h-[236px] md:w-[195px] md:h-[195px]  w-[154px] h-[154px]">
            <Image
              src={AppConfig?.profilePic}
              className="rounded-full"
              alt={`${AppConfig?.first_name} ${AppConfig?.last_name} | ${AppConfig?.subTitle}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </MotionDiv>
      </div>
      <div className="bg-white dark:bg-primary-dark-200 lg:w-70 w-full lg:h-screen container-padding flex justify-center flex-col">
        <div className="flex lg:items-start items-center flex-grow justify-center flex-col lg:mt-[2.4rem] mb-[1.75rem]">
          <NameComponent />
        </div>
        <MotionDiv duration={2} initialY={10} delay={1.7}>
          <div className="border-t-2 border-secondary-border-color dark:border-primary-border-color" />
        </MotionDiv>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-0 pt-7">
          <ContactDetailsComponent />
        </div>
      </div>
    </Container>
  );
}
