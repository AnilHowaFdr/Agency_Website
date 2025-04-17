import CreativeItems from "../team/CreativeItems";
import Button from "./../utilities/Button";

const CreativeDetail = () => {
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
        <div className="grid grid-cols-4 gap-6 pb-10">
          <CreativeItems
            src="/user5.png"
            title="Robert Sions"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user2.png"
            title="Karikok Jahan"
            detail="Executive Manager"
          />
          <CreativeItems
            src="/user3.png"
            title="Dickerson MH"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user4.png"
            title="Karikok Jahan"
            detail="Agency Analysis"
          />
          <CreativeItems
            src="/user5.png"
            title="Robert Sions"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user2.png"
            title="Karikok Jahan"
            detail="Executive Manager"
          />
          <CreativeItems
            src="/user3.png"
            title="Dickerson MH"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user4.png"
            title="Karikok Jahan"
            detail="Agency Analysis"
          />
          <CreativeItems
            src="/user5.png"
            title="Robert Sions"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user2.png"
            title="Karikok Jahan"
            detail="Executive Manager"
          />
          <CreativeItems
            src="/user3.png"
            title="Dickerson MH"
            detail="Business Consultant"
          />
          <CreativeItems
            src="/user4.png"
            title="Karikok Jahan"
            detail="Agency Analysis"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Button path="/teamDetails" title="View More " />
        </div>
      </div>
    </section>
  );
};

export default CreativeDetail;
