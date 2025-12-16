import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/pets-data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Popular Winter Care Services</h2>
      {services.length === 0 ? (
        <p>Loading services...</p>
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