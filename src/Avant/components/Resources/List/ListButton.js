import React from 'react';
import { Button, Container, Col, Row, Accordion, Card } from 'react-bootstrap';
import { FaFolder as FolderIcon, FaRegTimesCircle as Empty, FaFile as FileIcon, FaArchive as Archive, FaArrowUp as UpArrow, FaArrowDown as DownArrow } from "react-icons/fa";
import Styles from './button.module.css';

function ListButton(props) {
    const IconContainer = (
        <Col xs={1} className={Styles.col}>
            {props.archive && (<Archive className={Styles.icon} />)}
            {props.folder && (<FolderIcon className={Styles.icon} />)}
            {props.item && (<FileIcon className={Styles.icon} />)}
            {props.empty && (<Empty className={Styles.icon} />)}
        </Col>
    );

    const TextContainer = (
        <Col xs={props.item ? 11 : 10} className={Styles.col}>
            <h5 className={Styles.content}>
                {props.empty ? "Empty" : props.children}
            </h5>
        </Col>
    );

    const ArrowContainer = (
        <Col xs={1} className={Styles.col}>
            {props.isOpen && (<UpArrow className={Styles.arrow} />)}
            {!(props.isOpen) && (<DownArrow className={Styles.arrow} />)}
        </Col>
    );

    // Content Of Button
    const childrens = (
        <Container fluid>
            <Row className={Styles.row}>
                {/* File Type Icon */}
                {IconContainer}
                {/* Text */}
                {TextContainer}
                {/* Arrow Icons */}
                {!(props.item || props.empty) && ArrowContainer}
            </Row>
        </Container>
    );

    if (props.archive || props.folder) {
        return (
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={props.eventKey} className={`${Styles.button} ${props.archive ? Styles.archive : Styles.folder}`}>
                {childrens}
            </Accordion.Toggle>
        );
    }
    else if (props.item) {
        return (
            <Button href={props.href} className={`${Styles.button} ${Styles.item}`}>
                {childrens}
            </Button>
        );
    }
    else {
        return (
            <Card.Body className={`${Styles.button} ${Styles.item}`}>
                {childrens}
            </Card.Body>
        );
    }
}

export default ListButton;