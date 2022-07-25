import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Menu from "../../components/Menu.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsCheckCircleFill, BsDownload, BsShare } from "react-icons/bs";
import robert from "../../assets/img/robert.png";
import { Link } from "react-router-dom";

function Transfersuccess() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9} className="d-flex flex-column mt-3 mb-3 graphic">
            <div className="d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <div className="w-100 text-center my-5">
                <BsCheckCircleFill size={50} style={{ color: "green" }} />
                <p className="my-5">Transfer Success</p>
              </div>
              <div className="graphic d-flex-column p-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1 ">Amount</p>
                      <p className="">Rp100.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Balance Left</p>
                      <p className="">Rp20.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column  p-2 my-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className=" mb-1">Date Time</p>
                      <p className="">May 11, 2020 - 12.20</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic d-flex-column p-2 my-3">
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
                <div className="d-flex-column  p-3 my-3">
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
              <div className="d-md-flex justify-content-end">
                <Link to="#">
                  <Button
                    variant="light"
                    className=" my-2 my-md-5 me-3"
                    type="submit"
                  >
                    <BsShare />
                  </Button>
                </Link>
                <Link to="#">
                  <Button
                    variant="light"
                    className=" my-2 my-md-5 me-3"
                    type="submit"
                  >
                    <BsDownload />
                    Download
                  </Button>
                </Link>
                <Link to="/home">
                  <Button className=" my-2 my-md-5" type="submit">
                    Back To Home
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Transfersuccess;
