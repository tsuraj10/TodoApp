import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-yellow-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About This App</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        This Todo App is designed to help you manage your tasks efficiently. With features like due dates, priorities, and a clean interface, you can stay on top of your to-do list and achieve your goals.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Add, edit, and delete tasks</li>
          <li>Set due dates and priorities</li>
          <li>Mark tasks as completed</li>
          <li>Clean and responsive design</li>
        </ul>
      </div>
      <Link
        to="/todo"
        className="mt-8 bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
      >
        Try It Now
      </Link>
    </div>
  );
}

export default About;