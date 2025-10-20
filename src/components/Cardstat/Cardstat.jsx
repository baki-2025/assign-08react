import React from "react";

const Cardstat = () => {
  return (
    <div className="bg-violet-600 text-white py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Trusted by Millions, Built for You
      </h1>

      {/* Centered Stats Section */}
      <div className="flex flex-wrap justify-center gap-10 text-center">
        {/* Total Downloads */}
        <div className="bg-violet-700 p-8 rounded-2xl shadow-md w-72 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-10 h-10 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-200">Total Downloads</h3>
          <p className="text-5xl font-bold mb-2">29.6M</p>
          <p className="text-gray-300 text-sm">21% more than last month</p>
        </div>

        {/* Total Reviews */}
        <div className="bg-violet-700 p-8 rounded-2xl shadow-md w-72 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-10 h-10 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-200">Total Reviews</h3>
          <p className="text-5xl font-bold mb-2">906K</p>
          <p className="text-gray-300 text-sm">46% more than last month</p>
        </div>

        {/* Active Apps */}
        <div className="bg-violet-700 p-8 rounded-2xl shadow-md w-72 hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-10 h-10 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-200">Active Apps</h3>
          <p className="text-5xl font-bold mb-2">132+</p>
          <p className="text-gray-300 text-sm">31 more will launch soon</p>
        </div>
      </div>
    </div>
  );
};

export default Cardstat;
