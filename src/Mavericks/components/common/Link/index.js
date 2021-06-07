import React from 'react';
import { Button } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import Styles from './link.module.css';

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.href = props.href;
        this.message = props.children;
        this.isSmall = false;
        
        if(props.small) {
            this.isSmall = true;
        }
        else {
            this.isSmall = false;
        }
    }

    render() {
        return (
            <div style={this.props.style} className = {`${Styles.button} ${this.isSmall && Styles.small} ${!(this.isSmall) && Styles.big}`}>
                <Button smooth variant="link" as={NavHashLink} to={this.href} className = {`${Styles.link} ${this.isSmall && Styles.smallLink} ${!(this.smallLink) && Styles.bigLink}`}>
                    {this.message}
                </Button>
            </div>
        );
    }
}

export default Link;