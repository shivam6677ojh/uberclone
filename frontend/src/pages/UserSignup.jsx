import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { UserDataContext } from "../context/UserContext.jsx";
import UserContext from "../context/UserContext.jsx";
import { useContext } from "react";

export default function UserSignup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const [userData, setuserData] = useState('');
  const [message, setMessage] = useState("");

  // const [user, setUser] = React.useContext(UserContext);
  const [user, setUser] = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    // setuserData({
    //   fullName:{
    //     firstname:formData.firstname,
    //     lastname:formData.lastname
    //   },
    //   email:formData.email,
    //   password:formData.password
    // })
    const newUser = {
      fullname: {
        firstname: formData.firstname,
        lastname: formData.lastname
      },
      email: formData.email,
      password: formData.password
    }
    // console.log(userData);
    // console.log(newUser);

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/register`, newUser);
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/Home');
    }
    // console.log(response.data);s

    // Place signup logic here (e.g., send formData to API)
    setMessage("Registered successfully! (dummy)");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    // console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
    setMessage("");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md max-w-md w-full p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Create your account:
            </label>
            <div className="flex gap-3">
              <input
                className="mb-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
                autoComplete="given-name"
              />
              <input
                className="mb-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
                autoComplete="family-name"
              />
            </div>
            <input
              className="mb-3 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <input
              className="mb-3 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <input
              className="mb-1 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>

          {message && (
            <div className="text-sm text-center text-red-600 font-medium">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white text-lg py-3 rounded-md hover:bg-gray-900 transition cursor-pointer"
          >
            Sign Up
          </button>

          {/* Already have an account? */}
          <div className="text-center text-gray-600 my-2">
            Already have an account?{" "}
            <Link to='/login'
              type="button"
              // onClick={() => navigate("/login")} // For future routing with react-router
              className="text-blue-600 hover:underline font-medium"
            >
              Log in
            </Link>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social signup buttons */}
          <div className="grid gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-100 text-gray-800 transition"
            >
              <span className="mr-2 text-xl"><FcGoogle /></span>
              Sign up with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-100 text-gray-800 transition"
            >
              <span className="mr-2 text-xl"><FaApple /></span>
              Sign up with Apple
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-100 text-gray-800 transition"
            >
              <span className="mr-2 text-xl text-blue-600"><FaFacebook /></span>
              Sign up with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
