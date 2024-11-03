import { GrNext } from "react-icons/gr";

const SampleNextArrow = ({ onClick }) => {
  return (
    <div className="text-3xl absolute top-1/2 right-0 z-10" onClick={onClick}>
      <GrNext />
    </div>
  );
};

export default SampleNextArrow;
