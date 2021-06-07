import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';

function Grid(props) {
    let items;

    if (props.data) {
        items = props.data.map(item => (
            <Item key={item.title} data={item} />
        ));
    }
    else {
        items = [];
        for(let i = 0; i < 6; i++) {
            items.push(<Item key={i} skeleton />);
        }
    }

    return (
        <Container fluid>
            <Row>
                {items}
            </Row>
        </Container>
    );
}

export default Grid;