// import React, { useEffect, useState } from "react";
// import AppCard from "../../components/AppCard/AppCard";

// const MyInstallation = () => {
//   const [installedApps, setInstalledApps] = useState([]);
//   const [sortOrder, setSortOrder] = useState("sizeHigh");

//   useEffect(() => {
//     const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     setInstalledApps(savedApps);
//   }, []);

//   const handleUninstall = (id) => {
//     if (window.confirm("Are you sure you want to uninstall this app?")) {
//       const updatedApps = installedApps.filter((app) => app.id !== id);
//       setInstalledApps(updatedApps);
//       localStorage.setItem("installedApps", JSON.stringify(updatedApps));
//     }
//   };

//   const sortedApps = [...installedApps].sort((a, b) => {
//     if (sortOrder === "sizeHigh") return b.size - a.size;
//     if (sortOrder === "sizeLow") return a.size - b.size;
//     return 0;
//   });

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen text-center">
//       <h2 className="text-3xl font-bold text-black mb-6">Your Installed Apps</h2>
//       <p className="text-black">Explore All Trending Apps on the Market developed by us</p>
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left: App Cards */}
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//           {sortedApps.map((app) => (
//             <AppCard
//               key={app.id}
//               singleApp={app}
//               onUninstall={() => handleUninstall(app.id)}
//             />
//           ))}
//         </div>

//         {/* Right: Sort Dropdown */}
//         <div className="w-full lg:w-64 flex flex-col gap-3">
//           <label className="text-gray-900 font-semibold">Sort By Size:</label>
//           <select
//             className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option className="text-black" value="sizeHigh">High to Low</option>
//             <option className="text-black" value="sizeLow">Low to High</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyInstallation;





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

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "sizeHigh") return b.size - a.size;
    if (sortOrder === "sizeLow") return a.size - b.size;
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Installed Apps</h2>
      <p className="text-gray-600 mb-8">
        Explore all trending apps on the market developed by us
      </p>

      {/* Sort + Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <p className="text-sm text-gray-700">
          {installedApps.length} Apps Found
        </p>
        <div className="flex items-center gap-2">
          <label className="text-gray-900 font-medium text-sm">Sort by Size:</label>
          <select
            className="border border-gray-300 bg-white rounded-md px-3 py-1 text-sm focus:outline-none"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option className="text-black" value="sizeHigh">
              High to Low
            </option>
            <option className="text-black" value="sizeLow">
              Low to High
            </option>
          </select>
        </div>
      </div>

      {/* App List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <AppCard
              key={app.id}
              singleApp={app}
              onUninstall={() => handleUninstall(app.id)}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center mt-10">
            No installed apps found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyInstallation;



