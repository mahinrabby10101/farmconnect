import EditCropModal from "./EditCropModal"

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
export default function MyPosts() {
  const { user } = useContext(AuthContext);
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://farmconnect-ten-green.vercel.app/api/my-crops?email=${user.email}`)
        .then(res => setCrops(res.data));
    }
  }, [user]);

  // DELETE
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this crop?")) return;

    await axios.delete(`https://farmconnect-ten-green.vercel.app/api/crops/${id}`);
    setCrops(crops.filter(crop => crop._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-customBlue">My Posts</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {crops.map(crop => (
            <tr key={crop._id} className="text-center border-t">
              <td>{crop.name}</td>
              <td>{crop.type}</td>
              <td>${crop.pricePerUnit}</td>
              <td className="space-x-2">
                <button
                  onClick={() => setSelectedCrop(crop)}
                  className="btn btn-sm btn-info"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(crop._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}
      {selectedCrop && (
        <EditCropModal
          crop={selectedCrop}
          setSelectedCrop={setSelectedCrop}
          setCrops={setCrops}
          crops={crops}
        />
      )}
    </div>
  );
}
