import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import ListButton from './ListButton';
import Section from '../../common/Section';
import Folders from './Folders';
import Styles from './list.module.css';

function Archives(props) {
    let num = 1;
    const archives = props.children;

    // Main List Of Archives
    return (
        <Section className={Styles.listContainer}>
            {
                archives.map(archive => {
                    return (
                        <Archive key={archive.year} eventKey={num++}>
                            {archive}
                        </Archive>
                    );
                })
            }
        </Section>
    );
}

class Archive extends React.Component {
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
        const archive = this.props.children;
        const num = this.props.eventKey;

        return (
            <Accordion className={Styles.list} onClick={this.handleClick}>
                {/* Archive Description */}
                <ListButton archive eventKey={num} isOpen={this.state.open}>
                    {archive.year}
                </ListButton>
                <Accordion.Collapse eventKey={num}>
                    {/* List Of Folders */}
                    <Card.Body className={Styles.listBody}>
                        <Folders>
                            {archive.folders}
                        </Folders>
                    </Card.Body>
                </Accordion.Collapse>
            </Accordion>
        );
    }
}

export default Archives;