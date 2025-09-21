import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./components/Orders";
import Profiles from "./components/Profiles";
import Products from "./components/Products"
import FinanceAnalysis from "./components/FinanceAnalysis";
import Navbar from '../layout/Navbar'

const App = () => {
  const mainContentStyle = {
    marginLeft: "220px", // prevent overlap with sidebar
    marginTop: "3.5rem", // prevent overlap with navbar
    padding: "1rem",
  };

  return (
    <div>
      <Navbar/>
     
      <div style={mainContentStyle}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/FinanceAnalysis" element={<FinanceAnalysis />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Profiles" element={<Profiles />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
