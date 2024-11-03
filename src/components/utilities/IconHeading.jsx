import { IoCheckmarkSharp } from "react-icons/io5";

const IconHeading = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
        <IoCheckmarkSharp className="text-white top-0 left-0" />
      </span>
      <h4 className="heading4 w-56">{title}</h4>
    </div>
  );
};

export default IconHeading;
