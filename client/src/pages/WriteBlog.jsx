import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";
import { useLocation } from "react-router-dom";

const WriteBlog = () => {
  const blog = useLocation().state;
  const [form, setForm] = useState({
    title: blog?.title || "",
    category: blog?.category || "",
    image: blog?.blogImg || "",
    content: blog?.content || "",
  });

  const uploadImage = async (e) => {
    if (!form.image) {
      return;
    }
    if (blog?.blogImg === form.image) {
      return blog.blogImg;
    }
    const file = form.image;
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post("/api/upload", formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const blogHandler = async (e) => {
    e.preventDefault();
    const imageUrl = await uploadImage();

    try {
      blog
        ? await axios.put(`/api/blog/${blog.id}`, { ...form, image: imageUrl })
        : await axios.post("/api/blog", {
            ...form,
            image: imageUrl,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      toast.success("Blog published successfully");
      window.location.replace(`/?category=${form.category}`);
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="flex-1 pb-10">
      {blog ? (
        <h1 className="text-4xl font-bold text-center p-5">Edit The Blog</h1>
      ) : (
        <h1 className="text-4xl font-bold text-center p-5">Write A Blog</h1>
      )}
      <main className="flex flex-col md:flex-row gap-3">
        <section className="flex flex-col gap-3 md:w-3/4 px-3 lg:px-0">
          <input
            type="text"
            placeholder="Title"
            className="p-3 border"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <div className="flex h-full">
            <ReactQuill
              className="h-full w-full"
              theme="snow"
              value={form.content}
              onChange={(value) => setForm({ ...form, content: value })}
            />
          </div>
        </section>
        <section className="flex flex-col gap-3 md:w-1/4 px-3 lg:px-0">
          <div className="flex flex-col gap-3 border p-3">
            <h1 className="text-2xl font-bold">Category</h1>
            <div className="flex gap-3">
              <label htmlFor="art">Art</label>
              <input
                type="radio"
                name="category"
                id="art"
                value="art"
                checked={form.category === "art"}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>
            <div className="flex gap-3">
              <label htmlFor="science">Science</label>
              <input
                type="radio"
                name="category"
                id="science"
                value="science"
                checked={form.category === "science"}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>
            <div className="flex gap-3">
              <label htmlFor="technology">Technology</label>
              <input
                type="radio"
                name="category"
                id="technology"
                value="technology"
                checked={form.category === "technology"}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 border p-3">
            <h1 className="text-2xl font-bold">Publish</h1>
            <p>
              <b>Status:</b> {blog ? "Published" : "Draft"}
            </p>
            <p>
              <b>Status:</b> Public
            </p>
            <div>
              <input
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                type="file"
                id="image"
                name="image"
                onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              />
            </div>
            <div className="flex justify-between">
              <button className="p-2 bg-white text-violet-700 w-max hover:bg-violet-700 hover:text-white border transition-colors">
                Save draft
              </button>
              <button
                className="p-2 bg-violet-700 text-white w-max hover:bg-white hover:text-violet-700 border transition-colors"
                onClick={blogHandler}
              >
                Publish
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WriteBlog;
