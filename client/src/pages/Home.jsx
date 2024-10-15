import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog${category}`);
        setBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <main className="flex flex-col flex-1">
      {blogs.map((blog) => (
        <section
          className="flex flex-col md:flex-row md:even:flex-row-reverse pb-16 md:py-16"
          key={blog.id}
        >
          <div className="flex flex-col justify-center gap-8 md:w-2/3 p-3 md:pr-16">
            <h2 className="text-5xl leading-tight font-bold truncate">
              {blog.title}
            </h2>
            <p className="text-lg line-clamp-6">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.content),
                }}
              />
            </p>
            <button className="bg-violet-700 text-white px-5 py-2 w-max hover:bg-white hover:text-violet-700 border transition-colors">
              <Link to={`/blog/${blog.id}`}>Read More</Link>
            </button>
          </div>
          <div className="md:w-1/3 p-3 flex items-center">
            <span className="w-full relative after:absolute after:top-5 after:-left-5 after:w-full after:h-full after:z-[-1] after:bg-violet-700">
              <img
                className="w-full h-96 object-cover"
                src={`/uploads/${blog.image}`}
                alt={blog.title}
              />
            </span>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
