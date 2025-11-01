

import React from 'react';
import { useNavigate } from 'react-router';
import err404 from "../../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Go directly to the Home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center">
      <img src={err404} alt="404 Error" className="w-96 mb-6" />
      <h2 className="text-4xl font-bold text-black mb-2">Oops, page not found!</h2>
      <p className="text-gray-500 mb-6">The page you are looking for is not available.</p>

      <button
        onClick={handleGoHome}
        className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-all duration-300"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
