import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: 'https://farm4.staticflickr.com/3224/3081748027_0ee3d59fea_z_d.jpg', title: 'Summer Collection', description: 'Discover our new summer styles' },
    { id: 2, image: 'https://farm8.staticflickr.com/7377/9359257263_81b080a039_z_d.jpg', title: 'New Arrivals', description: 'Check out our latest products' },
    { id: 3, image: 'https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg', title: 'Special Offers', description: 'Limited time discounts on selected items' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl">{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;