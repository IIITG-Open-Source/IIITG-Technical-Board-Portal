import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Timer from './timer';
import Styles from './event.module.css';

function Event(props) {
    return (
        <Col md={6} className={Styles.col}>
            <Card className={Styles.card}>
                <Card.Img className={Styles.image} src="https://images.unsplash.com/photo-1557787163-1635e2efb160?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="Event Image" />
                <Card.ImgOverlay className={Styles.overlay}>
                    <Card.Body className={Styles.container}>
                        <Container fluid>
                            <Row className={Styles.wrapper}>
                                <Col className={Styles.titleWrapper}>
                                    <h3 className={Styles.title} >Name</h3>
                                </Col>
                                <Col className={Styles.timerWrapper}>
                                    <Timer className={Styles.title} />
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    <Card.Text className={Styles.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id sagittis erat, ac tincidunt dui. Donec auctor accumsan eros egestas ullamcorper. Nulla auctor porta malesuada. Vestibulum sollicitudin magna et varius rhoncus. Etiam gravida ex metus, at tincidunt velit molestie et. Etiam imperdiet lorem ex, a accumsan est congue vitae. Proin suscipit ligula sed mauris vestibulum blandit. Curabitur mattis eros neque. Vivamus eros massa, venenatis eu est a, faucibus imperdiet leo. Duis dictum justo neque, sit amet ullamcorper mi facilisis ut. Ut a dui consequat, sodales sapien vel, consectetur quam.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default Event;