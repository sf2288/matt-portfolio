import Image from "next/image";
import Link from "next/link";
import { AppConfig } from "../../utils";
import { AppRoutes } from "../../utils/routes";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";
import { RightContainer } from "../Common/RightContainer";

export default function PortfolioComponent() {
  const portfolio = AppConfig?.portfolio;
  return (
    <Container>
      <LeftContainer
        title={portfolio?.title}
        subTitle={portfolio?.subTitle}
        showSubTitle={portfolio?.showSubTitle}
      />
      <RightContainer>
        <div className="flex flex-wrap mb-5 text-secondary-light-text-300 dark:text-primary-dark-text-300">
          {portfolio?.data && portfolio?.data.length
            ? portfolio?.data.map((item, index) => {
                return (
                  <div
                    key={index + 1}
                    className="mb-6 grid grid-flow-col sm:pr-6 pr-0 gap-4 sm:w-6/12 w-full"
                  >
                    <div className="group relative w-full md:h-64 h-72 cursor-pointer">
                      <Image
                        className="object-cover transition absolute duration-1000 ease-out group-hover:scale-105"
                        src={item?.thumbnail}
                        alt={item?.title}
                        layout="fill"
                      />
                      <Link
                        href={{
                          pathname: AppRoutes?.portfolioDetailsPage,
                          query: { path: item?.path },
                        }}
                        passHref
                      >
                        <a className="absolute inset-0 top-0 p-5 left-0 w-full h-full flex flex-col opacity-0 group-hover:h-full group-hover:opacity-60 duration-300 text-primary-dark-500 dark:text-white ease-out hover:bg-white dark:group-hover:bg-primary-dark-200">
                          <h3 className="font-medium text-[1.2rem]">
                            {item?.title}
                          </h3>
                          <div
                            className="transition transform ease-in-out  border-2 group-hover:border-primary-dark-200 dark:group-hover:border-secondary-light-500 
                          w-0 group-hover:w-16 my-3"
                          />
                          <p className="text-sm">{item?.description}</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </RightContainer>
    </Container>
  );
}
