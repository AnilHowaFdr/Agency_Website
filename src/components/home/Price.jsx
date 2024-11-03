import PriceItems from "./PriceItems";

const Price = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Our Pricing</h4>
          </div>
          <h2 className="heading w-[700px] pt-4 pb-12 text-center">
            Our Best Pricing Plan
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <PriceItems title="Basic Plan" price="30" src="priceIcon1.png" />
          <PriceItems title="Gold Plan" price="60" src="priceIcon2.png" />
          <PriceItems title="Silver Plan" price="99" src="priceIcon3.png" />
        </div>
      </div>
    </section>
  );
};

export default Price;
