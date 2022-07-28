import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "../../components/Menu.js";
import { Link } from "react-router-dom";
import { FiArrowRight, FiEdit2 } from "react-icons/fi";
import robert from "../../assets/img/robert.png";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="P-2">-</div>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9} className="graphic mt-3">
            <div className="d-flex-column px-3 px-md-4 pt-3 pt-md-4">
              <div className="w-100 text-center my-3 my-md-5">
                <img src={robert} alt="robert" />
                <p className="my-2">
                  <FiEdit2 className="me-2" />
                  Edit
                </p>
                <p className=" mt-4">Robert Chandler</p>
                <p className="mx-5">+62 813-9387-7946</p>
              </div>
              <div className="graphic d-flex-column p-3 my-3 mx-auto">
                <Link
                  to="/personalinfo"
                  className="d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex justify-content-between ms-3">
                    <p className=" mb-1">Personal Information</p>
                  </div>
                  <FiArrowRight />
                </Link>
              </div>
              <div className="graphic d-flex-column  p-3 my-3 mx-auto">
                <Link
                  to="/changepass"
                  className="d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex justify-content-between ms-3">
                    <p className="mb-1">Change Password</p>
                  </div>
                  <FiArrowRight />
                </Link>
              </div>
              <div className="graphic  d-flex-column p-3 my-3 mx-auto ">
                <Link
                  to="/changepin"
                  className="d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex justify-content-between ms-3">
                    <p className="mb-1">Change PIN</p>
                  </div>
                  <FiArrowRight />
                </Link>
              </div>
              <div className="graphic d-flex-column p-3 my-3 mb-5 mx-auto ">
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex justify-content-between ms-3">
                    <p className=" mb-1">Log Out</p>
                  </div>
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

export default Profile;
