import Servicedetail from "./Servicedetail";

const ServiceItems = () => {
  return (
    <section className="py-28 bg-[#F4F4FF]">
      <div className="container flex items-center gap-5">
        <Servicedetail src="/serviceOne.png" title="Graphics Design" />
        <Servicedetail src="/serviceTwo.png" title="Web Developer" />
        <Servicedetail src="/serviceThree.png" title="Digital Marketing" />
        <Servicedetail src="/serviceFour.png" title="App Design" />
      </div>
    </section>
  );
};

export default ServiceItems;
