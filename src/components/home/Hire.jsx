import Button from "../utilities/Button";

const Hire = () => {
  return (
    <section className="bg-[url('/banner.png')] py-20">
      <div className="container">
        <div className="bg-primary w-10/12 m-auto rounded-xl p-20 flex items-center justify-between">
          <div className="w-3/5">
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6" src="/focus.png" alt="focus" />
              <h4 className="heading2 text-white">We Are Hire</h4>
            </div>
            <h2 className="heading pt-4 pb-12 text-white">
              Tell us About Your Business, We are Ready to Solve.
            </h2>
          </div>
          <div className="w-1/5">
            <Button title="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
