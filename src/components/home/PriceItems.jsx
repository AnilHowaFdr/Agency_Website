const PriceItems = () => {
  return (
    <div className="bg-[#F4F4FF] w-1/3 rounded-xl py-4 px-6">
      <div className="flex gap-5 justify-between">
        <div>
          <h4 className="text-2xl font-third font-bold pb-4">Basic Plan</h4>
          <div className="flex">
            <span className="text-lg font-medium text-primary font-third">
              $
            </span>
            <h2 className="heading text-primary">
              30{" "}
              <span className="text-black text-lg font-normal">Per Month</span>
            </h2>
          </div>
        </div>
        <div className="bg-primary w-16 h-16 rounded-tr-xl relative z-1">
          <img
            className="absolute z-10 right-1 top-1"
            src="/priceIcon1.png"
            alt="price"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceItems;
