import { MdDelete, MdEditSquare } from "react-icons/md";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div className="max-w-[1040px] mx-auto min-h-screen relative">
      <Navbar />
      <main className="flex">
        <section className="w-3/4 p-3 flex flex-col gap-5">
          <img
            className="w-full max-h-[400px] object-cover"
            src="https://images.pexels.com/photos/28287993/pexels-photo-28287993/free-photo-of-sanayi-endustri-teknoloji-muzik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="random"
          />
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full"
              src="https://images.pexels.com/photos/28287993/pexels-photo-28287993/free-photo-of-sanayi-endustri-teknoloji-muzik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
            />
            <div>
              <h2 className="font-bold text-lg">John Doe</h2>
              <p>May 12, 2024</p>
            </div>
            <div className="flex pl-5 gap-5 text-2xl text-violet-700">
              <MdEditSquare />
              <MdDelete />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quia, voluptatem, voluptas, quos asperiores cumque quae nemo
            doloremque voluptatibus quidem tempora. Quisquam quia, voluptatem,
            voluptas, quos asperiores cumque quae nemo doloremque voluptatibus
            quidem tempora.
          </p>
        </section>
        <section className="flex flex-col gap-3 w-1/4">
          <h2 className="text-xl font-bold">Recent Posts</h2>
          <div className="flex flex-col gap-3 border p-3">
            <img
              className="w-full "
              src="https://images.pexels.com/photos/28287993/pexels-photo-28287993/free-photo-of-sanayi-endustri-teknoloji-muzik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
            />
            <h3 className="font-bold text-3xl text-gray-600">John Doe</h3>
            <button className="bg-violet-700 text-white px-3 py-1 w-max hover:bg-white hover:text-violet-700 hover:border">
              Read More
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
