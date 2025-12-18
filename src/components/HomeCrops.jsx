import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomeCrops() {
  const [crops, setCrops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/crops?limit=6")
      .then(res => setCrops(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4 mt-14">
      <h2
        style={{ fontFamily: "'Pacifico', cursive" }}
        className="text-2xl font-semibold mb-6 customBlue text-center"
      >
        Popular Crops
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {crops.map(crop => (
          <div
            key={crop._id}
            className="border rounded shadow hover:shadow-lg overflow-hidden"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{crop.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {crop.description}
              </p>

              {/* View Details button */}
              <button
                onClick={() => navigate(`/crop/${crop._id}`)}
                style={{ backgroundColor: "#116EB0" }} className="text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 w-full"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All button */}
      <div className="flex item-right mt-8">
        <button
          onClick={() => navigate("/allcrops")}
          style={{ backgroundColor: "#116EB0" }} className="bg-customBlue text-white px-6 py-2 rounded hover:bg-blue-700 transition w-56"
        >
          View All
        </button>
      </div>
    </div>
  );
}
