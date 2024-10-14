import Layout from "../routes/Layout";
import WriteBlog from "../pages/WriteBlog";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, UnprotectedRoute } from "./NavigateRoute";

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
        path: "write",
        element: (
          <ProtectedRoute>
            <WriteBlog />
          </ProtectedRoute>
        ),
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <UnprotectedRoute>
        <Signup />
      </UnprotectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <UnprotectedRoute>
        <Login />
      </UnprotectedRoute>
    ),
  },
]);

export default browserRouter;
