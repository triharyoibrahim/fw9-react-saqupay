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
        <Route
          path="/Createpin"
          element={
            <PrivateRoute>
              <CreatePin />
            </PrivateRoute>
          }
        />
        <Route
          path="/Createpin/Success"
          element={
            <PrivateRoute>
              <CreatePinSuccess />
            </PrivateRoute>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resetpass" element={<ResetPassTypeEmail />} />
        <Route path="/Resetpass/Typepass" element={<ResetPassTypePass />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Profile */}
        <Route
          path="/Profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Profile -> Personal info */}
        <Route
          path="/Personalinfo"
          element={
            <PrivateRoute>
              <PersonalInfo />
            </PrivateRoute>
          }
        />
        <Route
          path="/Managephonenum"
          element={
            <PrivateRoute>
              <ManagePhoneNum />
            </PrivateRoute>
          }
        />
        <Route
          path="/Addphone"
          element={
            <PrivateRoute>
              <AddPhone />
            </PrivateRoute>
          }
        />

        {/* Profile -> Change Password */}
        <Route
          path="/Changepass"
          element={
            <PrivateRoute>
              <ChangePass />
            </PrivateRoute>
          }
        />

        {/* Profile -> Change Pin */}
        <Route
          path="/Changepin"
          element={
            <PrivateRoute>
              <ChangePin />
            </PrivateRoute>
          }
        />

        {/* Topup */}
        <Route
          path="/Topup"
          element={
            <PrivateRoute>
              <Topup />
            </PrivateRoute>
          }
        />

        {/* Transfer */}
        <Route
          path="/Transfer"
          element={
            <PrivateRoute>
              <Transfer />
            </PrivateRoute>
          }
        />
        <Route
          path="/Transfer/success"
          element={
            <PrivateRoute>
              <TransferSuccess />
            </PrivateRoute>
          }
        />
        <Route
          path="/Transfer/failed"
          element={
            <PrivateRoute>
              <TransferFailed />
            </PrivateRoute>
          }
        />
        <Route
          path="/Transfer/confirm"
          element={
            <PrivateRoute>
              <Confirm />
            </PrivateRoute>
          }
        />
        <Route
          path="/Transfer/input"
          element={
            <PrivateRoute>
              <TransferInput />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
