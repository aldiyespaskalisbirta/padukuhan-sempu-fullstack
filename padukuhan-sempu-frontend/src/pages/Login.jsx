import React, { useContext, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contex/authContextProvider";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err);
    }
  }
  return (
    <>
      <a className="flex justify-end" href="/home">
        <svg
          class="w-4 h-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </a>

      <h1 className="font-bold text-center text-2xl p-4">LOGIN</h1>
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <div className="flex flex-col">
          <div className=" block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="namakamu@gmail.com"
            required
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <div className="block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            name="password"
            onChange={handleChange}
            required
            type="password"
          />
          <Link
            href=""
            className="text-right text-xs text-green-500 text-semibold mt-1"
          >
            lupa password?
          </Link>
        </div>

        <button type="submit" className="submit btn btn-active btn-accent mt-4">
          Login
        </button>
        <div className="flex justify-center text-xs">
          <p>Tidak memiliki akun?</p>
          <Link to="/signup" className="text-green-500 ml-1">
            buat akun
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
