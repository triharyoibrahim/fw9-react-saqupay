import React from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/login.css";
import { FiMail, FiLock } from "react-icons/fi";
import Leftside from "../../components/Authleftside.js";

function Login() {
  return (
    <>
      <aside>
        <div className="parent-s">
          {/* left */}
          <Leftside></Leftside>
          <div className="right-side">
            <div>
              <h4>
                Start Accessing Banking Needs With All Devices and All Platforms
                With 30.000+ Users
              </h4>
              <p className="pt-3">
                Transfering money is eassier than ever, you can access Zwallet
                wherever you are. Desktop, laptop, mobile phone? we cover all of
                that for you!
              </p>
            </div>
            <div className="input">
              <div className="input-group flex-nowrap">
                <span className="input-group-text zw-icon">
                  <FiMail />
                </span>
                <input
                  type="email"
                  className="form-control zw-input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-group flex-nowrap pt-5">
                <span className="input-group-text zw-icon">
                  <FiLock />
                </span>
                <input
                  type="password"
                  className="form-control zw-input"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="text-end">
              <a href="/fw9-responsive-web/pages/auth/resetpass-typeemail.html">
                Forgot Password
              </a>
            </div>
            <div className="d-grid pt-5">
              <button type="button" className="btn btn-primary btn-ls">
                Login
              </button>
            </div>
            <div className="text-center pt-3">
              Don’t have an account? Let’s
              <a href="/fw9-responsive-web/pages/auth/signup.html">Sign Up</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Login;
