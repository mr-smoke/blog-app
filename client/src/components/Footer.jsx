import { FaBloggerB, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-3 w-full gap-4 min-h-24 bg-violet-700 flex justify-between items-center flex-col md:flex-row">
      <div className="flex items-center justify-center gap-3 font-mono text-lg text-white">
        <p>©2024 Blogger made by</p>
        <a target="_blank" href="https://github.com/mr-smoke">
          <FaGithub />
        </a>
      </div>
      <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block">
        <h1 className="flex items-center gap-1 text-3xl relative text-violet-700">
          <FaBloggerB className="relative" />
          Blogger
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
