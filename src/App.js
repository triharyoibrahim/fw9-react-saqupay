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
import PersonalInfo from "../src/pages/profile/Personalinfo";
import ManagePhoneNum from "../src/pages/profile/Managephonenum";
import AddPhone from "../src/pages/profile/Addphone";
import ChangePass from "../src/pages/profile/Changepass";
import ChangePin from "../src/pages/profile/Changepin";
import Topup from "../src/pages/topup/Topup";
import Transfer from "../src/pages/transfer/Transfer";
import TransferSuccess from "../src/pages/transfer/Transfersuccess";
import TransferFailed from "../src/pages/transfer/Transferfailed";
import TransferInput from "../src/pages/transfer/Transferinput";
import Confirm from "../src/pages/transfer/Confirm";

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

        {/* Profile -> Personal info */}
        <Route path="/Personalinfo" element={<PersonalInfo />} />
        <Route path="/Managephonenum" element={<ManagePhoneNum />} />
        <Route path="/Addphone" element={<AddPhone />} />

        {/* Profile -> Change Password */}
        <Route path="/Changepass" element={<ChangePass />} />

        {/* Profile -> Change Pin */}
        <Route path="/Changepin" element={<ChangePin />} />

        {/* Topup */}
        <Route path="/Topup" element={<Topup />} />

        {/* Transfer */}
        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/Transfer/success" element={<TransferSuccess />} />
        <Route path="/Transfer/failed" element={<TransferFailed />} />
        <Route path="/Transfer/confirm" element={<Confirm />} />
        <Route path="/Transfer/input" element={<TransferInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
