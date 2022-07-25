import React from "react";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/CSS/createpin.css";
import {} from "react-icons/fi";
import Leftside from "../../components/Authleftside.js";
import success from "../../assets/img/success.png";

function Createpinsuccess() {
  return (
    <>
      <aside>
        <div className="parent-s">
          <Leftside />
          <div className="right-side">
            <div>
              <img src={success} className="pb-5" alt="success logo" />
              <h4>Your PIN Was Successfully Created</h4>
              <p className="pt-3">
                Your PIN was successfully created and you can now access all the
                features in Zwallet. Login to your new account and start
                exploring!
              </p>
            </div>

            <div className="d-grid pt-5">
              <a
                href="/fw9-responsive-web/pages/dashboard/home.html"
                class="btn btn-primary btn-ls"
              >
                Login Now
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Createpinsuccess;
