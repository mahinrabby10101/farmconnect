import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/pets-data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.serviceId === parseInt(id));
        setService(found);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!service) return <p className="p-10 text-center">Loading service...</p>;

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success(`Service booked successfully for ${name}!`);
    setName("");
    setEmail("");
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-64 object-cover rounded"
      />

      <h1 className="text-3xl font-bold mt-4">{service.serviceName}</h1>
      <p className="mt-2"><strong>Provider:</strong> {service.providerName}</p>
      <p><strong>Email:</strong> {service.providerEmail}</p>
      <p><strong>Price:</strong> ${service.price}</p>
      <p><strong>Rating:</strong> {service.rating}</p>
      <p className="mt-2"><strong>Description:</strong> {service.description}</p>
      <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
      <p><strong>Category:</strong> {service.category}</p>

      <form onSubmit={handleBooking} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Book Now
        </button>
      </form>
    </div>
  );
}
