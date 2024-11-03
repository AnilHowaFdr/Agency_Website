import { GoTriangleDown } from "react-icons/go";

const Choose = () => {
  return (
    <section className="bg-[#F4F4FF] py-32">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-2/5">
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6" src="/focus.png" alt="focus" />
              <h4 className="heading2 text-primary">Why Choose Ortencey</h4>
            </div>
            <h2 className="heading w-[700px] pt-4 pb-7">
              Reason For Choosing Our Digital Agency
            </h2>
            <p className="detail w-[650px] ">
              There are many variations of passages of Lorem Ipsum available,
              but the majori suffered alteration in some form, by injected
              humour, or randomised word whic look even sligh believable. If you
              are going to use.
            </p>
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
          </div>
          <div className="w-1/2">
            <img className="w-full" src="/choose.png" alt="choose" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
