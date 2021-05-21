import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Styles from './grid.module.css';
import Item from './Item';

function Grid(props) {
    const images = props.children;
    let items;

    if(images) {
        items = images.map(image => {
            return (<Item key={image.title} alt={image.description} src={image.src} title={image.title} />);
        });
    }
    else {
        items = [];
        for(let i = 0; i < 6; i++) {
            items.push(<Item key={i} skeleton />);
        }
    }

    return (
        <Container fluid className={Styles.grid}>
            <Row>
                {items}
            </Row>
        </Container>
    );
}

export default Grid;