import { Link } from "react-router-dom";

const QualityServiceItems = ({ title }) => {
  return (
    <div className="p-4 mb-5 bg-secondary flex items-center gap-14 rounded-3xl">
      <div className="w-1/5 rounded-xl border">
        <img className="w-full" src="/aboutImg.png" alt="img" />
      </div>
      <div className="w-3/5">
        <h3 className="heading3 pb-5">{title}</h3>
        <p className="detail w-[750px]">
          There are many variations of passages of Lorem Ipsusm available, but
          the majority our as have suffered alteration in some form, by injected
          humour, or randomised word which don't worry a look even sligh
          believable. If you are going to use a passage.
        </p>
      </div>
      <button className="w-2/12 px-8 py-4 border rounded-full font-secondary text-lg font-normal hover:text-white border-[#FFAA52] hover:border-none hover:bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
        <Link to="/serviceDetail">Read More</Link>
      </button>
    </div>
  );
};

export default QualityServiceItems;
