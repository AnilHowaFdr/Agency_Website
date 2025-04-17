import AboutItems from "../components/about/AboutItems";
import Blog from "../components/home/Blog";
import Brand from "../components/home/Brand";
import Creative from "../components/team/Creative";
import HeroSection from "../components/home/HeroSection";
import Hire from "../components/home/Hire";
import Price from "../components/home/Price";
import ProjectStart from "../components/home/ProjectStart";
import Testimonial from "../components/home/Testimonial";
import ServiceItems from "../components/services/serviceItems";
import Choose from "./../components/home/Choose";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutItems />
      <ServiceItems />
      <Choose />
      <Price />
      <ProjectStart />
      <Creative />
      <Testimonial />
      <Brand />
      <Hire />
      <Blog />
    </div>
  );
};

export default Home;
