import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/resetpass.css";
import { FiMail } from "react-icons/fi";
import LeftSide from "../../components/AuthLeftSide.js";
import { Link } from "react-router-dom";

function ResetPassTypeEmail() {
  return (
    <>
      <aside>
        <div className="parent-s">
          <LeftSide />
          <div className="right-side">
            <div>
              <h4>
                Did You Forgot Your Password? Don’t Worry, You Can Reset Your
                Password In a Minutes.
              </h4>
              <p className="pt-3">
                To reset your password, you must type your e-mail and we will
                send a link to your email and you will be directed to the reset
                password screens.
              </p>
            </div>
            <div className="input">
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
            </div>

            <div className="d-grid pt-5 d-flex justify-content-center">
              <Link to="/resetpass/typepass">
                {" "}
                <Button variant="primary" size="lg">
                  Confirm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ResetPassTypeEmail;
