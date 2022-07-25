import React from "react";
import robert from "../assets/img/robert.png";
function User({ picture, amount, notes }) {
  return (
    <>
      <div className="d-flex">
        <div className="d-flex mb-3">
          <div>
            <img src={robert} alt="robert" className="img-fluid rounded" />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center ms-3">
          <div>{amount}</div>
          <div>{notes}</div>
        </div>
      </div>
    </>
  );
}

export default User;
