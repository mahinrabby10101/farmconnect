import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function MyInterests() {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://farmconnect-ten-green.vercel.app/api/my-interests?email=${user.email}`)
        .then(res => setInterests(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-customBlue">My Interests</h2>

      {interests.length ? (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th>Crop Name</th>
              <th>Owner</th>
              <th>Quantity</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {interests.map(i => (
              <tr key={i._id} className="text-center border-t">
                <td>{i.cropName}</td>
                <td>{i.ownerName}</td>
                <td>{i.quantity}</td>
                <td>{i.message}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded ${
                      i.status === "pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : i.status === "accepted"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {i.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-4">You have not sent any interests yet.</p>
      )}
    </div>
  );
}
