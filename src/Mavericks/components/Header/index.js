import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from '../Link';
import Styles from './header.module.css';

function Header(props) {
    let headings;

    //Generate a Heading according to the values provided
    if (props.data.name === undefined) {
        headings = (
            <h1 className={Styles.heading}>
                {props.data.altName}
            </h1>);
    }
    else if (props.data.altName === undefined) {
        headings = (
            <h2 className={Styles.subHeading}>
                {props.data.name}
            </h2>);
    }
    else {
        headings = (
            <React.Fragment>
                <h1 className={Styles.heading}>
                    {props.data.name}
                </h1>
                <h1 className={Styles.subHeading}>
                    {props.data.altName}
                </h1>
            </React.Fragment>
        );
    }

    let style = props.style;
    if(style) {
        style.backgroundImage = `url(${props.data.bg})`;
    }
    else {
        style = {
            backgroundImage : `url(${props.data.bg})`,
        };
    }

    //Return the Component
    return (
            <Container fluid className={Styles.header}>
                <Row>
                    <Col>
                        <div className={Styles.headingContainer}>
                            {headings}
                        </div>
                        <Link href={props.data.link} big>{props.data.linkText}</Link>
                    </Col>
                    <Col>
                        <img className={Styles.image} src={props.data.image} alt="Header Vector Art" />
                    </Col>
                </Row>
                <div className = {Styles.quote}>
                    <p>Computers are able to see and learn. Welcome to the future</p>
                    <p className={Styles.author}>-David Walters</p>
                </div>
            </Container>
    );
}

export default Header;