import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/login.css";
import { FiMail, FiLock } from "react-icons/fi";
import LeftSide from "../../components/AuthLeftSide.js";
import { Link } from "react-router-dom";

function Login() {
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
            <div className="text-end mt-3 ">
              <Link to="/resetpass" className="zwlink">
                {" "}
                Forgot Password{" "}
              </Link>
            </div>
          </div>
          <div className="d-grid mt-5">
            <Button variant="outline-success" size="lg">
              Login
            </Button>
            <p className="text-center p-5">
              Don't have an account?{" "}
              <Link to="/signup" className="blue">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
