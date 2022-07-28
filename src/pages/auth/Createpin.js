import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/createpin.css";
import {} from "react-icons/fi";
import LeftSide from "../../components/AuthLeftSide.js";
import { Link } from "react-router-dom";

function CreatePin() {
  return (
    <>
      <div className="parent-s ">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="right-side">
          <div>
            <h4>
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </h4>
            <p className="pt-3">
              Create 6 digits pin to secure all your money and your data in Saqu
              Pay app. Keep it secret and don’t tell anyone about your Saqu Pay
              account password and the PIN.
            </p>
            <div className="d-flex">
              <div className="mt-5">
                <span className=""></span>
                <input type="text" className="" />
              </div>
              <div className="mt-5">
                <span className=""></span>
                <input type="text" className="" />
              </div>
              <div className="mt-5">
                <span className=""></span>
                <input type="text" className="" />
              </div>
              <div className="mt-5">
                <span className=""></span>
                <input type="text" className="" />
              </div>
              <div className="mt-5">
                <span className=""></span>
                <input type="text" className="" />
              </div>
              <div className="mt-5">
                <span className=""></span>
                <input type="text" className="" />
              </div>
            </div>
          </div>
          <div className="d-grid mt-3">
            <Button variant="outline-success" size="lg">
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePin;
