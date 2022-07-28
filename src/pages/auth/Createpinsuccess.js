import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/createpin.css";
import {} from "react-icons/fi";
import LeftSide from "../../components/AuthLeftSide.js";
import success from "../../assets/img/success.png";
import {} from "react-router-dom";

function CreatePinSuccess() {
  return (
    <>
      <aside>
        <div className="parent-s">
          <LeftSide />
          <div className="right-side">
            <div>
              <img src={success} className="pb-5" alt="success logo" />
              <h4>Your PIN Was Successfully Created</h4>
              <p className="pt-3">
                Your PIN was successfully created and you can now access all the
                features in Saqu Pay. Login to your new account and start
                exploring!
              </p>
            </div>

            <div className="d-grid mt-5">
              <Button variant="success" size="lg">
                Login Now
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default CreatePinSuccess;
