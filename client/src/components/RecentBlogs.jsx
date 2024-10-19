import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentBlogs = ({ category, blogId }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog?category=${category}`);
        const filteredBlogs = response.data.filter(
          (blog) => blog.id !== blogId
        );
        setBlogs(filteredBlogs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, blogId]);

  return (
    <>
      <h2 className="text-xl font-bold">Recent Posts Like This</h2>
      {blogs.slice(0, 3).map((blog) => (
        <div key={blog.id} className="flex flex-col gap-3 border p-3">
          <img
            className="w-full h-60 object-cover"
            src={`/uploads/${blog.image}`}
            alt={blog.title}
          />
          <h3 className="font-bold text-3xl truncate">{blog.title}</h3>
          <div>
            <Link to={`/blog/${blog.id}`}>
              <button className="bg-violet-700 text-white px-3 py-1 w-max hover:bg-white hover:text-violet-700 border transition-colors">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentBlogs;
