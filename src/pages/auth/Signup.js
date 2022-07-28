import React from "react";
import LeftSide from "../../components/AuthLeftSide.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/signup.css";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function SignUp() {
  return (
    <>
      <div className="parent-s ">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="right-side">
          <div>
            <h4>
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </h4>
            <p className="pt-3">
              Transfering money is eassier than ever, you can access Saqu Pay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <div className="input-group flex-nowrap  mt-5">
              <span className="input-group-text zw-icon ">
                <FiUser />
              </span>
              <input
                type="text"
                className="form-control zw-input"
                placeholder="Enter your username"
              />
            </div>
            <div className="input-group flex-nowrap  mt-5">
              <span className="input-group-text zw-icon ">
                <FiMail />
              </span>
              <input
                type="email"
                className="form-control zw-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group flex-nowrap mt-5">
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
          <div className="d-grid mt-5">
            <Button variant="outline-success" size="lg">
              Sign Up
            </Button>
            <p className="text-center p-5">
              Already have an account?{" "}
              <Link to="/login" className="blue">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
