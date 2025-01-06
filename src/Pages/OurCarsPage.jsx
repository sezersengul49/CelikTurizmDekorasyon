import React from 'react';

const OurCarsPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* İlk Araç */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="/vito.jpg"
            alt="Mercedes Benz"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Mercedes Benz Sprinter
          </h3>
          <p className="text-gray-600 mb-4">
            Mercedes Benz Sprinter, uzun yolculuklar için mükemmel konfor ve güvenlik sunan, geniş iç hacmi ile büyük gruplar için ideal bir araçtır.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Geniş iç mekan</li>
            <li>Konforlu koltuklar</li>
            <li>Yüksek güvenlik önlemleri</li>
            <li>İleri teknoloji donanımlar</li>
          </ul>
        </div>

        {/* İkinci Araç */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="/2021-Volkswagen-Crafter-kampanyası.jpg"
            alt="Volkswagen Crafter"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Volkswagen Crafter
          </h3>
          <p className="text-gray-600 mb-4">
            Volkswagen Crafter, şehir içi ve şehirlerarası yolculuklar için uygun olan, mükemmel manevra kabiliyetine sahip bir araçtır.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Hızlı ve çevik</li>
            <li>Yük taşıma kapasitesi yüksek</li>
            <li>Verimli yakıt kullanımı</li>
            <li>Modern tasarım</li>
          </ul>
        </div>

        {/* Üçüncü Araç */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="/Transit-minibüs-webp.webp"
            alt="Ford Transit"
            className="w-[350px] h-[250px] object-cover rounded-md mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Ford Transit
          </h3>
          <p className="text-gray-600 mb-4">
            Ford Transit, çok yönlü kullanım alanı ve dayanıklılığı ile bilinir. Hem şehir içi hem de uzun yolculuklar için uygun bir seçimdir.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Dayanıklı ve uzun ömürlü</li>
            <li>Çeşitli iç mekan düzenlemeleri</li>
            <li>Konforlu sürüş</li>
            <li>Geniş bagaj alanı</li>
          </ul>
        </div>

        {/* Dördüncü Araç */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="/toyotaa.webp"
            alt="Toyota Hiace"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Toyota Hiace
          </h3>
          <p className="text-gray-600 mb-4">
            Toyota Hiace, güvenlik özellikleri ve geniş iç mekanıyla tanınır. Uygun fiyatı ile büyük gruplar için pratik bir tercihtir.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Geniş ve ferah iç mekan</li>
            <li>Yüksek güvenlik özellikleri</li>
            <li>Güçlü motor kapasitesi</li>
            <li>Uygun maliyetli</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default OurCarsPage;
