import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare as Facebook, FaInstagram as Instagram, FaLinkedin as LinkedIn, FaGithub as GitHub, FaGlobe as Globe } from "react-icons/fa";
import Styles from './icons.module.css';

function ProfileLinks(props) {
    const style = {
        color: (props.colour ? props.colour : 'black'),
    };

    return (
        <div className={`${Styles.wrapper} ${props.className}`} style={props.style}>
            <Container fluid>
                <Row>
                    <Col as="a" href="#">
                        <Facebook style={style} className={Styles.icons} />
                    </Col>
                    <Col as="a" href="#">
                        <Instagram style={style} className={Styles.icons} />
                    </Col>
                    <Col as="a" href="#">
                        <LinkedIn style={style} className={Styles.icons} />
                    </Col>
                    <Col as="a" href="#">
                        <GitHub style={style} className={Styles.icons} />
                    </Col>
                    <Col as="a" href="#">
                        <Globe style={style} className={Styles.icons} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProfileLinks;