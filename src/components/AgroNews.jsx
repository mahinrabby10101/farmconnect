// src/components/AgroNewsLeftImage.jsx
import React from "react";

export default function AgroNewsLeftImage() {
  const news = [
    {
      title: "রাজশাহীতে ধানী জমিতে পুকুর খননে বাঁধা, এক্সকাভেটরের নিচে পড়ে হত্যা",
      date: "12 ঘন্টা আগে",
      snippet: "গতকাল রাতে পুলিশ ঘটনাস্থল থেকে এক্সকাভেটরের চালক আবদুল হামিদকে আটক করেছে।",
      image: "https://images.unsplash.com/photo-1758634057888-7a4f9e50322a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
    {
      title: "হলদে শর্বর বিস্তীর্ণ খেতে শুরু মৌমাছির গুঁড়ুন",
      date: "16 ঘন্টা আগে",
      snippet: "নভেম্বরের মাঝামাঝি সময়ে শর্বর আবদ শুরু হয় এবং প্রায় ১০ দিনের মধ্যে ফলকাটা যায়।",
      image: "https://images.unsplash.com/photo-1564381894446-a4ed22228085?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "মিনিকেট ও নাজিরশাইল জাতের ধান নেই, চাল হয় কিভাবে",
      date: "17 ঘন্টা আগে",
      snippet: "দেশের প্রায় সব বাজারেই বিক্রি হচ্ছে মেশিনে কাটা মিনিকেট ও নাজিরশাইল চাল। কেন মেশিনে চাল পিষন করা হয়?",
      image: "https://images.unsplash.com/photo-1530496216518-a53d24e99c31?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <h2 style={{ fontFamily: "'Pacifico', cursive" }} className="text-3xl font-bold customBlue text-center mb-8">
          Agro News & Blogs
        </h2>
        <div className="space-y-6">
          {news.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Left */}
              <div className="md:w-1/3 w-full h-48 md:h-auto flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Right */}
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-3">{item.snippet}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
