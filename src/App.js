import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/Landingpage";
import Home from "../src/pages/home/Home";
import CreatePin from "../src/pages/auth/Createpin";
import CreatePinSuccess from "../src/pages/auth/Createpinsuccess";
import Login from "../src/pages/auth/Login";
import ResetPassTypeEmail from "../src/pages/auth/Resetpasstypeemail";
import ResetPassTypePass from "../src/pages/auth/Resetpasstypepass";
import Signup from "../src/pages/auth/Signup";
import Profile from "../src/pages/profile/Profile";
import Topup from "../src/pages/topup/Topup";
import Transfer from "../src/pages/transfer/Transfer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LandingPage */}
        <Route path="/" element={<LandingPage />} />

        {/* Home */}
        <Route path="/Home" element={<Home />} />

        {/* Auth */}
        <Route path="/Createpin" element={<CreatePin />} />
        <Route path="/Createpin/Success" element={<CreatePinSuccess />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resetpass" element={<ResetPassTypeEmail />} />
        <Route path="/Resetpass/Typepass" element={<ResetPassTypePass />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Profile */}
        <Route path="/Profile" element={<Profile />} />

        {/* Topup */}
        <Route path="/Topup" element={<Topup />} />

        {/* Transfer */}
        <Route path="/Transfer" element={<Transfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
