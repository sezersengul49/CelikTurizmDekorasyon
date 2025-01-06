import React, { useState, useEffect } from "react";

const Section = () => {
  const images = [
    "/public/ogrenci.jpeg",
    "/public/okulb.jpeg",
    "/public/araba.1jpg.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fotoğraf geçişi için zamanlayıcı
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 
    // Zamanlayıcıyı temizlemek için
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative py-8 flex justify-center items-center">
      {/* Fotoğraf */}
      <div className="w-[1150px] h-[450px] overflow-hidden flex justify-center items-center">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Sol Ok */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75"
      >
        &#8592;
      </button>

      {/* Sağ Ok */}
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75"
      >
        &#8594;
      </button>
    </section>
  );
};

export default Section;
