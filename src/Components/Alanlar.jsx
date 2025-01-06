import React from 'react';
import { Link } from 'react-router-dom';

const Alanlar = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 p-4 mb-8">
      {/* Okul Servisleri */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-4 bg-gray-300 border"></div>
          <h1 className="text-xl font-bold text-gray-500">Okul Servisleri</h1>
        </div>
        {/* <Link to={"/about"}>Hakkımızda</Link> */}
        <Link to={"/services"}>
        <img
          className="w-full h-48 object-cover border border-gray-400 rounded-md"
          src="/public/servismobile.png"
          alt="Okul Servisi"
        />
        </Link>
      </div>

      {/* İş Yeri Servisleri */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-4 bg-gray-300 border"></div>
          <h1 className="text-xl font-bold text-gray-500">İş Yeri Servisleri</h1>
        </div>
        <Link to={"/services"}>
        <img
          className="w-full h-48 object-cover border border-gray-700 rounded-md"
          src="/public/pers.png"
          alt="İş Yeri Servisi"
        />
        </Link>
      </div>

      {/* Turizm Hizmetleri */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-4 bg-gray-300 border"></div>
          <h1 className="text-xl font-bold text-gray-500">Turizm Hizmetleri</h1>
        </div>
        <Link to={"/services"}>
        <img
          className="w-full h-48 object-cover border border-gray-700 rounded-md"
          src="/public/turizm.jpg"
          alt="Turizm Hizmeti"
        /></Link>
      </div>

      {/* Fuar ve Kongre Hizmetleri */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-4 bg-gray-300 border"></div>
          <h1 className="text-xl font-bold text-gray-500">
            Fuar ve Kongre Hizmetleri
          </h1>
        </div>
        <Link to={"/services"}>
        <img
          className="w-full h-48 object-cover border border-gray-700 rounded-md"
          src="/public/fuar.jpg"
          alt="Fuar Hizmeti"
        />
        </Link>
      </div>
    </div>
  );
};

export default Alanlar;
