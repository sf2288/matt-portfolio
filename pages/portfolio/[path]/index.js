import React from "react";
import PortfolioDetailsComponent from "../../../components/PortfolioDetailsComponent";
import { Meta } from "../../../layout/Meta";
import { Main } from "../../../templates/Main";
import { AppConfig } from "../../../utils";

export default function PortfolioDetailsPage({ portfolio }) {
  return (
    <Main
      meta={
        <Meta
          title={`${portfolio?.title} | ${AppConfig?.first_name} ${AppConfig?.last_name} | ${AppConfig?.subTitle}`}
          description={portfolio?.description}
        />
      }
    >
      <PortfolioDetailsComponent portfolio={portfolio} />
    </Main>
  );
}

export async function getStaticPaths() {
  const apiDataPaths = AppConfig?.portfolio?.data;
  const newPaths = [];
  for (let path of apiDataPaths) {
    newPaths.push({ params: { ...path } });
  }
  return {
    paths: newPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = AppConfig?.portfolio?.data;
  const portfolio =
    data && data?.length ? data.find(d => d?.path === params?.path) : [];
  return {
    props: { portfolio },
  };
}
