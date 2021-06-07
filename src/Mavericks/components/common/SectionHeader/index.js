import React from 'react';
import Styles from './sectionHeader.module.css';

function SectionHeader(props) {
    return (
        <h1 className={Styles.heading} style={props.Style}>
            {props.children}
        </h1>
    );
}

export default SectionHeader;