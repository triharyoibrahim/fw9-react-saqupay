import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "../../components/Menu.js";
import { Link } from "react-router-dom";

function Personalinfo() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9}>
            <div className="graphic d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <p className="p-3 mb-3">Personal Info</p>
              <p className="p-3 mb-3">
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className=" mb-2">First Name</p>
                      <p className="">Robert</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className=" mb-2">Last Name</p>
                      <p className="">Chandler</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className="">Verified E-mail</p>
                      <p className="">pewdiepie1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex-column p-1 my-1">
                <div className="graphic p-2 d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className="mb-2">Phone Number</p>
                      <p className="">+62 813-9387-7946</p>
                    </div>
                  </div>
                  <Link className="" to="#">
                    <p className="p-3">Manage</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Personalinfo;
