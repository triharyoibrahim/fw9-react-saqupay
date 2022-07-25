import React from "react";
import Leftside from "../../components/AuthLeftSide.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/signup.css";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <aside>
        <div class="parent-s">
          <Leftside />
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
                  <FiUser />
                </span>
                <input
                  type="text"
                  className="form-control zw-input"
                  placeholder="Enter your username"
                />
              </div>
              <div className="input-group flex-nowrap pt-5">
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

            <div className="d-grid pt-5">
              <button type="button" className="btn btn-primary btn-ls">
                Sign Up
              </button>
            </div>
            <div className="text-center pt-3">
              Already have an account? Let’s <Link to="/Login">Login</Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Signup;
