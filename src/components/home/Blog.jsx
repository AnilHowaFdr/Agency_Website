import BlogItems from "./BlogItems";

const Blog = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-between">
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6" src="/focus.png" alt="focus" />
            <h4 className="heading2 text-primary">We Are Hire</h4>
          </div>
          <h2 className="heading pt-4 pb-12 ">Latest Blogs & Articles</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <BlogItems
            src="/blog3.png"
            detail="Successful business partner have
a meeting and discussing"
          />
          <BlogItems
            src="/blog2.png"
            detail="Motivated colleagues celebrating
corporate success together"
          />
          <BlogItems
            src="/blog3.png"
            detail="Man using a tablet to a work and
connect with others"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
