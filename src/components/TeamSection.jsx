// src/components/TeamSection.jsx
import React from "react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "MegaloCartel",
      role: "Order Processor",
      description: "Handles all customer orders efficiently, ensuring timely processing and accuracy.",
      img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
    },
    {
      name: "Muhammad Usman",
      role: "Transport Handler",
      description: "Responsible for logistics and safe transport of goods to customers.",
      img: "https://images.unsplash.com/photo-1484688493527-670f98f9b195?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Md Sohel",
      role: "Account Manager",
      description: "Manages accounts, billing, and customer relationships professionally.",
      img: "https://images.unsplash.com/photo-1680184984902-94042b5550b6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jalaskhan",
      role: "Inspector",
      description: "Ensures product quality and compliance with standards before shipment.",
      img: "https://images.unsplash.com/photo-1564355140730-8ca455272c33?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="mt-10 px-4 md:px-10">
      <h2 style={{ fontFamily: "'Pacifico', cursive" }} className="text-3xl font-bold mb-6 text-center customBlue">
        Our Dedicated Team Members
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-[#116EB0] p-6 rounded-lg text-white shadow-md hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="font-medium italic mb-2">{member.role}</p>
            <p className="text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
