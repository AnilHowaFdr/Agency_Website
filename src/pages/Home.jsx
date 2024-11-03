import AboutItems from "../components/about/AboutItems";
import HeroSection from "../components/home/HeroSection";
import Price from "../components/home/Price";
import ProjectStart from "../components/home/ProjectStart";
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
    </div>
  );
};

export default Home;
