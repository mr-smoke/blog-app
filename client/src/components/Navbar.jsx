import { useContext, useState } from "react";
import { FaBloggerB } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdClose, MdDehaze } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <nav className="flex items-center justify-between py-3 font-mono text-2xl px-3 lg:px-0">
      <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-700 relative inline-block">
        <Link to="/">
          <h1 className="flex items-center gap-1 text-3xl relative text-white">
            <FaBloggerB className="relative" />
            Blogger
          </h1>
        </Link>
      </div>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <MdDehaze size={30} />
      </div>
      <div
        className={`${
          menuOpen ? "translate-x-0" : "w-0 invisible p-0 md:visible"
        } flex gap-5 md:relative md:flex-row md:p-0 md:items-start md:h-auto md:w-auto md:bg-white md:text-black md:translate-x-0 fixed top-0 right-0 flex-col items-end p-3 h-screen w-1/2 bg-violet-700 text-white translate-x-full transition-all z-20`}
      >
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <MdClose size={30} />
        </div>
        <Link to="/art">
          <p className="before:absolute before:pointer-events-none before:w-full before:h-0.5 before:-bottom-1 before:left-0 before:bg-violet-700 before:translate-x-[-100%] before:opacity-0 relative before:transition-all before:duration-300 hover:before:translate-x-0 hover:before:opacity-100">
            Art
          </p>
        </Link>
        <Link to="/science">
          <p className="before:absolute before:pointer-events-none before:w-full before:h-0.5 before:-bottom-1 before:left-0 before:bg-violet-700 before:translate-x-[-100%] before:opacity-0 relative before:transition-all before:duration-500 hover:before:translate-x-0 hover:before:opacity-100">
            Science
          </p>
        </Link>
        <Link to="/write">
          <p className="flex md:hidden bg-white rounded-full w-20 h-20 items-center justify-center text-violet-700">
            Write
          </p>
        </Link>
      </div>
      <div className="md:flex md:text-2xl md:order-none items-center gap-5 font-semibold text-xl -order-1">
        <span className="flex flex-col items-center gap-1">
          {user ? (
            <>
              <img
                src={user.image}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <Link to="/logout">
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <p>Login</p>
            </Link>
          )}
        </span>
        <Link className="" to="/write">
          <p className="hidden md:flex bg-violet-700 rounded-full w-20 h-20 items-center justify-center text-white hover:bg-white hover:text-violet-700 hover:border transition-colors">
            Write
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
