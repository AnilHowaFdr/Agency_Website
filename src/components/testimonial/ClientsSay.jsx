import { TiMinus } from "react-icons/ti";
import TestimonialItems from "../home/TestimonialItems";
import { FaMinus } from "react-icons/fa";

const ClientsSay = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Testimonial</h4>
          </div>
          <h2 className="heading w-[750px] text-center pt-4 pb-10">
            What Our Client Say
          </h2>
        </div>
        <div className="flex items-start gap-5 pb-8">
          <TestimonialItems src="/user2.png" />
          <TestimonialItems src="/user5.png" />
        </div>
        <div className="flex justify-center  items-center gap-1 ">
          <TiMinus className="text-3xl" />
          <TiMinus className="text-3xl" />
          <TiMinus className="text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSay;
