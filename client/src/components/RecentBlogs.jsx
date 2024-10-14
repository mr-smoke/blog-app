import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentBlogs = ({ category }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog?category=${category}`);
        setBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      <h2 className="text-xl font-bold">Recent Posts</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="flex flex-col gap-3 border p-3">
          <img
            className="w-full object-cover"
            src={`/uploads/${blog.image}`}
            alt={blog.title}
          />
          <h3 className="font-bold text-3xl">{blog.title}</h3>
          <button className="bg-violet-700 text-white px-3 py-1 w-max hover:bg-white hover:text-violet-700 border transition-colors">
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </button>
        </div>
      ))}
    </>
  );
};

export default RecentBlogs;
