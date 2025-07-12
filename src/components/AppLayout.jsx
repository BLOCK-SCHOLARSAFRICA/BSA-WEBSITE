import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
