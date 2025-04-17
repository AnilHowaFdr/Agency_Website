import { GrPrevious } from "react-icons/gr";

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="text-3xl absolute top-1/2 left-0 z-10 text-primary"
      onClick={onClick}
    >
      <GrPrevious />
    </div>
  );
};

export default SamplePrevArrow;
