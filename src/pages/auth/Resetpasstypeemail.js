import React from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/resetpass.css";
import { FiMail } from "react-icons/fi";
import Leftside from "../../components/Authleftside.js";

function ResetpassTypeemail() {
  return (
    <>
      <aside>
        <div className="parent-s">
          <Leftside />
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

            <div className="d-grid pt-5">
              <a
                href="/fw9-responsive-web/pages/auth/resetpass-typepass.html"
                class="btn btn-primary btn-ls"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ResetpassTypeemail;
