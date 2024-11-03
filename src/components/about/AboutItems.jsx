import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoCheckmarkCircleOutline, IoCheckmarkSharp } from "react-icons/io5";
import Button from "../utilities/Button";

const AboutItems = () => {
  return (
    <section className="py-28">
      <div className="container flex items-center gap-24">
        <div>
          <img src="/aboutImg.png" alt="about" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">About Our Company</h4>
          </div>
          <h2 className="heading w-[750px] pt-4 pb-7">
            Best Digital Marketing Agency For People
          </h2>
          <p className="detail w-[750px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have as suffered alteration in some form, by injected
            humour, or randomised words which don't a look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </p>
          <div className="flex pt-7 pb-2 items-center  gap-16">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                <IoCheckmarkSharp className="text-white top-0 left-0" />
              </span>
              <h4 className="heading4 w-56">Digital Strategy</h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                <IoCheckmarkSharp className="text-white top-0 left-0" />
              </span>
              <h4 className="heading4 w-56">SEO Optimization</h4>
            </div>
          </div>
          <div className="flex pb-12 items-center gap-16">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                <IoCheckmarkSharp className="text-white top-0 left-0" />
              </span>
              <h4 className="heading4 w-56">Marketing</h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                <IoCheckmarkSharp className="text-white top-0 left-0" />
              </span>
              <h4 className="heading4 w-56">First Working Process</h4>
            </div>
          </div>
          <Button title="Read More" />
        </div>
      </div>
    </section>
  );
};

export default AboutItems;
