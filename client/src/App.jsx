import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AddPost from "./pages/AddPost";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
