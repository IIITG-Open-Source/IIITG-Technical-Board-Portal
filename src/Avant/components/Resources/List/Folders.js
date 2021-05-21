import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import ListButton from './ListButton';
import Items from './Items';
import Styles from './list.module.css';

function Folders(props) {
    const folders = props.children;
    let num = 1;

    return (
        folders ? (
            folders.map(folder => {
                return (
                    <Folder key={folder.name} eventKey={num}>
                        {folder}
                    </Folder>
                );
            })
        ) : (
            <ListButton empty />
        )
    );
}

class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        this.setState(state => ({
            open: !state.open
        }));
    }

    render() {
        const num = this.props.eventKey;
        const folder = this.props.children;

        return (
            <Accordion onClick={this.handleClick} >
                {/* Folder Description */}
                <ListButton folder eventKey={num} isOpen={this.state.open}>
                    {folder.name}
                </ListButton>
                <Accordion.Collapse eventKey={num}>
                    <Card.Body className={Styles.listBody}>
                        {/* List Of Items */}
                        <Items>
                            {folder.items}
                        </Items>
                    </Card.Body>
                </Accordion.Collapse>
            </Accordion>
        );
    }
}

export default Folders;