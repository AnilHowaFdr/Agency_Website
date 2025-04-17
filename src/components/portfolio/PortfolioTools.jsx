import { FaPlus } from "react-icons/fa";

const PortfolioTools = ({ src }) => {
  return (
    <div className="w-full p-1 bg-secondary rounded-lg cursor-pointer group overflow-hidden relative">
      <div className="rounded-bl-3xl rounded-br-3xl bg-white ">
        <img src={src} alt="" />
        <div className=" rounded-xl w-full h-full px-5 py-2 flex items-center justify-center gap-10 group scale-0 group-hover:scale-100 absolute top-0 bg-[rgba(137,137,137,0.75)]  ">
          <div>
            <h3 className="heading2">Different Design</h3>
            <p className="detail2">Print, Books</p>
          </div>
          <div className="w-12 relative h-12 rounded-full text-white bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
            <FaPlus className="absolute left-3 top-3 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTools;
