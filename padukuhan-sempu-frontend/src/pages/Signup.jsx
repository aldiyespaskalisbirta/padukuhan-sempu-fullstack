import React, { useState, useEffect } from "react";
import { Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    // console.log(inputs.username);
    try {
      e.preventDefault();
      if (inputs.confirmPassword != inputs.password) {
        setError("Confirm Password does not match with your password");
      }
      axios.post("http://localhost:5000/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    console.log(error);
  });
  return (
    <>
      <h1 className="font-bold text-center text-2xl p-4">SELAMAT DATANG</h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="block">
            <Label htmlFor="username" value="username" />
          </div>
          <TextInput
            id="username"
            name="username"
            onChange={handleChange}
            placeholder="Nama Lengkap"
            required
            type="text"
          />
        </div>
        <div>
          <div className=" block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="emailkamu@gmail.com"
            required
            type="email"
          />
        </div>
        <div>
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
        </div>
        <div>
          <div className="block">
            <Label htmlFor="confirmPassword" value="Konfirmasi Password" />
          </div>
          <TextInput
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            required
            type="password"
          />
        </div>

        <button type="submit" className="submit btn btn-active btn-accent mb-4">
          Sign Up
        </button>
        <div className="flex justify-center text-xs">
          <p>Sudah memiliki akun?</p>
          <Link to="/login" className="text-green-500 ml-1">
            login
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup;
