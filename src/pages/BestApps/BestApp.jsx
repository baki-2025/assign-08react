import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AppCard from "../../components/AppCard/AppCard";


const BestApps = () => {
    const navigate = useNavigate();
    const [appsData, setAppsData] = useState([]);


    useEffect(() => {
        fetch("/appsData.json")
            .then((res) => res.json())
            .then((data) => setAppsData(data))
            .catch((err) => console.error("Failed to load apps data:", err));
    }, []);

    const top8Apps = appsData.slice(0, 8);

    return (
        <div className="p-4 max-w-7xl mx-auto bg-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-center text-black">Trending Apps</h2>
            <p className="text-center p-6 text-black" >Explore All Trending Apps on the Market developed by us</p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {top8Apps.map((app) => (
                    <AppCard key={app.id} singleApp={app} />
                ))}
            </div>


            <div className="flex justify-center mt-6">
                <button
                    onClick={() => navigate("/apps")}
                    className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
                >
                    Show All
                </button>
            </div>
        </div>
    );
};

export default BestApps;
