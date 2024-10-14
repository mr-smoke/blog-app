import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";

const AddBlog = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    image: null,
    content: "",
  });

  const uploadImage = async (e) => {
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
      const response = await axios.post("/api/blog", {
        ...form,
        image: imageUrl,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      toast.success(response.data);
      navigator.navigate("/");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold pb-5">Add Post</h1>
      <main className="flex">
        <section className="w-3/4 px-3 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Title"
              className="p-3 border"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <ReactQuill
              theme="snow"
              value={form.content}
              onChange={(value) => setForm({ ...form, content: value })}
            />

            <button className="bg-violet-700 text-white px-5 py-2 w-max hover:bg-white hover:text-violet-700 hover:border">
              Publish
            </button>
          </div>
        </section>
        <section className="flex flex-col gap-3 w-1/4">
          <div className="flex flex-col gap-3 border p-3">
            <h1 className="text-2xl font-bold">Category</h1>
            <div className="flex gap-3">
              <label htmlFor="art">Art</label>
              <input
                type="radio"
                name="category"
                id="art"
                value="art"
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
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>
            <div className="flex gap-3">
              <label htmlFor="travel">Travel</label>
              <input
                type="radio"
                name="category"
                id="travel"
                value="travel"
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 border p-3">
            <h1 className="text-2xl font-bold">Publish</h1>
            <p>
              <b>Status:</b> Draft
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
              <button className="p-2 bg-white text-violet-700 w-max hover:bg-violet-700 hover:text-white border">
                Save draft
              </button>
              <button
                className="p-2 bg-violet-700 text-white w-max hover:bg-white hover:text-violet-700 border"
                onClick={blogHandler}
              >
                Publish
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddBlog;