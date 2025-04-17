import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiBarChartFill } from "react-icons/ri";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <nav className=" ">
      <div className="container">
        <div className="flex  top-10 left-36 z-10 bg-white rounded-none w-full lg:rounded-full px-5 py-4 flex-col items-center justify-center gap-8 lg:justify-between lg:flex-row">
          <div className="w-auto lg:w-1/4">
            <Link to="/" className="flex items-center gap-2">
              <img className="w-[66px] h-[66px]" src="/logo.png" alt="image" />
              <span>
                <h3 className="uppercase font-bold text-2xl text-primary">
                  Ortency
                </h3>
                <p className="capitalize font-medium text-lg text-primary">
                  digital Marketing
                </p>
              </span>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <ul
              className={`${
                show ? "-translate-x-0" : "-translate-x-full"
              } transition-all flex flex-col justify-center items-center gap-8 lg:gap-8 lg:flex-row lg:justify-evenly font-medium text-xl absolute text-white w-full md:w-1/2 md:text-black md:static top-28 left-0  bg-[#3661FC] md:bg-white py-4 md:py-0 h-auto`}
            >
              <li>
                <Link
                  className="flex gap-1 items-center hover:text-[#FE681E]"
                  to="/"
                >
                  Home
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>

              <li>
                <Link className=" hover:text-[#FE681E]" to="/About">
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
          <div className="w-full lg:w-1/4">
            <ul className="flex gap-3 md:gap-8 text-2xl items-center justify-end">
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
      </div>
    </nav>
  );
};

export default Navbar;
// bg-gradient-to-r from-[#FE651B] to-[#FFAA52]
