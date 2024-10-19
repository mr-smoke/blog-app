import { useContext, useEffect, useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import moment from "moment";
import RecentBlogs from "../components/RecentBlogs";
import DOMPurify from "dompurify";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const isBlogOwner = user?.id === blog.userid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const deleteHandler = async () => {
    try {
      await axios.delete(`/api/blog/${id}`);
      toast.success("Blog deleted successfully");
      window.location.replace("/");
    } catch (error) {
      toast.error(error.response.data);
      console.error(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col md:flex-row gap-3 flex-1 pb-10 pt-5">
      <section className="flex flex-col gap-3 md:w-3/4 px-3 lg:px-0">
        <img
          className="w-full max-h-96 object-cover"
          src={`/uploads/${blog.blogImg}`}
          alt={blog.title}
        />
        <div className="flex items-center gap-3">
          <img
            className="w-14 h-14 rounded-full"
            src={blog.userImg}
            alt={blog.username}
          />
          <div>
            <h2 className="font-bold text-lg">{blog.username}</h2>
            <p>{moment(blog.date).fromNow()}</p>
          </div>
          {isBlogOwner && (
            <div className="flex pl-5 gap-5 text-2xl text-violet-700">
              <Link to={`/write?edit=${id}`} state={blog}>
                <MdEditSquare />
              </Link>
              <MdDelete className="cursor-pointer" onClick={deleteHandler} />
            </div>
          )}
        </div>
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.content),
            }}
          />
        </p>
      </section>
      <section className="flex flex-col gap-3 md:w-1/4 px-3 lg:px-0">
        <RecentBlogs category={blog.category} blogId={blog.id} />
      </section>
    </main>
  );
};

export default Blog;
