// App.jsx - Composant principal qui gère la navigation entre les pages avec React Router.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property/";
import Error from "./pages/Error";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
