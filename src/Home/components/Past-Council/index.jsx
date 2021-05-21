import React from 'react';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import { Container, Row } from 'react-bootstrap';
import Item from './item';

class PastCouncil extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <Section>
                <SectionHeader>Past Council</SectionHeader>
                <Container fluid>
                    <Row>
                        <Item />
                        <Item />
                        <Item />
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default PastCouncil;