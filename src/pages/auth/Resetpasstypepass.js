import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/resetpass.css";
import { FiLock } from "react-icons/fi";
import LeftSide from "../../components/AuthLeftSide.js";
import { Link } from "react-router-dom";

function ResetPassTypePass() {
  return (
    <>
      <aside>
        <div className="parent-s">
          <LeftSide />
          <div className="d-flex-column">
            <div className="right-side">
              <div>
                <h4>
                  Did You Forgot Your Password? Don’t Worry, You Can Reset Your
                  Password In a Minutes.
                </h4>
                <p className="pt-3">
                  Now you can create a new password for your Zwallet account.
                  Type your password twice so we can confirm your new passsword.
                </p>
              </div>
              <div className="input">
                <div className="input-group flex-nowrap pt-5">
                  <span className="input-group-text zw-icon">
                    <FiLock />
                  </span>
                  <input
                    type="password"
                    className="form-control zw-input"
                    placeholder="Create new password"
                  />
                </div>
                <div className="input-group flex-nowrap pt-5">
                  <span className="input-group-text zw-icon">
                    <FiLock />
                  </span>
                  <input
                    type="password"
                    className="form-control zw-input"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex-column ">
              <Link to="/login">
                {" "}
                <Button variant="primary" size="lg">
                  Reset Password
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ResetPassTypePass;
