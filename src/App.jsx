import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import AboutUs from "./pages/AboutUs";
import Program from "./pages/Programs";
import Events from "./pages/Events";
import Programs from "./pages/Programs";
import BLOCKchampions from "./pages/Blockchampions";

function App() {
  return (
    <div>
      <Routes>
        {/* app layout */}
        <Route element={<AppLayout />}>
          <Route path="/home-page" element={<HomePage />} />
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
