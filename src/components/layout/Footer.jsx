import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import FootItems from "../utilities/FootItems";
import { LuDot } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiLineVerticalBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[url('/footerBg.png')] bg-black ">
      <div className="container py-24">
        <div className="flex items-center justify-between pb-16 border-b border-b-[#393939]">
          <div className="w-3/5">
            <p className="text-xl pb-1 text-white font-secondary font-normal">
              For Digital Marketing Agency
            </p>
            <h3 className="heading3 text-white">Join Our Agency Community</h3>
          </div>
          <div className="text-[#B1B1B1] rounded-full bg-white p-2 pl-5 w-2/5 flex items-center justify-between">
            <input type="text" placeholder="Enter your email address" />
            <button className="py-4 px-8 text-white bg-primary rounded-full font-secondary text-lg font-normal">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-[30%] py-28">
            <FootItems title="About Company" />
            <p className="detail py-6">
              There are many variations of passages of Lore Ipsum availab but
              the majority have suffereds alteration in some form, by injected
              humour a randomised words which
            </p>
            <div className="flex items-center gap-5 relative">
              <div className="w-10 h-10 rounded-full bg-secondary relative">
                <TiSocialFacebook className="text-3xl absolute top-1 left-1 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary relative">
                <TiSocialTwitter className="text-3xl absolute top-1 left-1 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary relative">
                <TiSocialLinkedin className="text-3xl absolute top-1 left-1 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary relative">
                <TiSocialYoutube className="text-3xl absolute top-1 left-1 text-primary" />
              </div>
            </div>
          </div>
          <div className="w-1/5 py-28">
            <FootItems title="Featured Services" />
            <div className="pt-6">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <LuDot className="text-primary text-3xl" />
                  <p className="detail hover:text-primary cursor-pointer">
                    Social Media Marketing
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <LuDot className="text-primary text-3xl" />
                  <p className="detail hover:text-primary cursor-pointer">
                    Pay Per Click Management
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <LuDot className="text-primary text-3xl" />
                  <p className="detail hover:text-primary cursor-pointer">
                    Search Engine Optimization
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <LuDot className="text-primary text-3xl" />
                  <p className="detail hover:text-primary cursor-pointer">
                    Free SEO Analysis
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <LuDot className="text-primary text-3xl" />
                  <p className="detail hover:text-primary cursor-pointer">
                    Case Studies
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/5 py-28">
            <FootItems title="Recent Post" />
            <div className="pt-6 flex items-center gap-4">
              <img
                className="w-28 h-20 rounded-lg bg-white"
                src="/user2.png"
                alt=""
              />
              <div>
                <p className="detail pb-1">
                  Thoughtful man using laptop pondering{" "}
                </p>
                <p className="detail">09 Dec 2022</p>
              </div>
            </div>
            <div className="pt-6 flex items-center gap-4">
              <img
                className="w-28 h-20 rounded-lg bg-white"
                src="/user3.png"
                alt=""
              />
              <div>
                <p className="detail pb-1">
                  Thoughtful man using laptop pondering{" "}
                </p>
                <p className="detail">09 Dec 2022</p>
              </div>
            </div>
          </div>
          <div className="w-[30%] py-28">
            <FootItems title="Contact Us" />
            <div className="pt-6">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-5">
                  <FaPhoneAlt className="text-2xl text-primary" />
                  <p className="detail">+(323) 750-1234</p>
                </li>
                <li className="flex items-start gap-5">
                  <MdOutlineMail className="text-2xl text-primary" />
                  <p className="detail">infoyourortencey@gmail.com</p>
                </li>
                <li className="flex items-start gap-5">
                  <IoLocationSharp className="text-3xl text-primary" />
                  <p className="detail w-52">
                    374 FA Tower, William S Blvd, Melbourne 2721, IL, USA
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-primary mb-20">
        <div className=" container py-5 flex items-center justify-between">
          <p className="font-secondary font-normal text-base text-white">
            2022 © All rights reserved by devsnest-llc
          </p>
          <div className="flex items-center gap-6">
            <p className="font-secondary font-normal text-base text-white">
              Privacy & Policy
            </p>
            <PiLineVerticalBold className="text-2xl text-white" />
            <p className="font-secondary font-normal text-base text-white">
              Terms & Conditions
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
