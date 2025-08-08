import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CaptainSignup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    vehiclecolor: "",
    vehicleplate: "",
    vehiclecapacity: "",
    vehicletype: "",
  });
  const [message, setMessage] = useState("");
  const [captainData, setcaptainData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation before submission
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    if (formData.firstname.length < 3 || formData.lastname.length < 3) {
      setMessage("First and last name must be at least 3 characters.");
      return;
    }
    if (formData.email.length < 5 || !/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage("Enter a valid email address.");
      return;
    }
    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    if (formData.vehiclecolor.length < 3 || formData.vehicleplate.length < 3) {
      setMessage("Vehicle color and plate must be at least 3 characters.");
      return;
    }
    if (!formData.vehiclecapacity || +formData.vehiclecapacity < 1) {
      setMessage("Vehicle capacity must be at least 1.");
      return;
    }
    if (!formData.vehicletype) {
      setMessage("Please select a vehicle type.");
      return;
    }

    setcaptainData({
      fullname:{
        firstname:formData.firstname,
        lastname:formData.lastname
      },
      email:formData.email,
      password:formData.password,
      vehicleinformation:{
        vehiclecolor:formData.vehiclecolor,
        vehicletype:formData.vehicletype,
        vehicleplate:formData.vehicleplate,
        vehiclecapacity:formData.vehiclecapacity
      }
    })
    console.log(captainData);

    // Your API logic here
    // For now, just show dummy success
    setMessage("Registered successfully! (dummy)");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      vehiclecolor: "",
      vehicleplate: "",
      vehiclecapacity: "",
      vehicletype: "",
    });
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
              Create your captain account:
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
                minLength={3}
              />
              <input
                className="mb-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
                minLength={3}
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
              minLength={5}
            />
            <input
              className="mb-3 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
            <input
              className="mb-3 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
            />
            <div className="mt-3 mb-2 text-gray-700 font-semibold">
              Vehicle Information
            </div>
            <div className="flex gap-3">
              <input
                className="mb-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="text"
                name="vehiclecolor"
                placeholder="Vehicle Color"
                value={formData.vehiclecolor}
                onChange={handleChange}
                required
                minLength={3}
              />
              <input
                className="mb-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="text"
                name="vehicleplate"
                placeholder="Vehicle Plate"
                value={formData.vehicleplate}
                onChange={handleChange}
                required
                minLength={3}
              />
            </div>
            <div className="flex gap-3">
              <input
                className="mb-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                type="number"
                name="vehiclecapacity"
                placeholder="Capacity"
                min={1}
                value={formData.vehiclecapacity}
                onChange={handleChange}
                required
              />
              <select
                className="mb-3 w-1/2 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none text-gray-800"
                name="vehicletype"
                value={formData.vehicletype}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>
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

          <div className="text-center text-gray-600 my-2">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600 hover:underline font-medium">
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
