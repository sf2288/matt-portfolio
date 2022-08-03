import ContactComponent from "../components/ContactComponent";
import ExpertiseComponent from "../components/ExpertiseComponent";
import IntroComponent from "../components/IntroComponent";
import PortfolioComponent from "../components/PortfolioComponent";
import ProfileComponent from "../components/ProfileComponent";
import ProfilLinkComponent from "../components/ProfileLinkComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import EducationComponent from "../components/EducationComponent";
import { Main } from "../templates/Main";
import { AppConfig } from "../utils";
import { Meta } from "./../layout/Meta";

export default function Home() {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig?.first_name} ${AppConfig?.last_name} | ${AppConfig?.subTitle}`}
          description={`${AppConfig?.first_name} ${AppConfig?.last_name} | ${AppConfig?.subTitle}`}
        />
      }
    >
      <ProfileComponent />
      <IntroComponent />
      <ExpertiseComponent />
      <ExperienceComponent />
      <EducationComponent />
      <ProfilLinkComponent />
      <PortfolioComponent />

      <ContactComponent />
    </Main>
  );
}
