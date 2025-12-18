import React from "react";
import { useNavigate } from "react-router-dom";

const resources = [
  { title: "Vegetable", image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=500" },
  { title: "Fruit", image: "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=500" },
  { title: "Grain", image: "https://images.unsplash.com/photo-1439086245660-e617c4291020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function ResourceCards() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h2 style={{ fontFamily: "'Pacifico', cursive" }} className="text-2xl font-semibold mb-6 customBlue">
        From Farm to Table
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {resources.map((res, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/allcrops?type=${res.title}`)}
            className="cursor-pointer relative border rounded overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img src={res.image} alt={res.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
              <h3 className="text-white text-lg font-bold">{res.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
