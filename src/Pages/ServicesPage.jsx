import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      {/* Okul Servisleri */}
      <div className="mb-12 flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg" src="/public/servismobile.png" alt="Okul Servisi" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Okul Servisleri</h1>
          <p className="text-lg text-gray-600 mb-6">
            Çelik Turizm olarak, öğrenci taşımacılığı hizmetimizde güven ve konforu bir arada sunuyoruz. Çocuklarınızın güvenliği ve rahatlığı bizim için her şeyden önemlidir. Öğrencilerimizin, okul yolculuklarını güvenli ve rahat bir şekilde gerçekleştirmelerini sağlıyoruz. Araçlarımız düzenli bakımlardan geçer, şoförlerimiz ise eğitimli ve deneyimlidir. Okul servislerimizde çocuklarınızın rahatlığı kadar güvenliği de ön planda tutulur.
          </p>
        </div>
      </div>

      {/* İş Yeri Servisleri */}
      <div className="mb-12 flex flex-col lg:flex-row-reverse items-center lg:space-x-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img className="w-[600px] h-[400px]  object-cover rounded-lg shadow-lg" src="/public/pers.png" alt="İş Yeri Servisi" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">İş Yeri Servisleri</h1>
          <p className="text-lg text-gray-600 mb-6">
            Çelik Turizm, iş yerinizin personel taşımacılığında güvenilir ve konforlu bir çözüm ortağıdır. İşletmelerin en değerli varlıklarından olan çalışanlarınızın işe ulaşımını sorunsuz ve zamanında gerçekleştirmek için profesyonel personel servisi hizmeti sunuyoruz. Çalışanlarınız için esnek servis saatleri ve rota planlaması ile verimli bir ulaşım hizmeti sunuyoruz.
          </p>
        </div>
      </div>

      {/* Turizm Hizmetleri */}
      <div className="mb-12 flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg" src="/public/turizm.jpg" alt="Turizm Hizmetleri" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Turizm Hizmetleri</h1>
          <p className="text-lg text-gray-600 mb-6">
            Çelik Turizm olarak, turizm taşımacılığı alanında geniş bir hizmet yelpazesi sunuyoruz. VIP araçlarımız ile Türkiye’nin en güzel turistik bölgelerine konforlu yolculuklar sağlıyoruz. Kapadokya, Edirne, Abant, Uludağ gibi popüler destinasyonlarda rehber eşliğinde geziler düzenliyoruz. Konforlu araçlarımız ve deneyimli şoförlerimizle, siz değerli misafirlerimize en iyi hizmeti sunmak için buradayız.
          </p>
        </div>
      </div>

      {/* Fuar ve Kongre Hizmetleri */}
      <div className="mb-12 flex flex-col lg:flex-row-reverse items-center lg:space-x-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg" src="/public/fuar.jpg" alt="Fuar ve Kongre Hizmetleri" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Fuar ve Kongre Hizmetleri</h1>
          <p className="text-lg text-gray-600 mb-6">
            Fuar ve kongre organizasyonlarında misafirlerinizi en iyi şekilde ağırlamak için Çelik Turizm olarak her detayla ilgileniyoruz. Havalimanından karşılamadan, fuar alanına ulaşıma kadar her adımda yanınızdayız. Misafirlerinize konforlu, güvenli ve zamanında ulaşım sağlamak için fuar etkinlikleri öncesi ve sonrasında profesyonel araç ve şoför desteği veriyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
