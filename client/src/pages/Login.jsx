import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      toast.success("Login successful");
      window.location.replace("/");
    } catch (error) {
      toast.error(error.response.data);
      console.error(error);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg">
      <div className="border rounded-xl flex flex-col gap-3 py-16 p-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white xl:w-1/4">
        <h1 className="text-3xl text-center">
          Login <span className="text-violet-700 font-bold">Blogger</span>
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="text"
              id="username"
              maxLength={45}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="password"
              id="password"
              maxLength={90}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Signup
            </a>
          </p>
          <div className="flex justify-center">
            <button
              className="border rounded-xl py-3 px-5 w-max hover:opacity-70"
              type="submit"
              onClick={loginHandler}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
