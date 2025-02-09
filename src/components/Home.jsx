import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-100 via-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Your Todo App
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Stay organized and boost your productivity with our simple and intuitive todo app.
      </p>
      <Link
        to="/todo"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Home;