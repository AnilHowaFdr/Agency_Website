import CreativeItems from "./CreativeItems";

const Creative = () => {
  return (
    <section className="py-28 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">Team Member</h4>
          </div>
          <h2 className="heading pt-4 pb-12 text-center">
            Creative Team Member
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <CreativeItems
            src="/user5.jpg"
            title="Robert Sions"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user2.jpg"
            title="Karikok Jahan"
            detail="Executive Manager"
          />
          <CreativeItems
            src="/user3.jpg"
            title="Dickerson MH"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user4.jpg"
            title="Karikok Jahan"
            detail="Agency Analysis"
          />
        </div>
      </div>
    </section>
  );
};

export default Creative;
