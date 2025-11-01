import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("sizeHigh");

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (id) => {
    if (window.confirm("Are you sure you want to uninstall this app?")) {
      const updatedApps = installedApps.filter((app) => app.id !== id);
      setInstalledApps(updatedApps);
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    }
  };

  // Sorting logic
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "sizeHigh") return b.size - a.size;
    if (sortOrder === "sizeLow") return a.size - b.size;
    return 0;
  });

  return (
    <div className="bg-white min-h-screen text-center">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-10  rounded-lg ">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your Installed Apps
        </h2>
        <p className="text-gray-600 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>

        {/* Inner Box */}
        <div className=" rounded-lg p-6 text-left">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              {installedApps.length} Apps Found
            </h3>

            <div className="flex items-center gap-2 mt-3 sm:mt-0">
              <label className="text-gray-800 text-sm font-medium">
                Sort by Size:
              </label>
              <select
                className="border border-gray-300 bg-white rounded-md px-3 py-1 text-sm focus:outline-none"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="sizeHigh">High to Low</option>
                <option value="sizeLow">Low to High</option>
              </select>
            </div>
          </div>

          {/* App List */}
          <div className="flex flex-col gap-4  border-gray-300 rounded-lg p-4">
            {sortedApps.length > 0 ? (
              sortedApps.map((app) => (
                <AppCard
                  key={app.id}
                  singleApp={app}
                  onUninstall={() => handleUninstall(app.id)}
                />
              ))
            ) : (
              <p className="text-gray-500 text-center mt-10">
                No installed apps found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;
