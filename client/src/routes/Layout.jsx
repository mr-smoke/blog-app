import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="max-w-[1040px] mx-auto min-h-screen relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
