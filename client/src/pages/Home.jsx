import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

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

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <main className="flex flex-col flex-1">
      {blogs.map((blog) => (
        <section
          className="flex flex-col md:flex-row pb-16 md:py-16"
          key={blog.id}
        >
          <div className="flex flex-col gap-8 md:w-2/3 p-3 md:pr-16">
            <h2 className="text-5xl leading-tight font-bold">{blog.title}</h2>
            <p className="text-lg">{getText(blog.content)}</p>
            <button className="bg-violet-700 text-white px-5 py-2 w-max hover:bg-white hover:text-violet-700 border transition-colors">
              <Link to={`/blog/${blog.id}`}>Read More</Link>
            </button>
          </div>
          <div className="md:w-1/3 p-3">
            <span className="relative after:absolute after:top-5 after:-left-5 after:w-full after:h-full after:z-[-1] after:bg-violet-700">
              <img
                className="w-full max-h-[400px] object-cover "
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
