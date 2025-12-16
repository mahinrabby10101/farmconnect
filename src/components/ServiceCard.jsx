import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ service, colorIndex = 0 }) {
  return (
    <div className={`service-card color-${colorIndex} rounded p-4 shadow hover:shadow-lg transition`}>
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="font-bold mt-2">{service.serviceName}</h3>
      <p>Provider: {service.providerName}</p>
      <p>Price: ${service.price}</p>
      <p>Rating: {service.rating}</p>
      <Link
        to={`/service/${service.serviceId}`}
        className="btn btn-primary bg-green-600 mt-2 w-full text-center block"
      >
        View Details
      </Link>
    </div>
  );
}

// Example: render multiple cards
export function ServiceCardList({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={service.serviceId} service={service} colorIndex={index % 6} />
      ))}
    </div>
  );
}
