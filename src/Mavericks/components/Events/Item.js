import React from "react";
import { Col, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import Styles from "./item.module.css";

function Item(props) {
  let { data, skeleton } = props;

  return (
    <Col md={4} className={Styles.event}>
      <Card
        className={Styles.container}
        variant="flush"
        style={{
          backgroundImage: skeleton && "none",
        }}
      >
        {skeleton ? (
          <Skeleton width="100%" height={200} />
        ) : (
          <Card.Img variant="top" src={data.image} className={Styles.image} />
        )}
        <Card.Body className={Styles.content}>
          <Card.Title>{data ? data.title : <Skeleton />}</Card.Title>
          <Card.Body>
            {data ? data.description : <Skeleton count={4} />}
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
