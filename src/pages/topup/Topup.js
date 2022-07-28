import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Menu from "../../components/Menu.js";
import { Container, Row, Col } from "react-bootstrap";

function TopUp() {
  return (
    <>
      <Navbar />
      <div className="P-2">-</div>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9} className="mt-3 p-3 graphic">
            <p>How to Top Up</p>
            <div>
              <div className="graphic p-2 mb-1">
                <p>1. Go to the nearest ATM or you can use E-Banking.</p>
              </div>
              <div className="graphic p-2 mb-1">
                <p>2. Type your security number on the ATM or E-Banking.</p>
              </div>
              <div className="graphic p-2 mb-1">
                <p>3. Select “Transfer” in the menu</p>
              </div>
              <div className="graphic p-2 mb-1">
                <p>
                  4. Type the virtual account number that we provide you at the
                  top.
                </p>
              </div>
              <div className="graphic p-2 mb-1">
                <p>5. Type the amount of the money you want to top up.</p>
              </div>
              <div className="graphic p-2 mb-1">
                <p>6. Read the summary details</p>
              </div>
              <div className="graphic p-2 mb-1">
                <p>7. Press transfer / top up</p>
              </div>
              <div className="graphic p-2 mb-1">
                <p>8. You can see your money in Saqu Pay within 3 hours.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default TopUp;
