import QualityServiceItems from "./QualityServiceItems";

const QualityService = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="items-center flex flex-col pb-12">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Our Services</h4>
          </div>
          <h2 className="heading w-[750px] pt-4 pb-7 text-center">
            Best Quality Services
          </h2>
        </div>
        <QualityServiceItems title="Search Engine Optimization" />
        <QualityServiceItems title="Web Design & Development" />
        <QualityServiceItems title="Email and Content Marketing" />
        <QualityServiceItems title="Social Media Network Marketing " />
      </div>
    </section>
  );
};

export default QualityService;
