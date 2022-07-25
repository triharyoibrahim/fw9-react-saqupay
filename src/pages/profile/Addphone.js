import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Menu from "../../components/Menu.js";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

function Addphone() {
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
              <p className="mb-3">Add Phone Number</p>
              <p className="">
                Add at least one phone number for the transfer ID so you can
                start transfering your money to another user..
              </p>
              <div className="d-flex-column mx-auto mb-2">
                <Form>
                  <Form.Group className="d-flex mt-5">
                    <span className="">
                      {" "}
                      <FiPhone />{" "}
                    </span>
                    <Form.Control
                      className="form-control zw-input"
                      type="text"
                      placeholder="Type Your Number"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="#">
                  <Button variant="light" size="lg" className="">
                    Add Number
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

export default Addphone;
