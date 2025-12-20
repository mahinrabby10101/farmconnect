// src/pages/AddCrop.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function AddCrop() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    type: "Vegetable",
    pricePerUnit: "",
    unit: "kg",
    quantity: "",
    description: "",
    location: "",
    image: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("You must be logged in!");
    setSubmitting(true);

    try {
      const payload = {
        ...form,
        pricePerUnit: Number(form.pricePerUnit),
        quantity: Number(form.quantity),
        owner: {
          ownerEmail: user.email,
          ownerName: user.displayName || "Unknown",
        },
      };

      await axios.post("https://farmconnect-ten-green.vercel.app/api/crops", payload);

      alert("Crop added successfully!");
      navigate("/my-posts"); // Redirect to My Posts page
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "Failed to add crop");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center text-customBlue">
        Add New Crop
      </h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          name="name"
          placeholder="Crop Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="Vegetable">Vegetable</option>
          <option value="Fruit">Fruit</option>
          <option value="Grain">Grain</option>
        </select>

        <input
          name="pricePerUnit"
          type="number"
          placeholder="Price per unit"
          value={form.pricePerUnit}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <select
          name="unit"
          value={form.unit}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="kg">kg</option>
          <option value="ton">ton</option>
          <option value="bag">bag</option>
        </select>

        <input
          name="quantity"
          type="number"
          placeholder="Estimated Quantity"
          value={form.quantity}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows={3}
          required
        />

        <button
          type="submit"
          disabled={submitting}
          style={{ backgroundColor: "#116EB0" }} className=" text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          {submitting ? "Submitting..." : "Add Crop"}
        </button>
      </form>
    </div>
  );
}
