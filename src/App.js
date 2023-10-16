import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import Header from "./Header";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element = {<HomePage  />} />
          <Route path="/login" element = {<h1>Login</h1>} />
          <Route path="/checkout" element = {<Checkout />} />
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
