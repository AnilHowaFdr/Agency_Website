import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Banner />
        </div>
        <div>
          <BannerOne />
        </div>
        <div>
          <BannerTwo />
        </div>
      </Slider>
    </>
  );
};

export default HeroSection;
