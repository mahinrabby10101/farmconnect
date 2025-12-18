// src/components/SeedsAndFertilizers.jsx
import React from "react";

export default function SeedsAndFertilizers() {
  const seedData = [
    { name: "Tomato Seeds", price: "50 BDT/pack" },
    { name: "Potato Seeds", price: "70 BDT/pack" },
    { name: "Cucumber Seeds", price: "40 BDT/pack" },
  ];

  const fertilizerData = [
    { name: "Urea", price: "400 BDT/50kg" },
    { name: "DAP", price: "900 BDT/50kg" },
    { name: "Compost", price: "200 BDT/bag" },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 style={{ fontFamily: "'Pacifico', cursive" }} className="text-3xl font-bold text-right customBlue mb-8">
          Seeds & Fertilizers
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Seeds */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <h3 style={{ color: "#116EB0" }} className="text-xl font-semibold mb-4 ">Seeds</h3>
            <ul className="space-y-3">
              {seedData.map((seed, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{seed.name}</span>
                  <span style={{ color: "#116EB0" }}  className="font-semibold ">{seed.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Fertilizers */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <h3  style={{ color: "#116EB0" }} className="text-xl font-semibold mb-4 ">Fertilizers</h3>
            <ul className="space-y-3">
              {fertilizerData.map((fert, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{fert.name}</span>
                  <span style={{ color: "#116EB0" }} className="font-semibold">{fert.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
