import Layout from "../routes/Layout";
import AddBlog from "../pages/AddBlog";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { createBrowserRouter } from "react-router-dom";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add",
        element: <AddBlog />,
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default browserRouter;
