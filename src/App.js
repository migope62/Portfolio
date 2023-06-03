import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Projets from "./pages/projets/Projets";
import Config from "./pages/config/Config";
import Mentionlegales from "./pages/info/Mentionlegales";
import Declaration from "./pages/info/Declaration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Mesprojets" element={<Projets />} />
          <Route path="/Maconfig" element={<Config />} />
          <Route path="/Mentionlegales" element={<Mentionlegales />} />
          <Route path="/Declaration" element={<Declaration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
