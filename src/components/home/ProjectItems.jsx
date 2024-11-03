const ProjectItems = ({ src, detail, count }) => {
  return (
    <div className="w-full lg:w-1/3 flex items-center gap-4">
      <div>
        <img className="w-full" src={src} alt="project" />
      </div>
      <div>
        <h2 className="font-third text-white font-extrabold text-5xl pb-2">
          {count}
        </h2>
        <p className="font-secondary text-white font-normal text-lg">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default ProjectItems;
