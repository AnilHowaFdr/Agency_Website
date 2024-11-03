const Button = ({ title }) => {
  return (
    <button className="py-4 px-8 text-white bg-gradient-to-r from-[#fe651b] to-[#ffaa52] rounded-full font-secondary text-lg font-normal">
      {title}
    </button>
  );
};

export default Button;
