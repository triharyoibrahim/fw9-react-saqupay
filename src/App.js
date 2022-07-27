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
              <ChangePin />
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
