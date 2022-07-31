import Image from "next/image";
import Link from "next/link";
import { AppConfig } from "../../utils";
import { Routes } from "../../utils/routes";
import { Container } from "../Common/Container";
import { LeftContainer } from "../Common/LeftContainer";

export default function PortfolioComponent() {
  const portfolio = AppConfig?.portfolio;
  return (
    <Container>
      <div className="bg-secondary-light-300 dark:bg-primary-dark-300 w-30 p-container md:mb-0 mb-6 flex-shrink-0 text-right">
        <LeftContainer
          title={portfolio?.title}
          subTitle={portfolio?.subTitle}
          showSubTitle={portfolio?.showSubTitle}
        />
      </div>
      <div className="w-70 p-container md:flex-grow bg-white dark:bg-primary-dark-200">
        <div className="flex flex-wrap mb-5 text-secondary-light-text-300 dark:text-primary-dark-text-300">
          {portfolio?.data && portfolio?.data.length
            ? portfolio?.data.map((item, index) => {
                const image = item?.thumbnail;
                return (
                  <div
                    key={index + 1}
                    className="mb-5 grid grid-flow-col pr-5 gap-4 w-6/12"
                  >
                    <div className="group relative w-full h-60 cursor-pointer">
                      <Image
                        className="object-cover transition absolute duration-1000 ease-out group-hover:scale-105"
                        src={item?.thumbnail}
                        alt={item?.title}
                        layout="fill"
                      />
                      <Link
                        href={{
                          pathname: Routes?.portfolioDetailsPage,
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
      </div>
    </Container>
  );
}
