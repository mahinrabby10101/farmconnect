import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function AllCrops() {
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const typeFilter = params.get("type"); // Vegetable, Fruit, Grain

  useEffect(() => {
    const url = `http://localhost:3000/api/crops${typeFilter ? `?type=${typeFilter}` : ""}`;
    axios.get(url)
      .then(res => {
        setCrops(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setCrops([]);
        setLoading(false);
      });
  }, [typeFilter]);

  useEffect(() => {
    let filtered = crops;
    if (search) {
      filtered = filtered.filter(crop =>
        crop.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredCrops(filtered);
  }, [crops, search]);

  if (loading) return <p className="text-center mt-10">Loading crops...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 style={{ fontFamily: "'Pacifico', cursive" }} className="text-2xl flex customBlue font-semibold mb-6 ">
        All Crops <p className="text-sm text-gray-600">
  {filteredCrops.length} crops found
</p> {typeFilter ? `- ${typeFilter}` : ""}
      </h2>

      {/* Search bar */}
      <div className="mb-9 w[300] flex">
        <input
          type="text"
          placeholder="Search crops..."
          className="border p-2 w-full max-w-md rounded"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Crops Grid */}
      {Array.isArray(filteredCrops) && filteredCrops.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCrops.map(crop => (
            <div key={crop._id} className="border rounded shadow hover:shadow-lg overflow-hidden">
              <img src={crop.image} alt={crop.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{crop.name}</h3>
                <p className="text-sm mb-4">{crop.description}</p>
                <button
                onClick={() => navigate(`/crop/${crop._id}`)}
                style={{ backgroundColor: "#116EB0" }} className=" text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 w-full"
              >
                View Details
              </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No results found.</p>
      )}
    </div>
  );
}
