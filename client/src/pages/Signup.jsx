import { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    confirmPassword: "",
    gender: "",
  });

  return (
    <main className="flex items-center justify-center h-screen bg">
      <div className="border rounded-xl flex flex-col gap-3 py-16 p-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white xl:w-1/4">
        <h1 className="text-3xl text-center">
          Signup <span className="text-violet-700 font-bold">Blogger</span>
        </h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="text"
              id="name"
              maxLength={20}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="text"
              id="username"
              maxLength={20}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="password"
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="password"
              id="confirmPassword"
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="flex gap-3 justify-center">
            <div className="flex gap-1">
              <input
                className="hidden peer"
                type="radio"
                id="male"
                value="male"
                name="gender"
                onClick={(e) => setForm({ ...form, gender: e.target.value })}
              />
              <label
                htmlFor="male"
                className="border rounded-lg p-3 cursor-pointer peer-checked:bg-violet-700 peer-checked:text-white flex items-center"
              >
                <FaMale size={20} />
              </label>
            </div>
            <div className="flex gap-1">
              <input
                className="hidden peer"
                type="radio"
                id="female"
                value="female"
                name="gender"
                onClick={(e) => setForm({ ...form, gender: e.target.value })}
              />
              <label
                htmlFor="female"
                className="border rounded-lg p-3 cursor-pointer peer-checked:bg-violet-700 peer-checked:text-white flex items-center"
              >
                <FaFemale size={20} />
              </label>
            </div>
          </div>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
          <div className="flex justify-center">
            <button
              className="border rounded-xl py-3 px-5 w-max hover:opacity-70"
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;