import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Menu from "../../components/Menu.js";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {} from "react-icons/fi";
import { Link } from "react-router-dom";

function ChangePin() {
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
              <p>Change Pin</p>
              <p className="">
                Enter your current 6 digits Saqu Pay PIN below to continue to
                the next steps.
              </p>
              <div className="d-flex-column mx-auto ">
                <Form className="d-flex flex-rows justify-content-around  mw-100 gap-2 pt-0 pt-md-5 mt-5">
                  <div className="d-flex">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className=""
                      type="number"
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className=""
                      type="number"
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className=""
                      type="number"
                    />
                  </div>
                  <div className="d-flex ">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className=""
                      type="number"
                    />
                  </div>
                  <div className="d-flex ">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className=""
                      type="number"
                    />
                  </div>
                  <div className="d-flex">
                    <Form.Control
                      maxlength="1"
                      min="0"
                      max="9"
                      className=""
                      type="number"
                    />
                  </div>
                </Form>
              </div>
              <div className="text-center  my-5">
                <Link to="/home">
                  <Button variant="success" className="">
                    Continue
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

export default ChangePin;
