import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import AboutUs from "./pages/AboutUs";
import Program from "./pages/Programs";
import Events from "./pages/Events";
import BLOCKchampions from "./pages/BLOCKchampions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Routes>
        {/* app layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/events" element={<Events />} />
          <Route path="/block-champions" element={<BLOCKchampions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
