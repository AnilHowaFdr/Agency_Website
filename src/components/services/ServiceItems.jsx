import Button from "../utilities/Button";
import Servicedetail from "./Servicedetail";

const ServiceItems = () => {
  return (
    <section className="py-28 bg-[#F4F4FF]">
      <div className="container">
        <div className="flex items-center gap-5 pb-10">
          <Servicedetail src="/serviceOne.png" title="Graphics Design" />
          <Servicedetail src="/serviceTwo.png" title="Web Developer" />
          <Servicedetail src="/serviceThree.png" title="Digital Marketing" />
          <Servicedetail src="/serviceFour.png" title="App Design" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <Button path="/serviceDetail" title="View More" />
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
