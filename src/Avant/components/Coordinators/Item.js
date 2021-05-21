import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './item.module.css';
import ProfileLinks from '../common/ProfileLinks';

function Entry(props) {
    const variants = {
        opacity: 1,
        transition: { duration: 0.2 },
    };

    return (
        <Col md={4} className={Styles.entry}>
            <Card className={Styles.card}>
                <Card.Img src={props.data.image} alt="Card image" className={Styles.image} />
                <Card.ImgOverlay as={motion.div} className={Styles.overlay} whileTap={variants} whileHover={variants}>
                    <Card.Body className={Styles.content}>
                        <Card.Title as="h1" className={Styles.heading}>{props.data.name}</Card.Title>
                        <Card.Text>
                            {props.data.caption}
                        </Card.Text>
                        <ProfileLinks className={Styles.linksWrapper} colour='white' />
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default Entry;