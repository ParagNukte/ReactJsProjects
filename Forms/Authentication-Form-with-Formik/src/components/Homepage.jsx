import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
        <div className="space-x-6">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all">Login</Link>
          <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
