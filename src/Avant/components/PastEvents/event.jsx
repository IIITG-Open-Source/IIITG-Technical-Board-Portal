import React from "react";
import { Col, Card } from "react-bootstrap";
import Styles from "./event.module.css";

function Event(props) {
  return (
    <Col md={3} className={Styles.col}>
      <Card className={Styles.card}>
        <Card.Img
          className={Styles.image}
          src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          alt="Event Image"
        />
        <Card.ImgOverlay className={Styles.overlay}>
          <Card.Title className={Styles.title}>GSOC 2020</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

export default Event;
