import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

import Converter from "./Converter/Converter";
import Currencies from "./Currencies/Currencies";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Currencies />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
