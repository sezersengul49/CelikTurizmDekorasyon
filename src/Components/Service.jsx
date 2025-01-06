import React from 'react';

const Service = () => {
  return (
    <div className="text-center py-6 mb-10 relative shadow-[0_8px_30px_rgba(0,0,0,0.8)] bg-gray-50">
      {/* Başlık */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Farklı İhtiyaçlar İçin Araç Seçenekleri
      </h2>

      {/* Araçlar */}
      <div className="flex flex-wrap justify-center gap-8 px-4 py-8">
        {/* Vito Aracı */}
        <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[350px]">
          <img
            src="/vito.jpg"
            alt="vip foto"
            className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-700">
            Maximum 7 kişi kapasiteli Vip ve yüksek donanımlı araçlarımız
          </p>
        </div>

        {/* Ducato Minibüs */}
        <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[650px]">
          <img
            src="/ducatominibus_1583937537.png"
            alt="vip foto"
            className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md bg-white"
          />
          <p className="mt-4 text-gray-700">
            Maximum 17 kişi kapasiteli turizm için dizayn edilmiş ve yüksek
            donanımlı araçlarımız
          </p>
        </div>

        {/* Midibüs */}
        <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[400px]">
          <img
            src="/midibüs.webp"
            alt="vip foto"
            className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
          <p className="mt-4 text-gray-700">
            Maximum 32 kişi kapasiteli turizm için dizayn edilmiş konforlu ve
            yüksek donanımlı araçlarımız
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
