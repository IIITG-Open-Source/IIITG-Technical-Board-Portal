import React from 'react';
import Styles from './section.module.css';

function Section(props) {
    return (
        <section id={props.id} style={props.style} className={`${Styles.section} ${props.className}`}>
            {props.children}
        </section>
    );
}

export default Section;