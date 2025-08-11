import "./App.css";

import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
