import { GoTriangleDown } from "react-icons/go";
const ChooseItems = () => {
  return (
    <div>
      <div className="pt-8 pb-3 flex justify-between items-end">
        <p>Software Development</p>
        <p>85%</p>
      </div>
      <div className="bg-[#8fa2e6] h-2 w-full relative  rounded-md">
        <GoTriangleDown className="absolute text-primary bottom-0.5 text-2xl left-[83%]" />
        <span className="w-[85%] h-1 bg-primary absolute top-0.5 block rounded-md"></span>
      </div>
      <div className="pt-8 pb-3 flex justify-between items-end">
        <p>Web Development</p>
        <p>95%</p>
      </div>
      <div className="bg-[#8fa2e6] h-2 w-full relative  rounded-md">
        <GoTriangleDown className="absolute text-primary bottom-0.5 text-2xl left-[93%]" />
        <span className="w-[95%] h-1 bg-primary absolute top-0.5 block rounded-md"></span>
      </div>
      <div className="pt-8 pb-3 flex justify-between items-end">
        <p>UL / UX Design</p>
        <p>80%</p>
      </div>
      <div className="bg-[#8fa2e6] h-2 w-full relative  rounded-md">
        <GoTriangleDown className="absolute text-primary bottom-0.5 text-2xl left-[78%]" />
        <span className="w-4/5 h-1 bg-primary absolute top-0.5 block rounded-md"></span>
      </div>
      <div className="pt-8 pb-3 flex justify-between items-end">
        <p>SEO ptimization</p>
        <p>90%</p>
      </div>
      <div className="bg-[#8fa2e6] h-2 w-full relative  rounded-md">
        <GoTriangleDown className="absolute text-primary bottom-0.5 text-2xl left-[88%]" />
        <span className="w-[90%] h-1 bg-primary absolute top-0.5 block rounded-md"></span>
      </div>
    </div>
  );
};

export default ChooseItems;
