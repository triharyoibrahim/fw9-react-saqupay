import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "../../components/Menu.js";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

function Managephonenum() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9}>
            <div className="graphic d-flex-column px-3 px-md-4 pt-3 pt-md-4 mt-3">
              <p className="mb-3 p-3">Manage Phone Number</p>
              <p className="px-3">
                You can only delete the phone number and then you must add
                another phone number.
              </p>
              <div className="d-flex-column  p-3 my-3">
                <div className="graphic p-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <div className="d-flex-column justify-content-center ms-1">
                      <p className=" mb-2">Phone Number</p>
                      <p className="">+62 813-9387-7946</p>
                    </div>
                  </div>
                  <Link className="zwlink" to="/addphone">
                    <FiTrash />
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

export default Managephonenum;
