export default function WinterTips() {
    const tips = [
      "Keep your pets indoors during extreme cold.",
      "Provide warm bedding near heat sources.",
      "Use pet-safe moisturizers for paw care.",
      "Dress small dogs in winter coats.",
    ];
  
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Winter Care Tips for Pets</h2>
      
        <ul className="list-disc list-inside space-y-2" data-aos="fade-right"> 
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    );
  }