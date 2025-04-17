import React from "react";
import WorkItems from "./WorkItems";

const WorkProcess = () => {
  return (
    <section className="py-20 bg-[url('/workBg.png')]">
      <div className="container">
        <div className="items-center flex flex-col pb-12">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Work Prosses</h4>
          </div>
          <h2 className="heading w-[750px] pt-4 pb-7 text-center">
            How We Work!
          </h2>
        </div>
        <div className="flex items-center gap-14">
          <WorkItems title="Business Planning" />
          <WorkItems title="Market research" />
          <WorkItems title="Completely Solution" />
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
