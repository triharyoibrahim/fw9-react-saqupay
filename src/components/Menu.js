import React from "react";
import "../assets/CSS/home.css";
import { FiGrid, FiPlus, FiArrowUp, FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="zw-aside mt-3 ps-3 ps-md-4 pt-3 pt-md-5">
        <div className="flex-fill d-flex flex-column gap-1 gap-md-2">
          <div className="d-flex">
            <FiGrid />
            <p class="ms-3">
              <Link to="/home" className="zwlink">
                Dashboard
              </Link>
            </p>
          </div>
          <div className="zwlink d-flex">
            <FiArrowUp className="zwlink" />
            <p class="ms-1 ms-md-3">
              <Link to="/transfer" className="zwlink">
                Transfer
              </Link>
            </p>
          </div>
          <div class="zw-hover d-flex">
            <FiPlus />
            <p class="ms-1 ms-md-3">
              <Link to="/topup" className="zwlink">
                Top Up
              </Link>{" "}
            </p>
          </div>
          <div class="zw-hover d-flex mb-5">
            <FiUser />
            <p class="ms-1 ms-md-3">
              <Link to="/profile" className="zwlink">
                Profile
              </Link>
            </p>
          </div>
        </div>
        <div class="zw-hover d-flex  mt-5">
          <div class="d-flex">
            <FiLogOut />
            <p class="ms-1 ms-md-3">
              <Link to="/" className="zwlink">
                Logout
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
