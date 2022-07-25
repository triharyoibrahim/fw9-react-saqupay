import React from "react";
import "../assets/CSS/login.css";

import bgauth from "../assets/img/phonedouble.png";

function Authleftside() {
  return (
    <>
      <div className="min-vh-100 left-side">
        <h3>Saqu Pay</h3>
        <img src={bgauth} alt="background auth" />
        <p>App that Covering Banking Needs.</p>
        <p className="">
          Saqu Pay is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Zwallet everyday with worldwide users
          coverage.
        </p>
      </div>
    </>
  );
}

export default Authleftside;
