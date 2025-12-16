import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AddCrops = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const type = form.type.value;
    const price = parseInt(form.price.value);
    const unit = form.unit.value;
    const quantity = form.quantity.value;
    const harvestDate = form.harvestDate.value;
    const description = form.description.value;
    const location = form.location.value;
    const email = form.email.value;
    const image = form.image.value // get the file object

    // You can now send this to your backend or Firebase
    const  formData = {
      name,
      type,
      price,
      unit,
      quantity,
      harvestDate,
      description,
      location,
      email,
      image,
    };
    console.log(formData)
    axios.post('http://localhost:3000/AddCrops', formData)
    .then(res=>{
        console.log(res);
    })
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Add Crop</h2>

      <div className="space-y-4">
        {/* Crop Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Crop Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            name="type"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select type</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Grain">Grain</option>
          </select>
        </div>

        {/* Price & Unit */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price per Unit
            </label>
            <input
              type="number"
              name="price"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Unit
            </label>
            <select
              name="unit"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="kg">kg</option>
              <option value="ton">ton</option>
              <option value="bag">bag</option>
            </select>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estimated Quantity
          </label>
          <input
            type="number"
            name="quantity"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Harvest Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expected Harvest Date
          </label>
          <input
            type="date"
            name="harvestDate"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Image */}
        <div>
  <label className="block text-sm font-medium text-gray-700">
    Crop Image URL
  </label>
  <input
    type="text"
    name="image"
    placeholder="https://example.com/image.jpg"
    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
</div>


        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Submit Crop
        </button>
      </div>
    </form>
  );
};

export default AddCrops;
