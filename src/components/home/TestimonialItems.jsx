const TestimonialItems = () => {
  return (
    <div className="bg-secondary rounded-xl p-3 mb-3">
      <div className="flex items-center justify-between ">
        <img src="/icon.png" alt="icon" />
        <img src="/star.png" alt="icon" />
      </div>
      <p className="detail py-8">
        There are many variations of passages of Lorem as Ipsum the vaila the
        majority have suffered alteration in some form by injectes our, or rando
        word which don't look even slightly a believable. If you are going to
        use a passage of Lorem Ipsum.
      </p>
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src="/user2.jpg" alt="img" />
        </div>
        <div>
          <h4 className="heading3">Kristin Waon</h4>
          <p className="detail">Web Designer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItems;
