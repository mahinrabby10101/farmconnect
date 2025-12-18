// src/components/CropProtection.jsx
import React from "react";

export default function CropProtection() {
  const tips = [
    {
      title: "Pest Management",
      description: "Use organic pesticides or natural predators to control pests safely without harming the soil.",
      color: "bg-green-100",
    },
    {
      title: "Crop Rotation",
      description: "Rotate crops each season to prevent soil depletion, reduce pests, and improve yield.",
      color: "bg-yellow-100",
    },
    {
      title: "Weather Protection",
      description: "Shield young plants from extreme sun, frost, or heavy rain using nets or protective covers.",
      color: "bg-blue-100",
    },
    {
      title: "Regular Inspection",
      description: "Check crops frequently for early signs of disease or pest infestation to act promptly.",
      color: "bg-red-100",
    },
  ];

  return (
    <div className="mt-10 px-4 md:px-10">
      <h2 style={{ fontFamily: "'Pacifico', cursive" }} className="text-3xl font-bold mb-6 customBlue ">Crop Protection Tips. . . </h2>

      <div className="grid md:grid-cols-1 gap-6">
        {tips.map((tip, i) => (
          <div
            key={i}
            className={`${tip.color} p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300`}
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
