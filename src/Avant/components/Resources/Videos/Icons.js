import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShareAlt as Share } from "react-icons/fa";
import Styles from './icons.module.css';

function Icons(props) {
    return (
        <Container fluid className={Styles.container}>
            <Row>
                <Col>
                    {/* TODO - Add a Overlay to show that the link is copied, Use Bootstrap Overlay Component */}
                    <Share className={Styles.icon} onClick={() => {navigator.clipboard.writeText(props.textToCopy)}}/>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Icons;