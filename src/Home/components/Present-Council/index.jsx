import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Member from './Member';
import Styles from './grid.module.css';

/* 
    Object Structure:-
    
    title: "Faculty Coordinator Name"
    subTitle: "Faculty Coordinator"
    content: String,
    image: "https://images.unsplash.com/photo-1564053051381-5cb91813736b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2026&q=80",
    links: {
        github: '#',
        linkedin: '#',
        instagram: '#',
        facebook: '#',
        others: '#',
    }
                            
*/

class PresentCouncil extends React.Component {
    render() {
        return (
            <Section>
                <SectionHeader>Present Council</SectionHeader>
                <Container fluid className={Styles.container}>
                    <Row className={Styles.row} >
                        <Member />
                        <Member />
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default PresentCouncil;