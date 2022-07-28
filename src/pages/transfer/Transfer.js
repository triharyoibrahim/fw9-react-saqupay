import React from "react";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import { Container, Row, Col, Form } from "react-bootstrap";
import Menu from "../../components/Menu.js";
import { Link } from "react-router-dom";
import jessica from "../../assets/img/Jessica.png";
import robert from "../../assets/img/robert.png";
import sherina from "../../assets/img/sherina.png";
import { FiSearch } from "react-icons/fi";

function Transfer() {
  return (
    <>
      <Navbar />
      <div className="P-2">-</div>
      <Container>
        <Row>
          <Col xs={3}>
            <Menu />
          </Col>
          <Col xs={9}>
            <div className="graphic d-flex-column px-3 px-md-4 pt-3 pt-md-4 mt-3">
              <p>Search Receiver</p>
              <Form>
                <Form.Group className="d-flex mt-4">
                  <span className=" rounded-start">
                    {" "}
                    <FiSearch className="ms-2" />{" "}
                  </span>
                  <Form.Control
                    className="rounded-end"
                    type="email"
                    placeholder="Search Receiver"
                  />
                </Form.Group>
              </Form>
              <div className=" d-flex-column  p-1 my-1">
                <Link
                  to="/transfer/input"
                  className="graphic p-2 d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex">
                    <img src={robert} className="" alt="robert" />
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Robert Suhi</p>
                      <p className="">+62 813-8492-9994</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="d-flex-column p-1 my-1">
                <Link
                  to="/transfer/input"
                  className="graphic p-2 d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex">
                    <img src={jessica} className="" alt="jessica" />
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Jessica Taro</p>
                      <p className="">+62 812-4343-6731</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="d-flex-column  p-1 my-1">
                <Link
                  to="/transfer/input"
                  className="graphic p-2 d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex">
                    <img src={sherina} className="" alt="sherina" />
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Sherina Keen</p>
                      <p className="">+62 811-3452-5252</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="d-flex-column  p-1 my-1">
                <Link
                  to="/transfer/input"
                  className="graphic p-2 d-flex justify-content-between align-items-center zwlink"
                >
                  <div className="d-flex">
                    <img src={robert} className="" alt="robert" />
                    <div className="d-flex-column justify-content-center ms-3">
                      <p className="">Michael Le</p>
                      <p className="">+62 810-4224-4613</p>
                    </div>
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

export default Transfer;
