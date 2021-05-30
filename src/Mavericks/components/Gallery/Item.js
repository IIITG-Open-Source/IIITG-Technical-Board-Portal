import React from 'react';
import {Card} from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './item.module.css';

export default function Item(props) {
    return (
        <Card className={Styles.card}>
            <Card.Img src={props.img} alt="Image"/>
            <Card.ImgOverlay as={motion.div} className={Styles.overlay} whileHover={{
                opacity: 1,
                transition: { duration: 0.2 },
                }}>
                <Card.Body className={Styles.content}>
                    <Card.Title className={Styles.title}>{props.caption}</Card.Title>
                </Card.Body>
                
            </Card.ImgOverlay>
        </Card>
    )
}