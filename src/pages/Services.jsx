import QualityService from "../components/services/QualityService";
import QualityServiceItems from "../components/services/QualityServiceItems";
import WorkProcess from "../components/services/WorkProcess";
import PageBanner from "../components/utilities/PageBanner";
import Testimonial from "./../components/home/Testimonial";

const Services = () => {
  return (
    <>
      <PageBanner title="Service" />
      <QualityService />
      <WorkProcess />
      <Testimonial />
    </>
  );
};

export default Services;
