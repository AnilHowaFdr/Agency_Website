import AboutItems from "../components/about/AboutItems";
import BrandImg from "../components/about/BrandImg";
import Success from "../components/about/Success";
import Choose from "../components/home/Choose";
import Creative from "../components/team/Creative";
import ServiceItems from "../components/services/serviceItems";
import PageBanner from "../components/utilities/PageBanner";

const About = () => {
  return (
    <>
      <PageBanner title="About Us" />
      <ServiceItems />
      <AboutItems />
      <Choose />
      <Success />
      <Creative />
      <BrandImg />
    </>
  );
};

export default About;
