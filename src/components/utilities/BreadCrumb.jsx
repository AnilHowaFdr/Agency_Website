import { FaMinus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const BreadCrumb = ({ title }) => {
  const location = useLocation();
  const path1 = location.pathname.split("/")[1];
  return (
    <ul className="flex gap-6 mt-1 items-center justify-center">
      <li>
        <Link to="/" className="font-secondary text-xl text-white font-medium">
          Home
        </Link>
      </li>
      <li>
        <FaMinus className="text-2xl text-white" />
      </li>
      <li>
        <Link
          to={`/${path1}`}
          className="font-secondary text-2xl capitalize text-[#FFAA52] font-medium"
        >
          {path1}
        </Link>
      </li>
      {title && (
        <>
          <li>
            <FaMinus />
          </li>
          <li>
            <p className="pl-6 border-l-2 border-l-[#9F9F9F] font-primary text-lg capitalize text-[#FFAA52] font-medium">
              {title}
            </p>
          </li>
        </>
      )}
    </ul>
  );
};

export default BreadCrumb;
