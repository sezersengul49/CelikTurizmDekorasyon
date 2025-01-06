import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-6 ">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-3xl w-full text-center mt-20 xl:mt-[-75px] ">
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 mb-6">
          ÇELİK TURİZM DEKORASYON
        </h1>

        {/* İçerik */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          1999 yılında bireysel olarak başladığımız turizm ve taşımacılık
          sektöründeki ilerleyişimizi, 2004 yılında kurumsallaşarak resmi bir
          konuma dönüştürdük. Her geçen gün kurumsallık anlayışımızı ilerleterek
          Çelik Turizm Dekorasyon olarak Turizm Taşımacılığı için gerekli tüm evraklara
          sahip durumdayız. Araçlarımızın tamamı yüksek modelli, bakımları
          düzenli olarak yapılan ve son derece konforlu araçlardır.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Çelik Turizm Dekorasyon olarak turizm taşımacılığı sektöründe adım adım
          kendimizi geliştirmekteyiz. Hem geniş araç filomuz hem de profesyonel
          çalışma arkadaşlarımız ile haftanın 7 günü, 24 saat hizmet vermeye
          hazırız.
        </p>

        {/* İmza */}
        <h2 className="text-xl font-bold text-gray-800 mt-8">Turgut Çelik</h2>
        <p className="text-gray-600">Kurucu</p>
      </div>
    </div>
  );
};

export default AboutPage;
