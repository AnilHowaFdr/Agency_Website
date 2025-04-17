const WorkItems = ({ title }) => {
  return (
    <div className="bg-[url('/workItemBg.png')] pt-10 pb-5 bg-no-repeat pl-44">
      <h3 className="heading3 pb-4 hover:text-primary">{title}</h3>
      <p className="detail w-auto">
        There are many variations of pass Lorem Ipsum available, but the a have
        suffered alteration.
      </p>
    </div>
  );
};

export default WorkItems;
