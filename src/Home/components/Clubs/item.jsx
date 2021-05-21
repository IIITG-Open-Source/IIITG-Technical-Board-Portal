import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Link from './link';
import Styles from './item.module.css';

function Item(props) {
    const data = props.children;

    return (
        <Col md={12} className={Styles.container}>
            <Container fluid>
                <Row className={Styles.item}>
                    <Col md={5} className={`${Styles.col} ${Styles.imageContainer}`}>
                        <Image className={Styles.image} src={data.src} alt={data.title} />
                    </Col>
                    <Col className={Styles.col}>
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.content}>
                                <h1 className={Styles.title}>{data.title}</h1>
                                <p className={Styles.description}>
                                    {data.description ? data.description : (
                                        <Skeleton count={5} />
                                    )}
                                </p>
                            </div>
                            <div className={Styles.linksWrapper}>
                                <Container fluid>
                                    <Row>
                                        <Col className={Styles.linkCol}>
                                            <Link href={data.link}>Visit Website</Link>
                                        </Col>
                                        <Col className={Styles.linkCol}>
                                            <Link href={`${data.link}/projects`}>Projects</Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

export default Item;