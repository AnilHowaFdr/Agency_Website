const PortfolioDetailItems = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div>
          <img className="w-full rounded-xl" src="/portfolio4.png" alt="" />
        </div>
        <div className="mt-8 px-8 py-5 bg-secondary rounded-lg flex items-center justify-between">
          <div className="w-1/3">
            <ul>
              <li className="flex items-center gap-2">
                <h3 className="heading2 w-40">Start Date:</h3>
                <p className="detail">15 Dec 2022</p>
              </li>
              <li className="flex items-center gap-2">
                <h3 className="heading2 w-40">End Date:</h3>
                <p className="detail">12 Jan 2023</p>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul>
              <li className="flex items-center gap-2">
                <h3 className="heading2 w-40">client:</h3>
                <p className="detail">Jiyatan Raw</p>
              </li>
              <li className="flex items-center gap-2">
                <h3 className="heading2 w-40">Tags:</h3>
                <p className="detail">Digital Agency</p>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul>
              <li className="flex items-center gap-2">
                <h3 className="heading2 w-40">Website:</h3>
                <p className="detail">jiyatanraw.com</p>
              </li>
              <li className="flex items-center gap-2">
                <h3 className="heading2 w-40">Category:</h3>
                <p className="detail">Agency</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetailItems;
