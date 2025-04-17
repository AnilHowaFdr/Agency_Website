import Button from "../utilities/Button";

const Banner = () => {
  return (
    <div className=" w-full lg:h-screen pt-60 bg-[url('/banner.png')]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-14 lg:gap-8">
          <div className="">
            <h3 className="colorGradient text-secondary text-2xl font-medium">
              Your Trusted Ortencey Agency
            </h3>
            <h1 className="py-6 font-third text-white font-bold text-5xl lg:text-7xl lg:w-[800px]">
              Our Digital Agency With Excellence Services
            </h1>
            <p className="detail text-white lg:w-[594px] pb-16">
              The 3 golden rules professional Digital Marketing Agency don’t
              want you to know about.
            </p>
            <Button title="Discover More" />
          </div>
          <div className="">
            <img className="w-full" src="/heroImage.png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
