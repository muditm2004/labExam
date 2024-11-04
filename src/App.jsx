import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/Pages/Home';
import Login from'./assets/Pages/Login';
import Signup from './assets/Pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
