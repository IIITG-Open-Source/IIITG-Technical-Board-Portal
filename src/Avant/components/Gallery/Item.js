import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import Styles from './item.module.css';

function Entry(props) {
    const { skeleton } = props;

    return (
        <Col md={4} className={Styles.entry}>
            <Card className={Styles.card} variant="flush">
                {
                    skeleton ? (
                        <Skeleton width='100%' height={300} />
                    ) : (
                            <React.Fragment>
                                <Card.Img src={props.src} alt="Card image" className={Styles.image} />
                                <Card.ImgOverlay as={motion.div} className={Styles.overlay} whileHover={{
                                    opacity: 1,
                                    transition: { duration: 0.2 },
                                }}>
                                    <Card.Body className={Styles.content}>
                                        <Card.Title as="h1" className={Styles.heading}>{props.title}</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                            </React.Fragment>
                        )
                }
            </Card>
        </Col>
    );
}

export default Entry;