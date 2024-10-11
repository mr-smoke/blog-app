import { useState } from "react";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    text: "",
    category: "",
    status: "draft",
    visibility: "public",
    image: "",
  });

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
            <textarea
              placeholder="Write your post"
              className="p-3 border"
            ></textarea>
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
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>
            <div className="flex justify-between">
              <button className="p-2 bg-white text-violet-700 w-max hover:bg-violet-700 hover:text-white border">
                Save draft
              </button>
              <button className="p-2 bg-violet-700 text-white w-max hover:bg-white hover:text-violet-700 border">
                Publish
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddPost;
