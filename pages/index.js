import ClientsComponent from "../components/ClientsComponent";
import ContactComponent from "../components/ContactComponent";
import EducationComponent from "../components/EducationComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ExpertiseComponent from "../components/ExpertiseComponent";
import IntroComponent from "../components/IntroComponent";
import PortfolioComponent from "../components/PortfolioComponent";
import ProfileComponent from "../components/ProfileComponent";
import ProfilLinkComponent from "../components/ProfileLinkComponent";
import TechStackComponent from "../components/TechStackComponent";
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
      <ClientsComponent />
      <TechStackComponent />
      <ContactComponent />
    </Main>
  );
}
