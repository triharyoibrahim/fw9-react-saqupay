import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "../src/pages/home/Home";
import CreatePin from "./pages/auth/CreatePin";
import CreatePinSuccess from "./pages/auth/CreatePinSuccess";
import Login from "../src/pages/auth/Login";
import ResetPassTypeEmail from "./pages/auth/ResetPassTypeEmail";
import ResetPassTypePass from "./pages/auth/ResetPassTypePass";
import Signup from "./pages/auth/SignUp";
import Profile from "../src/pages/profile/Profile";
import PersonalInfo from "./pages/profile/PersonalInfo";
import ManagePhoneNum from "./pages/profile/ManagePhoneNum";
import AddPhone from "./pages/profile/AddPhone";
import ChangePass from "./pages/profile/ChangePass";
import ChangePin from "./pages/profile/ChangePin";
import Topup from "./pages/topup/TopUp";
import Transfer from "../src/pages/transfer/Transfer";
import TransferSuccess from "./pages/transfer/TransferSuccess";
import TransferFailed from "./pages/transfer/TransferFailed";
import TransferInput from "./pages/transfer/TransferInput";
import Confirm from "../src/pages/transfer/Confirm";
import PrivateRoute from "./components/PrivateRoute";

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
