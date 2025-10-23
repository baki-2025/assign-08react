import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setApp(found);

        const installed =
          JSON.parse(localStorage.getItem("installedApps")) || [];
        setIsInstalled(installed.some((a) => a.id === Number(id)));
      });
  }, [id]);

  if (!app)
    return (
      <p className="w-[1600px] h-[733px] text-center mt-10 text-gray-500">
        Loading...
      </p>
    );

  // ✅ FIXED: Properly close handleInstall function
  const handleInstall = () => {
    if (isInstalled) return;

    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    installed.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installed));
    setIsInstalled(true);

    alert("App installed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-200 shadow-lg rounded-xl p-6 mt-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Left: Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{app.title}</h2>
          <p className="text-gray-500 text-sm mb-4">
            Developed by{" "}
            <span className="text-blue-600">{app.companyName}</span>
          </p>

          <div className="flex flex-wrap gap-6 mb-4">
            <div className="flex items-center gap-2">
              <img src={downloadsIcon} alt="" className="w-5 h-5" />
              <span className="text-gray-700 font-semibold">
                {app.downloads}M
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={ratingsIcon} alt="" className="w-5 h-5" />
              <span className="text-gray-700 font-semibold">
                {app.ratingAvg}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={reviewsIcon} alt="" className="w-5 h-5" />
              <span className="text-gray-700 font-semibold">{app.reviews}K</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-6 py-2 rounded-md text-white font-semibold ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Bar Chart */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Ratings</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={app.ratings} layout="vertical">
            <XAxis type="number" hide />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#f97316"
              barSize={25}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;



