import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {

  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path="" element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
