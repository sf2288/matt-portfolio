import { AppConfig } from "../../../utils";

export default function PortfolioDetailsComponent({ name }) {
  return (
    <div className="text-black container m-auto pt-52">
      Portfolio Name:
      <h1 className="text-[40px] font-bold">{name}</h1>
    </div>
  );
}

export const getServerSideProps = ctx => {
  const { path } = ctx?.query;

  const name =
    AppConfig.portfolio.data.find(d => d?.path === path)?.title ||
    "Invalid Portfolio!";

  return { props: { name } };
};
