import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini işleyebilirsiniz, örneğin bir API'ye gönderilebilir
    alert("Mesajınız gönderildi!");
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Sol Taraf - Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            Bize Ulaşın
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefon Numarası
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mesajınız
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold focus:outline-none hover:bg-indigo-700"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>

        {/* Sağ Taraf - İletişim Bilgileri */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Google Maps Haritası */}
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            Konumumuz
          </h2>
          <div className="mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.090664167469!2d28.67623801531937!3d41.0748520792951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfd3cd0bcd290d%3A0xc8c360c8e8b17d98!2sZiya%20G%C3%B6kalp%20Mahallesi%20%C5%9Eehit%20Cahar%20Dudayev%20Caddesi%20No%3A10%2C%20Ba%C5%9Fak%C5%9Fehir%2C%20%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1673025648276!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            İletişim Bilgilerimiz
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Adres:</strong> Ziya Gökalp Mahallesi Şehit Cahar Dudayev Caddesi No:10 Başakşehir / İSTANBUL
            </li>
            <li>
              <strong>Tel:</strong> 0216 470 05 15 - <strong>Fax:</strong> 0216 470 05 15
            </li>
            <li>
              <strong>Cep:</strong> 0532 428 13 49 (Turgut Çelik)
            </li>
            <li>
              <strong>Web:</strong> <a href="https://www.celikturizmdekorasyon.com" className="text-indigo-600 hover:text-indigo-800">www.celikturizmdekorasyon.com</a>
            </li>
            <li>
              <strong>Mail:</strong> <a href="mailto:Turgut@celiktur.com" className="text-indigo-600 hover:text-indigo-800">Turgut@celiktur.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
