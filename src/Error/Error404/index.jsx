import React from 'react';
import { Container, Image } from 'react-bootstrap';
//Images
import ErrorImage from './error.svg';

function Error404(props) {
    return (
        <Container fluid>
            <Image src={ErrorImage} />
            <h1>Sorry, Page Not Found</h1>
        </Container>
    );
}

export default Error404;