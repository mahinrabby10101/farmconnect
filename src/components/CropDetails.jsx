import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function CropDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchCrop = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/crops/${id}`);
        setCrop(res.data);
      } catch (err) {
        console.error(err);
        setCrop(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCrop();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!crop) return <p className="text-center mt-10">Crop not found.</p>;
  if (!user) return <p className="text-center mt-10">Please log in to view this page.</p>;

  const isOwner = user.email === crop.owner?.ownerEmail;
  const existingInterest = crop.interests?.find(i => i.userEmail === user.email);
  const totalPrice = quantity * crop.pricePerUnit;

  const handleSubmitInterest = async () => {
    if (quantity < 1) return alert("Quantity must be at least 1");
    if (!window.confirm("Submit interest for this crop?")) return;

    setSubmitting(true);
    try {
      await axios.post(`http://localhost:3000/api/crops/${id}/interests`, {
        userEmail: user.email,
        userName: user.displayName || user.name,
        quantity,
        message
      });
      alert("Interest submitted!");
      // Refresh crop data
      const updated = await axios.get(`http://localhost:3000/api/crops/${id}`);
      setCrop(updated.data);
      setMessage("");
      setQuantity(1);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to submit interest");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Crop Info */}
      <div className="md:flex gap-6">
        <img src={crop.image} alt={crop.name} className="w-full md:w-1/2 h-64 object-cover rounded" />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{crop.name}</h2>
          <p><strong>Type:</strong> {crop.type}</p>
          <p><strong>Price per {crop.unit}:</strong> ${crop.pricePerUnit}</p>
          <p><strong>Location:</strong> {crop.location}</p>
          <p className="mt-2">{crop.description}</p>
        </div>
      </div>

      {/* Interest Form */}
      {!isOwner && !existingInterest && (
        <div className="mt-6 border p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Send Interest</h3>
          <input type="number" min={1} value={quantity} onChange={e => setQuantity(Number(e.target.value))}
            className="border p-2 w-full mb-2 rounded" placeholder={`Quantity (${crop.unit})`} />
          <textarea value={message} onChange={e => setMessage(e.target.value)}
            className="border p-2 w-full mb-2 rounded" placeholder="Message" />
          <p className="mb-2">Total Price: ${totalPrice}</p>
          <button disabled={submitting} onClick={handleSubmitInterest}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {submitting ? "Submitting..." : "Submit Interest"}
          </button>
        </div>
      )}

      {!isOwner && existingInterest && (
        <p className="mt-4 text-green-600 font-semibold">You’ve already sent an interest for this crop.</p>
      )}

      {/* Received Interests */}
      {isOwner && (
        <div className="mt-6 border p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Received Interests</h3>
          {crop.interests?.length ? (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-2 py-1">Buyer</th>
                  <th className="border px-2 py-1">Quantity</th>
                  <th className="border px-2 py-1">Message</th>
                  <th className="border px-2 py-1">Status</th>
                  <th className="border px-2 py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {crop.interests.map(i => (
                  <tr key={i._id}>
                    <td className="border px-2 py-1">{i.userName}</td>
                    <td className="border px-2 py-1">{i.quantity}</td>
                    <td className="border px-2 py-1">{i.message}</td>
                    <td className="border px-2 py-1">{i.status}</td>
                    <td className="border px-2 py-1 flex gap-2">
                      {i.status === "pending" && (
                        <>
                          <button onClick={async () => {
                            await axios.patch(`http://localhost:3000/api/crops/${id}/interests/${i._id}`, { status: "accepted" });
                            const updated = await axios.get(`http://localhost:3000/api/crops/${id}`);
                            setCrop(updated.data);
                          }}
                          className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Accept</button>
                          <button onClick={async () => {
                            await axios.patch(`http://localhost:3000/api/crops/${id}/interests/${i._id}`, { status: "rejected" });
                            const updated = await axios.get(`http://localhost:3000/api/crops/${id}`);
                            setCrop(updated.data);
                          }}
                          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Reject</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (<p>No interests received yet.</p>)}
        </div>
      )}
    </div>
  );
}
