import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Menu from "../../components/Menu.js";
import "../../assets/CSS/home.css";
import { FiArrowDown, FiArrowUp, FiPlus } from "react-icons/fi";
import graphic from "../../assets/img/graphic.png";
import User from "../../components/User";

function Home() {
  const [data, setData] = React.useState({
    success: true,
    message: "List all data",
    pageInfo: {
      totalData: 11,
      totalPage: 3,
      currentPage: 1,
      nextPage: 2,
      previousPage: null,
    },
    results: [
      {
        id: 13,
        amount: "Rp1.000",
        recipient_id: 3,
        sender_id: 5,
        notes: "Uangku habis",
        time: "2022-12-30T17:00:00.000Z",
        type_id: 9,
      },
      {
        id: 14,
        amount: "Rp2.000",
        recipient_id: 2,
        sender_id: 3,
        notes: "zzzzz",
        time: "2022-02-28T17:00:00.000Z",
        type_id: 3,
      },
      {
        id: 16,
        amount: "Rp2.000",
        recipient_id: 2,
        sender_id: 3,
        notes: "zzzzz",
        time: "2022-02-28T17:00:00.000Z",
        type_id: 3,
      },
      {
        id: 17,
        amount: "Rp2.000",
        recipient_id: 2,
        sender_id: 3,
        notes: "zzzzz",
        time: "2022-02-28T17:00:00.000Z",
        type_id: 3,
      },
    ],
  });
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Row>
            <Col xs={3}>
              <Menu />
            </Col>

            <Col xs={9}>
              <div className="d-flex justify-content-between zw-header mt-3">
                <div className="">
                  <p>Balance</p>
                  <h3>Rp. 120.000</h3>
                  <p>081232124323</p>
                </div>
                <div className="d-flex flex-column mt-2">
                  <Button variant="light">
                    <FiArrowUp /> Transfer
                  </Button>{" "}
                  <Button variant="light" className="mt-2">
                    <FiPlus /> Top Up
                  </Button>{" "}
                </div>
              </div>
              <Row>
                <Col xs={7}>
                  <div className="graphic mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="mt-3 mt-md-4 mx-3 mx-md-4">
                        <FiArrowDown />
                        <p className="">Income</p>
                        <p className="">Rp2.120.000</p>
                      </div>
                      <div className="mt-3 mt-md-4 mx-3 mx-md-4">
                        <FiArrowUp />
                        <p className="">Expense</p>
                        <p className="">Rp1.560.000</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <img
                        className="img-fluid mw-100"
                        src={graphic}
                        alt="graphic"
                      />
                    </div>
                  </div>
                </Col>

                <Col xs={5}>
                  <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 graphic mt-3">
                    <p>Transaction History</p>
                    {data.results.map((user) => {
                      return (
                        <User
                          picture={user.id}
                          amount={user.amount}
                          notes={user.notes}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Home;
