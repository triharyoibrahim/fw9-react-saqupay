import React from "react";
import "../assets/CSS/footer.css";

function Footer() {
  return (
    <>
      <footer className="wrap-end mt-5 stylefoot">
        <div className="d-flex justify-content-between wrap-footer px-5 mx-0 mx-md-5">
          <p>2022 Saqu Pay. All right reserved.</p>
          <div className="d-flex justify-content-end">
            <p className="me-4">+62 5637 8882 9901</p>
            <p>contact@saqupay.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
