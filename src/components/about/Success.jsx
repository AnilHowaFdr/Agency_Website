import { IoCheckmarkSharp } from "react-icons/io5";
import Button from "../utilities/Button";
import IconHeading from "../utilities/IconHeading";
import Button2 from "../utilities/Button2";

const Success = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center gap-24">
        <div>
          <img src="/aboutImg.png" alt="about" />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Reason of Our Success</h4>
          </div>
          <h2 className="heading w-[750px] pt-4 pb-7">
            Quality & Experience Best Digital Agency
          </h2>
          <div className="flex items-center gap-8 pb-5">
            <Button2 title="Our Mission" />
            <Button2 title="Our Vision" />
            <Button2 title="Our History" />
          </div>
          <p className="detail w-[750px] pb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have as suffered alteration in some form, by injected
            humour, or randomised words which don't a look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </p>
          <div className="flex items-center gap-8">
            <img src="/map.png" alt="map" />
            <ul className="flex flex-col items-start gap-3">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                  <IoCheckmarkSharp className="text-white top-0 left-0" />
                </span>
                <h4 className="heading4">Financial Growth System</h4>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                  <IoCheckmarkSharp className="text-white top-0 left-0" />
                </span>
                <h4 className="heading4">Customer Oriented Program Daily</h4>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                  <IoCheckmarkSharp className="text-white top-0 left-0" />
                </span>
                <h4 className="heading4 ">Dedicated Team member</h4>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 relative rounded-full bg-gradient-to-r from-[#fe651b] to-[#ffaa52]">
                  <IoCheckmarkSharp className="text-white top-0 left-0" />
                </span>
                <h4 className="heading4 ">Product ux Design & Developments</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
