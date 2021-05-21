import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Coordinator from './Coordinator';

class PastCoordinators extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <Section>
                <SectionHeader>Past Coordinators</SectionHeader>
                <Container fluid>
                    <Row>
                        <Coordinator />
                        <Coordinator />
                        <Coordinator />
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default PastCoordinators;