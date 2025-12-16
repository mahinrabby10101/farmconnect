const experts = [
    { name: "Dr. Muhammad Raihan", photo: "https://images.unsplash.com/photo-1642975967602-653d378f3b5b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", specialty: "Small Pets" },
    { name: "Imtiyaz Fayaj", photo: "https://images.unsplash.com/photo-1644675272883-0c4d582528d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", specialty: "Dogs & Cats" },
    { name: "Dr.Lily Mily", photo: "https://plus.unsplash.com/premium_photo-1661600153690-2089b79b5d11?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", specialty: "Nutrition" },
];

export default function ExpertVets() {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Meet Our Expert Vets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experts.map((vet, i) => (
                    // 👇 Line 12 (updated)
                    <div key={i} className="border rounded-lg p-4 text-center shadow" data-aos="zoom-in">
                        <img src={vet.photo} alt={vet.name} className="w-32 h-32 object-cover mx-auto rounded-full mb-2" />
                        <h3 className="font-bold">{vet.name}</h3>
                        <p>{vet.specialty}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}