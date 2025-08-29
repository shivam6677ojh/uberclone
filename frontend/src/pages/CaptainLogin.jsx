// UserLogin.jsx
import React, { useState } from "react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext.jsx";

export default function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [captainData, setCaptainData] = useState({}); // To store fetched captain data 
  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email : email,
      password
    }

    const response = await  axios.post(`${import.meta.env.VITE_BASE_URL}/api/captains/login`, captain);

    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain); // Store fetched captain data in state
      localStorage.setItem('token', data.token); // Store token in localStorage
      navigate('/captain-home'); // Navigate to captain home page
    }
    
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md max-w-md w-full p-8">
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-700">
              What's your email and password:
            </label>
            <div className="mb-4">
              <input
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white text-lg py-3 rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
          
          {/* New user text */}
          <div className="text-center text-gray-600 my-4">
            Captain?{" "}
            <Link to='/captain-signup'
              type="button"
              // onClick={() => navigate("/signup")} // Uncomment if using react-router
              className="text-blue-600 hover:underline font-medium"
            >
              Register as Captain
            </Link>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="grid gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-100 text-gray-800 transition"
            >
              <span className="mr-2"><FcGoogle /></span>
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-100 text-gray-800 transition"
            >
              <span className="mr-2"><FaApple /></span>
              Continue with Apple
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 bg-white hover:bg-gray-100 text-gray-800 transition"
            >
              <span className="mr-2"><FaFacebook /></span>
              Continue with Facebook
            </button>

            <Link to='/login'
            type="submit"
            className="flex items-center justify-center w-full bg-orange-300 text-white text-lg py-3 rounded-md hover:bg-orange-500 transition"
          >
            Sign in as User
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
