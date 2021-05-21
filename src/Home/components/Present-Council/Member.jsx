import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Styles from './member.module.css';
import { FaLinkedin as LinkedIn, FaGithubSquare as Github, FaGlobe as Globe, FaInstagram as Instagram, FaFacebookSquare as Facebook } from 'react-icons/fa';
import Skeleton from "react-loading-skeleton";

function Member(props) {
    let data = props.children;

    if (!data) {
        data = {
            title: null,
            subTitle: null,
            content: null,
            image: null,
            links: null,
        };
    }

    return (
        <Col md={6} className={Styles.col}>
            <Container fluid>
                <Card className={Styles.card}>
                    <Card.Body className={Styles.titleContainer} >
                        <Card.Title className={Styles.title} >
                            {data.title ? data.title : <Skeleton />}
                        </Card.Title>
                        <Card.Title className={Styles.subTitle} >
                            {data.subTitle ? data.subTitle : <Skeleton />}
                        </Card.Title>
                    </Card.Body>
                    {
                        data.image ? (
                            <Card.Img className={Styles.image} variant="top" src={data.image} />
                        ) : (
                                <Skeleton height={300} width='100%' />
                            )
                    }
                    <Card.Body>
                        <Card.Text className={Styles.content} >
                            {data.content ? data.content : <Skeleton count={9} />}
                        </Card.Text>
                    </Card.Body>
                    <Links>
                        {data.links}
                    </Links>
                </Card>
            </Container>
        </Col>
    );
}

function Link({ href, children }) {
    return (
        <Col as="a" href={href} target="_blank">
            {children}
        </Col>
    );
}

function Links(props) {
    let github, linkedin, instagram, facebook, others;

    if (props.children) {
        ({ github, linkedin, instagram, facebook, others } = props.children);
    }

    return (
        <Card.Body>
            <Container fluid>
                <Row>
                    {
                        props.children ? (
                            <React.Fragment>
                                <Link href={instagram} >
                                    <Instagram className={Styles.icon} />
                                </Link>
                                <Link href={github}>
                                    <Github className={Styles.icon} />
                                </Link>
                                <Link href={facebook}>
                                    <Facebook className={Styles.icon} />
                                </Link>
                                <Link href={linkedin}>
                                    <LinkedIn className={Styles.icon} />
                                </Link>
                                <Link href={others}>
                                    <Globe className={Styles.icon} />
                                </Link>
                            </React.Fragment>
                        ) : (
                            <Col style={{padding: '0px'}}>
                                <Skeleton width='100%' height={35} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </Card.Body>
    );
}

export default Member;