import TestimonialItems from "./TestimonialItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="py-24">
      <div className="container flex items-center gap-24">
        <div className="w-1/2">
          <img className="full" src="/testimonial.png" alt="img" />
        </div>
        <div className="w-1/2">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Testimonial</h4>
          </div>
          <h2 className="heading w-[700px] pt-4 pb-12 ">What Our Client Say</h2>
          <Slider {...settings}>
            <div>
              <TestimonialItems />
            </div>
            <div>
              <TestimonialItems />
            </div>
            <div>
              <TestimonialItems />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
