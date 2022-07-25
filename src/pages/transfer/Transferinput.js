import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Menu from "../../components/Menu.js";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import robert from "../../assets/img/robert.png";

function Transferinput() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9} className="d-flex flex-column mt-3 mb-3 graphic">
            <div className=" d-flex-column px-3 px-md-4 pt-3 pt-md-4 ">
              <p className="">Transfer money</p>
              <div className="d-flex-column p-3 my-3">
                <div className="graphic d-flex justify-content-between align-items-center p-3">
                  <div className="d-flex">
                    <img src={robert} className="" alt="robert" />
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Robert Suhi</p>
                      <p className="">+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="pt-3">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>
              <Form>
                <Form.Group>
                  <div className="w-100 ">
                    <Form.Control
                      type="number"
                      className="form-control zw-input text-center"
                      placeholder="0.00"
                    />
                    <p className="">Rp120.000 Available</p>
                  </div>
                </Form.Group>
                <Form.Group className="d-flex w-50 m-auto my-3 my-md-5">
                  <span>
                    <FiEdit2 />
                  </span>
                  <Form.Control
                    type="text"
                    className="form-control zw-input text-center "
                    placeholder="Add some notes"
                  />
                </Form.Group>
                <div className="d-md-flex justify-content-end">
                  <Link to="/transfer/confirm">
                    <Button
                      className="btn auth-button w-100 my-5"
                      type="submit"
                    >
                      Continue
                    </Button>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Transferinput;
