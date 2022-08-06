import { AppConfig } from "../../utils";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { LogoIconItemComponent } from "../Common/LogoIconItemComponent";
import { RightContainer } from "../Common/RightContainer";

export default function ClientsComponent() {
  const clients = AppConfig?.clients;
  return (
    <Container even>
      <LeftContainer
        even
        title={clients?.title}
        subTitle={clients?.subTitle}
        showSubTitle={clients?.showSubTitle}
      />

      <RightContainer even>
        <div className="pb-b-container">
          <ul className="list-none m-0 p-0">
            <LogoIconItemComponent data={clients?.data} />
          </ul>
        </div>
      </RightContainer>
    </Container>
  );
}
