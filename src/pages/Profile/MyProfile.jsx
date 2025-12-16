import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

export default function MyProfile() {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to update profile!");
      return;
    }

    try {
      await updateProfile(user, { displayName, photoURL });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!user) {
    return <p className="text-gray-500 mt-10 text-center">Not logged in.</p>;
  }

  return (
    <div className="p-8 max-w-md mx-auto text-center bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">My Profile</h1>

      <div className="flex justify-center mb-4">
        <img
          src={user.photoURL || defaultAvatar}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>

      {!isEditing ? (
        <>
          <p className="text-lg">
            <strong>Name:</strong> {user.displayName || "Anonymous"}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user.email}
          </p>

          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary mt-6 w-full"
          >
            Update Profile
          </button>
        </>
      ) : (
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <div className="flex gap-2 mt-4">
            <button type="submit" className="btn btn-success w-1/2">
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="btn btn-outline w-1/2"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
