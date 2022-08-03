import { AppConfig } from "../../../utils";
import { ItemsComponent } from "./ItemsComponent";

export const ContactDetailsComponent = () => (
  <>
    <ItemsComponent duration={2.2} initialY={0} delay={1.8} title="Location">
      <span className="text-secondary-light-text-300 dark:text-primary-dark-text-300">
        <address className="not-italic">{AppConfig?.location}</address>
      </span>
    </ItemsComponent>
    <ItemsComponent duration={2.3} initialY={0} delay={2.1} title="Phone">
      <a
        href={`tel:${AppConfig?.phone}`}
        className="text-secondary-light-text-300 dark:text-primary-dark-text-300 hover:text-primaryLightOrange"
      >
        {AppConfig?.phone}
      </a>
    </ItemsComponent>
    <ItemsComponent duration={2.4} initialY={0} delay={2.3} title="Web">
      <a
        href={AppConfig?.website}
        target="_blank"
        rel="noreferrer"
        className="text-secondary-light-text-300 dark:text-primary-dark-text-300 hover:text-primaryLightOrange"
      >
        {AppConfig?.website}
      </a>
    </ItemsComponent>
    <ItemsComponent duration={2.5} initialY={0} delay={2.4} title="Email">
      <a
        href={`mailto:${AppConfig?.email}`}
        className="text-secondary-light-text-300 dark:text-primary-dark-text-300 hover:text-primaryLightOrange"
      >
        <span>{AppConfig?.email}</span>
      </a>
    </ItemsComponent>
  </>
);
