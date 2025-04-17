import HumanFigure from "../components/portfolioDetail.jsx/HumanFigure";
import PortfolioDetailItems from "../components/portfolioDetail.jsx/PortfolioDetailItems";
import PageBanner from "../components/utilities/PageBanner";

const PortfolioDetail = () => {
  return (
    <>
      <PageBanner title="Portfolio Details" />
      <PortfolioDetailItems />
      <HumanFigure />
    </>
  );
};
export default PortfolioDetail;
