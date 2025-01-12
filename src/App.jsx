import React from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Service from "./Components/Service";
import Alanlar from "./Components/Alanlar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import OurCarsPage from "./Pages/OurCarsPage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section />
              <Alanlar />
              <Service />
            </>
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ourCars" element={<OurCarsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
