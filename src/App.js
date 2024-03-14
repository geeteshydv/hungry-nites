import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
