import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/pets-data.json") 
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  return (
    <section className="p-10 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Popular Winter Care Services
      </h2>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.serviceId} data-aos="fade-up">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
