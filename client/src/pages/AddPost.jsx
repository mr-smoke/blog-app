const AddPost = () => {
  return (
    <>
      <h1 className="text-4xl font-bold pb-5">Add Post</h1>
      <main className="flex">
        <section className="w-3/4 px-3 flex flex-col gap-5">
          <form className="flex flex-col gap-5">
            <input type="text" placeholder="Title" className="p-3 border" />
            <textarea
              placeholder="Write your post"
              className="p-3 border"
            ></textarea>
            <button className="bg-violet-700 text-white px-5 py-2 w-max hover:bg-white hover:text-violet-700 hover:border">
              Publish
            </button>
          </form>
        </section>
        <section className="flex flex-col gap-3 w-1/4">
          <div className="border p-3">
            <h1 className="text-2xl font-bold">Category</h1>
            <ul className="flex flex-col gap-2">
              <li>Art</li>
              <li>Science</li>
              <li>Technology</li>
              <li>Music</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 border p-3">
            <h1 className="text-2xl font-bold">Recent Posts</h1>
            <p className="font-bold">
              Status: <span className="font-normal">Draft</span>
            </p>
            <p className="font-bold">
              Status: <span className="font-normal">Public</span>
            </p>
            <p className="font-bold">
              Status <span></span>
            </p>
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
