import PortfolioTools from "./PortfolioTools";
import Button from "./../utilities/Button";

const PortfolioItems = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Our Portfolio</h4>
          </div>
          <h2 className="heading w-[750px] text-center pt-4 pb-10">
            Our Impressive Portfolio
          </h2>
        </div>
        <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PortfolioTools src="/portfolio2.png" />
          <PortfolioTools src="/portfolio4.png" />
          <PortfolioTools src="/portfolio3.png" />
          <PortfolioTools src="/portfolio1.png" />
          <PortfolioTools src="/portfolio1.png" />
          <PortfolioTools src="/portfolio2.png" />
          <PortfolioTools src="/portfolio3.png" />
          <PortfolioTools src="/portfolio4.png" />
          <PortfolioTools src="/portfolio2.png" />
          <PortfolioTools src="/portfolio3.png" />
          <PortfolioTools src="/portfolio4.png" />
          <PortfolioTools src="/portfolio1.png" />
        </div>
        <div className="w-full flex items-center justify-center">
          <Button path="/portfolioDetails" title="View More Projects" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioItems;
