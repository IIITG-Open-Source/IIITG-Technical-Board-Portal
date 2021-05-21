import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import Styles from './button.module.css';

function Link(props) {
    return (
        <Col as={Button} className={Styles.button}>
            <NavHashLink smooth to={props.href} className={Styles.link}>
                {props.children}
            </NavHashLink>
        </Col>
    );
}

export default Link;