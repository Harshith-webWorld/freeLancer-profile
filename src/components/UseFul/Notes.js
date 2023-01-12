import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NotesData } from "../NotesData";

const Notes = () => {
  return (
    <Container fluid >
      <Row>
        <Col md="12" className="footer-copywright">
          <textarea
            rows="80"
            cols="80"
            placeholder="Enter Notes here"
            id="notes-value"
            value={NotesData}
            className="pl-5"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
