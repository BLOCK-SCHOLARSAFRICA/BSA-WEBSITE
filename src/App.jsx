import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Programs from "./pages/Programs";

function App() {
  return (
    <div>
      <Routes>
        {/* app layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/programs" element={<Programs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
