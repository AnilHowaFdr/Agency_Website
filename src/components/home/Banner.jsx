import Button from "../utilities/Button";

const Banner = () => {
  return (
    <div className="h-screen w-full pt-44 bg-[url('/banner.png')]">
      <div className="container">
        <div className="flex items-center gap-8">
          <div className="w-1/2">
            <h3 className="colorGradient text-secondary text-2xl font-medium">
              Your Trusted Ortencey Agency
            </h3>
            <h1 className="py-6 font-third text-white font-bold text-7xl w-[800px]">
              Our Digital Agency With Excellence Services
            </h1>
            <p className="detail text-white w-[594px] pb-16">
              The 3 golden rules professional Digital Marketing Agency don’t
              want you to know about.
            </p>
            <Button title="Discover More" />
          </div>
          <div className="w-1/2">
            <img className="w-full" src="/heroImage.png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
