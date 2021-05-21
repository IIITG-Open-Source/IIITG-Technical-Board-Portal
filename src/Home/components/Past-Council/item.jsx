import React from 'react';
import { Col, Card } from 'react-bootstrap';
import ProfileIcons from '../common/ProfileLinks';
import Styles from './item.module.css';

class PastCoordinators extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <Col md={4} className={Styles.col}>
                <Card className={Styles.card}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                    <Card.Body>
                        <Card.Title>Ankit Kumar</Card.Title>
                        <Card.Text>It was a great experince to be the Coordinator. With my friend Ayush Choudhury, I started the project of technical Board which grew later to the whole technical Board and prompted the students to also participate in the development.</Card.Text>
                        <ProfileIcons />
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default PastCoordinators;