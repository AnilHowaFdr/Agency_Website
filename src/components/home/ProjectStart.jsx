import Button from "../utilities/Button";
import Input from "../utilities/Input";
import ProjectItems from "./ProjectItems";

const ProjectStart = () => {
  return (
    <section className="py-28">
      <div className="container bg-[url('/project-bg.png')] rounded-3xl bg-no-repeat relative bg-cover">
        <div className="pt-48 pb-20 px-20 flex items-center gap-20 ">
          <div className="w-2/5 bg-slate-600 rounded-xl">
            <video
              controls
              src="/startProject.mp4"
              type="video/mp4"
              className="rounded-xl h-full w-full  "
            />
          </div>
          <div className="w-3/5">
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6" src="/focus.png" alt="focus" />
              <h4 className="heading2 text-white">Our Pricing</h4>
            </div>
            <h2 className="heading text-white w-[700px] pt-4 pb-12">
              Start New Project With Us
            </h2>
            <div className="flex items-center gap-5 pb-5">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
            </div>
            <Input placeholder="Business Topic" />
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="rounded-2xl w-full mt-5 mb-10 px-5 py-4 h-44"
            />
            <Button title="Send Message" />
          </div>
        </div>
        <div className="px-14 py-7 bg-gradient-to-r from-[#fe651b] to-[#ffaa52] border-spacing-3 rounded-xl lg:rounded-full flex flex-col lg:flex-row items-center gap-24 lg:w-3/4 lg:absolute lg:top-0 lg:-translate-y-14 lg:translate-x-48 ">
          <ProjectItems
            src="/projectCount1.png"
            detail="Project Complate"
            count="1500"
          />
          <ProjectItems
            src="/projectCount2.png"
            detail="Satisfied Clients"
            count="8562"
          />
          <ProjectItems
            src="/projectCount3.png"
            detail="Awards Win"
            count="35"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectStart;
