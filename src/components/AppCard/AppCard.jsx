import React from "react";
import { useNavigate } from "react-router";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";


 


const AppCard = ({ singleApp, isInstalled }) => {
  const { id, image, title, description,  ratingAvg } = singleApp;
  const navigate = useNavigate();
 
  

  // Short description
  const shortDescription =
    description.length > 40 ? description.substring(0, 40) + "..." : description;

  // Navigate to AppDetails when clicked
  const handleClick = () => {
    navigate(`/apps/${id}`);
  };
  

  return (
    <div
      onClick={handleClick}
       
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col relative"
    >
      {/* Image */}
      <div className="w-full h-40 bg-gray-200 rounded-t-xl overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Title + short desc */}
      <div className="px-3 py-2">
        <p className="text-gray-800 text-sm truncate">
          {title} : <span className="text-gray-500">{shortDescription}</span>
        </p>
      </div>

      {/* Stats */}
      <div className="px-3 pb-3 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img src={downloadsIcon} alt="Downloads" className="w-4 h-4" />
          <span className="text-sm text-gray-500">9M</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={ratingsIcon} alt="Rating" className="w-4 h-4" />
          <span className="text-sm text-gray-500">{ratingAvg || "N/A"}</span>
        </div>
        
      </div>

      {/* Installed badge */}
      {isInstalled && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Installed
           
        </span>
      )}
    </div>
  );
};

export default AppCard;

