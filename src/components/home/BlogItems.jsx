import { AiOutlineMessage } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const BlogItems = ({ src, detail }) => {
  return (
    <div className="rounded-3xl w-full md:w-1/3 px-3 py-5 bg-secondary">
      <div className="rounded-3xl relative ">
        <img className="w-full" src={src} alt="img" />
        <div className="p-3 bg-primary w-24 rounded-full text-white font-medium absolute left-0 bottom-0 z-10 font-secondary text-lg text-center ">
          <p>09 Dec 2022</p>
        </div>
        <div className="bg-blue-400 p-3 w-1/2 bottom-0 text-right rounded-full absolute left-2 z-1">
          <p className="text-white font-normal font-secondary text-base ">
            Digital Agency
          </p>
        </div>
      </div>
      <div>
        <ul className="flex items-start gap-6 pt-4 pb-8">
          <li className="flex gap-1 items-center">
            <span className="text-xl">
              <CiUser />
            </span>
            <p className="detail">by Admin</p>
          </li>
          <li className="flex gap-1 items-center">
            <span className="text-xl">
              <AiOutlineMessage />
            </span>
            <p className="detail">25</p>
          </li>
          <li className="flex gap-1 items-center">
            <span className="text-xl">
              <IoEyeOutline />
            </span>
            <p className="detail">120 Views</p>
          </li>
        </ul>
        <h3 className="heading3 hover:text-primary w-96">{detail}</h3>
      </div>
    </div>
  );
};

export default BlogItems;
