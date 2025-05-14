import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    // Retrieve saved user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("bankUser"));
    if (storedUser && storedUser.email === email) {
      // Save current session
      localStorage.setItem("user", JSON.stringify(storedUser));
      setError("");
      alert("Login successful!");
      navigate("/"); // Redirect to homepage
    } else {
      setError("Invalid credentials, please try again.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Login to FlashLearn
        </h2>
        {error && (
          <div className="bg-red-100 text-red-800 p-4 mb-4 rounded-lg text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
          <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
            <div>
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" className="hover:text-blue-600">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;