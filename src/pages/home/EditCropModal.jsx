import axios from "axios";
import { useState } from "react";

export default function EditCropModal({ crop, setSelectedCrop, crops, setCrops }) {
  const [name, setName] = useState(crop.name);
  const [pricePerUnit, setPricePerUnit] = useState(crop.pricePerUnit);

  const handleUpdate = async () => {
    const updatedCrop = {
      name,
      pricePerUnit,
    };

    const res = await axios.patch(
      `https://farmconnect-ten-green.vercel.app/api/crops/${crop._id}`,
      updatedCrop
    );

    // update UI instantly
    setCrops(
      crops.map(c =>
        c._id === crop._id ? { ...c, ...updatedCrop } : c
      )
    );

    setSelectedCrop(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Edit Crop</h2>

        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="number"
          value={pricePerUnit}
          onChange={e => setPricePerUnit(Number(e.target.value))}
          className="border p-2 w-full mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setSelectedCrop(null)}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
