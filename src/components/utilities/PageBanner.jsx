import BreadCrumb from "./BreadCrumb";

const PageBanner = ({ title }) => {
  return (
    <section className="relative py-36 bg-cover bg-no-repeat bg-center bg-[url('/background.png')] bg-secondary">
      <div className="container ">
        <h2 className="heading text-white pb-3 text-center">{title}</h2>
        <BreadCrumb />
      </div>
    </section>
  );
};

export default PageBanner;
