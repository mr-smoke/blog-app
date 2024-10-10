import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="max-w-[1040px] mx-auto min-h-screen relative">
      <Navbar />
      <main className="flex flex-col">
        <section className="flex flex-col md:flex-row pb-16 md:py-16">
          <div className="flex flex-col gap-8 md:w-2/3 p-3 md:pr-16">
            <h2 className="text-5xl leading-tight font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quia, voluptatem, voluptas, quos asperiores cumque quae nemo
              doloremque voluptatibus quidem tempora. Quisquam quia, voluptatem,
              voluptas, quos asperiores cumque quae nemo doloremque voluptatibus
              quidem tempora.
            </p>
            <button className="bg-violet-700 text-white px-5 py-2 w-max hover:bg-white hover:text-violet-700 hover:border">
              Read More
            </button>
          </div>
          <div className="md:w-1/3 p-3">
            <span className="relative after:absolute after:top-5 after:-left-5 after:w-full after:h-full after:z-[-1] after:bg-violet-700">
              <img
                className="w-full max-h-[400px] object-cover "
                src="https://images.pexels.com/photos/28762715/pexels-photo-28762715/free-photo-of-muhtesem-kumtasi-antilop-kanyonu.jpeg"
                alt="random"
              />
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
