const Servicedetail = ({ title, src }) => {
  return (
    <div className="bg-white rounded-2xl w-1/4  ">
      <div className="py-14 px-5 flex flex-col items-center justify-center ">
        <img src={src} alt="service" />
        <h3 className="font-third font-bold text-2xl pt-12 pb-5">{title}</h3>
        <p className="detail text-center">
          There are many variations of pass Lorem Ipsum available, but the a
          have suffered alteration.
        </p>
      </div>
    </div>
  );
};

export default Servicedetail;
