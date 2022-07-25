import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

function PinConfirm(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter PIN to Transfer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </p>
          <Form className="d-flex flex-rows justify-content-around mw-100 gap-2 mt-5">
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Continue</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PinConfirm;
