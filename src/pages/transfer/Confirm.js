import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Menu from "../../components/Menu.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import {} from "react-icons/bs";
import robert from "../../assets/img/robert.png";
import {} from "react-router-dom";
import PinConfirm from "../../components/PinConfirm";

function Confirm() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar />
      <div className="P-2">-</div>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9} className="d-flex flex-column mt-3 mb-3 graphic">
            <div className="d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <p>Details</p>
              <div className="graphic d-flex-column p-1 my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1 ">Amount</p>
                      <p className="">Rp100.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-1 my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Balance Left</p>
                      <p className="">Rp20.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column  p-1 my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Date Time</p>
                      <p className="">May 11, 2020 - 12.20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-1 my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Notes</p>
                      <p className="">For buying some socks</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="">Transfer to</p>
              <div className="graphic">
                <div className="d-flex-column  p-1 my-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <img src={robert} className="" alt="robert" />
                      <div className="d-flex-column justify-content-center ms-3">
                        <p className="">Robert</p>
                        <p className="">+62 813-8492-9994</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex justify-content-end p-3">
                <Button variant="success" onClick={() => setModalShow(true)}>
                  Continue
                </Button>
                <PinConfirm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Confirm;
