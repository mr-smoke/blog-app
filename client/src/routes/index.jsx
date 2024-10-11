import Layout from "../routes/Layout";
import AddPost from "../pages/AddPost";
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
        element: <AddPost />,
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
