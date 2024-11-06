import React from "react";
// import quality from './assets/quality_food'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
