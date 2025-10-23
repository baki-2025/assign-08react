import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch app data
  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data);
      })
      .catch((err) => console.error("Error loading apps:", err))
      .finally(() => setLoading(false));
  }, []);

  // Debounced search filter
  useEffect(() => {
    const timeout = setTimeout(() => {
      const result = apps.filter(
        (app) =>
          app.title.toLowerCase().includes(search.toLowerCase()) ||
          app.companyName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(result);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, apps]);

  return (
    <div className="bg-white text-black min-h-screen py-10 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Our All Applications</h1>
        <p className="text-gray-600 text-lg p-4">
          Explore all trending apps on the market developed by us. We code for millions
        </p>
      </div>

      {/* Apps Found + Search */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-4 border-b pb-3">
        {/* Apps Count */}
        <p className="font-semibold text-gray-700 text-lg">
          {filteredApps.length > 0
            ? `(${filteredApps.length}) Apps Found`
            : "No Apps Found"}
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      {/* App Cards */}
      {loading ? (
        <p className="text-center text-gray-500 mt-10"><span className="loading loading-bars loading-xl"></span></p>
      ) : filteredApps.length > 0 ? (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} singleApp={app} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No apps found matching your search 
        </p>
      )}
    </div>
  );
};

export default Apps;
