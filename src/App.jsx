import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderStatus from "./components/OrderStatus";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order-status" element={<OrderStatus/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
