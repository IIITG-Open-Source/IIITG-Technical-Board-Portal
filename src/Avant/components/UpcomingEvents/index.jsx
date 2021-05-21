import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from './event';

class UpcomingEvents extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Event />
                        <Event />
                        <Event />
                        <Event />
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default UpcomingEvents;