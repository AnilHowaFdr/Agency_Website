import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiBarChartFill } from "react-icons/ri";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import MobileRes from "./MobileRes";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("home");
  // const navLinks = (
  //   <ul className=" flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 font-medium text-xl p-4 md:p-0">
  //     <li>
  //       <Link
  //         to="/"
  //         className={`text-[#3661FC] ${active === "home" ? "isActive" : ""} `}
  //       >
  //         Home
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/about"
  //         className={`text-[#3661FC] ${active === "about" ? "isActive" : ""} `}
  //       >
  //         About
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/service"
  //         className={`text-[#3661FC] ${
  //           active === "service" ? "isActive" : ""
  //         } `}
  //       >
  //         Service
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/team"
  //         className={`text-[#3661FC] ${active === "team" ? "isActive" : ""} `}
  //       >
  //         Team
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/blog"
  //         className={`text-[#3661FC] ${active === "blog" ? "isActive" : ""} `}
  //       >
  //         Blog
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/news"
  //         className={`text-[#3661FC] ${active === "news" ? "isActive" : ""} `}
  //       >
  //         News
  //       </Link>
  //     </li>
  //     <li>
  //       <Link
  //         to="/contact"
  //         className={`text-[#3661FC] ${
  //           active === "contact" ? "isActive" : ""
  //         } `}
  //       >
  //         Contact
  //       </Link>
  //     </li>
  //   </ul>
  // );

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex py-3 lg:py-6 items-center gap-8 md:gap-12 justify-between">
          <div className="">
            <Link to="/" className="flex items-center gap-2">
              <img className="w-10" src="/logo.png" alt="image" />
              <span>
                <h3 className="uppercase font-bold text-2xl text-primary">
                  Ortency
                </h3>
                <p className="capitalize font-medium text-base sm:text-lg text-primary">
                  digital Marketing
                </p>
              </span>
            </Link>
          </div>
          {/* Desktop Responsiveness */}
          <div className="hidden lg:block">
            <ul className="transition-all duration-300 flex items-center gap-6 md:gap-3 lg:flex-row font-medium text-base text-white md:text-black">
              <li>
                <Link
                  className={`flex gap-1 items-center  ${
                    active === "/" ? "text-[#FE681E]" : "hover:text-[#FE681E]"
                  }`}
                  to="/"
                >
                  Home
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  className={`flex gap-1 items-center  ${
                    active === "/about"
                      ? "text-[#FE681E]"
                      : "hover:text-[#FE681E]"
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1 items-center hover:text-[#FE681E]"
                  to="/services"
                >
                  Services
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1 items-center hover:text-[#FE681E] "
                  to="/team"
                >
                  Team
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1 items-center hover:text-[#FE681E]"
                  to="/pages"
                >
                  Pages
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1 items-center hover:text-[#FE681E]"
                  to="/news"
                >
                  News
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FE681E]" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex gap-3 md:gap-5 text-xl sm:text-2xl items-center justify-end">
              <li>
                <Link>
                  <VscSearch />
                </Link>
              </li>
              <li>
                <Link>
                  <BsHandbag />
                </Link>
              </li>
              <li>
                <button
                  className="block lg:hidden"
                  onClick={() => setShow(!show)}
                >
                  <RiBarChartFill />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Responsive */}
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
// bg-gradient-to-r from-[#FE651B] to-[#FFAA52]
