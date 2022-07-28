import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/resetpass.css";
import { FiLock } from "react-icons/fi";
import LeftSide from "../../components/AuthLeftSide.js";
import {} from "react-router-dom";

function ResetPassTypePass() {
  return (
    <>
      <div className="parent-s ">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="right-side">
          <div>
            <h4>
              Did You Forgot Your Password? Don’t Worry, You Can Reset Your
              Password In a Minutes.
            </h4>
            <p className="pt-3">
              Now you can create a new password for your Saqu Pay account. Type
              your password twice so we can confirm your new passsword.
            </p>
            <div className="input-group flex-nowrap  mt-5">
              <span className="input-group-text zw-icon ">
                <FiLock />
              </span>
              <input
                type="password"
                className="form-control zw-input"
                placeholder="Create a new password"
              />
            </div>

            <div className="input-group flex-nowrap mt-5">
              <span className="input-group-text zw-icon">
                <FiLock />
              </span>
              <input
                type="password"
                className="form-control zw-input"
                placeholder="Re-type a new password"
              />
            </div>
          </div>
          <div className="d-grid mt-5">
            <Button variant="outline-success" size="lg">
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassTypePass;
