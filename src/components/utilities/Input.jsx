const Input = ({ type = "text", placeholder }) => {
  return (
    <div>
      <input
        type={type}
        className="border text-[#9A9A9A] bg-white rounded-full py-4 px-5 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
