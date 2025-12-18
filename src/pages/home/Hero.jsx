import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";

export default function Hero() {
  const slides = [
    {
      img: "https://images.unsplash.com/9/fields.jpg?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Smart Farming Solutions",
      subtitle: "Use modern technology to monitor crops, soil, and weather for better harvests",
    },
    {
      img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Helping Farmers Grow",
      subtitle: "Practical farming information tailored for local agricultural needs",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663945778994-11b3201882a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sustainable Crop Growth",
      subtitle: "Grow healthy crops using eco-friendly and data-driven farming practices",
    },
  ];

  return (
    <div className="w-full rounded-lg mb-10">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="relative"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative">
           
            <img
              src={slide.img}
              alt={`Slide ${i}`}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
            />

           
            <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>

           
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
              <h2 style={{ fontFamily: "'Pacifico', cursive" }} className="text-gray-800 text-2xl md:text-5xl font-bold drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-gray-800 text-sm md:text-lg drop-shadow-md mt-2">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
