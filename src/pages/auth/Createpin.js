import React from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/createpin.css";
import {} from "react-icons/fi";
import Leftside from "../../components/Authleftside.js";

function Createpin() {
  return (
    <>
      <aside>
        <div className="parent-s">
          <Leftside />
          <div className="right-side">
            <div>
              <h4>
                Secure Your Account, Your Wallet, and Your Data With 6 Digits
                PIN That You Created Yourself.
              </h4>
              <p className="pt-3">
                Create 6 digits pin to secure all your money and your data in
                Zwallet app. Keep it secret and don’t tell anyone about your
                Zwallet account password and the PIN.
              </p>
            </div>
            <div className="d-flex input">
              <div className="input-group flex-nowrap pt-5 mx-1">
                <input
                  maxlength="1"
                  min="0"
                  max="9"
                  type="number"
                  class="form-control"
                />
              </div>
              <div className="input-group flex-nowrap pt-5 mx-1">
                <input type="number" className="form-control" />
              </div>
              <div className="input-group flex-nowrap pt-5 mx-1">
                <input type="number" className="form-control" />
              </div>
              <div className="input-group flex-nowrap pt-5 mx-1">
                <input type="number" className="form-control" />
              </div>
              <div className="input-group flex-nowrap pt-5 mx-1">
                <input type="number" className="form-control" />
              </div>
              <div className="input-group flex-nowrap pt-5 mx-1">
                <input type="number" maxlength="1" class="form-control" />
              </div>
            </div>

            <div className="d-grid pt-5">
              <a
                href="/fw9-responsive-web/pages/auth/createpin-success.html"
                className="btn btn-primary btn-ls"
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

export default Createpin;
