import React from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/resetpass.css";
import { FiLock } from "react-icons/fi";
import Leftside from "../../components/Authleftside.js";

function ResetpassTypepass() {
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
                Now you can create a new password for your Zwallet account. Type
                your password twice so we can confirm your new passsword.
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
            <div className="d-grid ">
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

export default ResetpassTypepass;
