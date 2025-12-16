import ServiceCard from "../components/ServiceCard";

const services = [
  { serviceId: 1, serviceName: "Grooming", providerName: "PetCare", price: 50, rating: 4.5, image: "/images/grooming.jpg" },
  { serviceId: 2, serviceName: "Vet Checkup", providerName: "VetPlus", price: 70, rating: 4.8, image: "/images/vet.jpg" },
  { serviceId: 3, serviceName: "Pet Walking", providerName: "HappyPaws", price: 30, rating: 4.2, image: "/images/walking.jpg" },
  { serviceId: 4, serviceName: "Pet Training", providerName: "TrainWell", price: 90, rating: 4.9, image: "/images/training.jpg" },
  { serviceId: 5, serviceName: "Pet Sitting", providerName: "SitterPro", price: 60, rating: 4.6, image: "/images/sitting.jpg" },
  { serviceId: 6, serviceName: "Pet Boarding", providerName: "BoardHappy", price: 80, rating: 4.7, image: "/images/boarding.jpg" },
];

export default function ServicesPage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, idx) => (
        <ServiceCard key={service.serviceId} service={service} index={idx} />
      ))}
    </div>
  );
}
