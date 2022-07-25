import React from "react";
import "../assets/CSS/home.css";
import { FiGrid, FiPlus, FiArrowUp, FiLogOut, FiUser } from "react-icons/fi";

function Menu() {
  return (
    <>
      <div class="zw-aside mt-3 ps-3 ps-md-4 pt-3 pt-md-5">
        <div class="flex-fill d-flex flex-column gap-1 gap-md-2">
          <div class="zw-hover d-flex">
            <FiGrid />
            <p class="ms-3">
              <a
                href="/fw9-responsive-web/pages/dashboard/home.html"
                className="linkstyle"
              >
                Dasboard
              </a>
            </p>
          </div>
          <div class="zw-hover d-flex">
            <FiArrowUp />
            <p class="ms-1 ms-md-3">
              <a
                href="/fw9-responsive-web/pages/transfer/transfer.html"
                className="linkstyle"
              >
                Transfer
              </a>
            </p>
          </div>
          <div class="zw-hover d-flex">
            <FiPlus />
            <p class="ms-1 ms-md-3">
              <a
                href="/fw9-responsive-web/pages/topup/topup.html"
                className="linkstyle"
              >
                Top Up
              </a>
            </p>
          </div>
          <div class="zw-hover d-flex mb-5">
            <FiUser />
            <p class="ms-1 ms-md-3">
              <a
                href="/fw9-responsive-web/pages/profile/profile.html"
                className="linkstyle"
              >
                Profile
              </a>
            </p>
          </div>
        </div>
        <div class="zw-hover d-flex  mt-5">
          <div class="d-flex">
            <FiLogOut />
            <p class="ms-1 ms-md-3">
              <a href="/fw9-responsive-web/index.html" className="linkstyle">
                logout
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
