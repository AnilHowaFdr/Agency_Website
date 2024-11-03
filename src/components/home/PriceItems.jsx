import { IoCheckmarkSharp } from "react-icons/io5";
import IconHeading from "../utilities/IconHeading";

const PriceItems = ({ title, price, src }) => {
  return (
    <div className="bg-[#F4F4FF] w-1/3 rounded-3xl py-4 px-6">
      <div className="flex gap-5 justify-between border-b border-b-slate-300">
        <div>
          <h4 className="text-2xl font-third font-bold pb-4">{title}</h4>
          <div className="flex">
            <span className="text-lg font-medium text-primary font-third">
              $
            </span>
            <h2 className="heading text-primary">
              {price}
              <span className="text-black text-lg font-normal">Per Month</span>
            </h2>
          </div>
        </div>
        <div className="bg-primary w-16 h-16 rounded-tr-xl relative z-1">
          <img className="absolute z-10 right-1 top-1" src={src} alt="price" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 py-9">
        <IconHeading title="Free Consultations" />
        <IconHeading title="Business Planning" />
        <IconHeading title="Investment Process" />
        <IconHeading title="Market Research" />
        <IconHeading title="Online Support" />
        <IconHeading title="Unlimited Updates" />
      </div>
      <button className="mb-5 font-medium font-secondary text-lg hover:text-white hover:border-none hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52] py-4 w-full px-9 rounded-full border border-primary">
        Choose Plan
      </button>
    </div>
  );
};

export default PriceItems;
