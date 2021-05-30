import React from 'react';
import Link from '../Link';
import Section from '../../../Avant/components/common/Section';
import SectionHeader from '../../../Avant/components/common/SectionHeader';
import Item from './Item.js';
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import NavHashLink from 'react-router-hash-link';
import image from '../Navigation/logos/machine_learning.jpeg';

export default function Gallery(props) {
    return(
        <Section id={props.id} style={props.style}>
            <SectionHeader>Gallery</SectionHeader>
            <Carousel indicators={false} interval={2000}>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                            <Col lg={3} xs={6}><Item img={image} caption="placeholder"/></Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
            <br/><br/>
            <Link as={NavHashLink} href={props.href} small>Load More</Link>
        </Section>
    )
}