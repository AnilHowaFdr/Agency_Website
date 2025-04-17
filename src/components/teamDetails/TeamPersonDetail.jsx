import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiHandbagSimpleFill } from "react-icons/pi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const TeamPersonDetail = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="flex items-center gap-36">
          <div className="w-2/5 rounded-2xl bg-white">
            <img className="w-full" src="/user2.png" alt="img" />
          </div>
          <div className="w-3/5">
            <h2 className="font-third font-bold text-4xl pb-2">Md.Akbar Ali</h2>
            <p className="detail pb-16">Senior Manager</p>
            <ul className="flex items-center gap-12">
              <li className="text-2xl text-primary">
                <PiHandbagSimpleFill />
              </li>
              <li>
                <p className="w-32 font-secondary font-medium text-xl text-[#252424]">
                  Experience :
                </p>
              </li>
              <li>
                <p className=" detail">15 years</p>
              </li>
            </ul>
            <ul className="flex items-center gap-12 py-3">
              <li className="text-2xl text-primary">
                <MdEmail />
              </li>
              <li>
                <p className="w-32 font-secondary font-medium text-xl text-[#252424]">
                  E-mail :
                </p>
              </li>
              <li>
                <p className=" detail">icourtnyhenry@example.com</p>
              </li>
            </ul>
            <ul className="flex items-center gap-12 pb-3">
              <li className="text-2xl text-primary">
                <FaPhoneAlt />
              </li>
              <li>
                <p className="w-32 font-secondary font-medium text-xl text-[#252424]">
                  Phone :
                </p>
              </li>
              <li>
                <p className="detail">+1-800-456-478-00</p>
              </li>
            </ul>
            <ul className="flex items-center gap-12">
              <li className="text-2xl text-primary">
                <IoLocationSharp />
              </li>
              <li>
                <p className="w-32 font-secondary font-medium text-xl text-[#252424]">
                  Location :
                </p>
              </li>
              <li>
                <p className="detail">
                  380 St Kilda Road, Melbourne VIC 3004, Australia
                </p>
              </li>
            </ul>
            <div className="flex items-center gap-40 mt-16">
              <p className="font-secondary font-medium text-xl text-[#252424]">
                Follow Me:
              </p>
              <div className=" flex items-center gap-4 justify-center ">
                <div className="w-12 h-12 rounded-full bg-white hover:bg-primary text-primary hover:text-white relative">
                  <TiSocialFacebook className="text-3xl absolute top-2 left-2 " />
                </div>
                <div className="w-12 h-12 rounded-full bg-white hover:bg-primary text-primary hover:text-white relative">
                  <TiSocialTwitter className="text-3xl absolute top-2 left-2 " />
                </div>
                <div className="w-12 h-12 rounded-full bg-white hover:bg-primary text-primary hover:text-white relative">
                  <TiSocialLinkedin className="text-3xl absolute top-2 left-2 " />
                </div>
                <div className="w-12 h-12 rounded-full bg-white hover:bg-primary text-primary hover:text-white relative">
                  <TiSocialYoutube className="text-3xl absolute top-2 left-2 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPersonDetail;
