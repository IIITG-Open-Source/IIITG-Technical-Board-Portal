import React from 'react';
import { ResponsiveEmbed, Card } from 'react-bootstrap';
import Icons from './Icons';
import Styles from './video.module.css';

function Item(props) {
    return (
        <Card className={Styles.videoContainer}>
            <Card.Body className={Styles.videoContainerBody}>
                <ResponsiveEmbed aspectRatio="16by9">
                    <embed type="image/svg+xml" src={`${props.src}?rel=0&showinfo=0%autohide=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </ResponsiveEmbed>
                <div className={Styles.content}>
                    <Card.Title className={Styles.title}>
                        {props.title}
                    </Card.Title>
                    <Card.Text className={Styles.text}>
                        {props.description}
                    </Card.Text>
                </div>
                <Icons textToCopy={props.src} />
            </Card.Body>
        </Card>

    );
}

export default Item;