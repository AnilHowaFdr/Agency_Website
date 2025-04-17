import { LuDot } from "react-icons/lu";
import ChooseItems from "../home/ChooseItems";

const Career = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center gap-36">
          <div className="w-1/2">
            <h2 className="heading pb-5">Career Guidelines</h2>
            <p className="detail">
              As a web developer, you could work for a company or agency, or as
              a freelancer on projects for individual clients. Your tasks will
              vary depending on your work sit but day-to-day responsibilities
              might generally include.
            </p>
            <ul className="pt-5 flex flex-col gap-4">
              <li className="flex gap-2 items-center">
                <LuDot className="text-2xl" />
                <p className="detail2">
                  Designing user interfaces and navigation menus
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <LuDot className="text-2xl" />
                <p className="detail2">
                  Writing and reviewing code for sites, typically HTML, XM
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <LuDot className="text-2xl" />
                <p className="detail2">
                  Troubleshooting problem with performance or user experience
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <LuDot className="text-2xl" />
                <p className="detail2">
                  Integrating multimedia content onto a site
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <LuDot className="text-2xl" />
                <p className="detail2">
                  Collaborating with designers, developers, and stakeholders
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <LuDot className="text-2xl" />
                <p className="detail2">Testing web applications</p>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <img className="w-full" src="/blog1.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
