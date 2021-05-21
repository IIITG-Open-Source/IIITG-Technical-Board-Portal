import React from 'react';
import Spinner from '../../common/Effects/Spinner';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';
import Styles from './videoSection.module.css';

function Video(props) {
    const videos = (props.data && props.data.map(video => {
        return (
            <Col md={4} key={video.link} className={Styles.col}>
                <Item src={video.link} title={video.title} description={video.description} />
            </Col>
        );
    }));

    return (
        <Container fluid className={Styles.videoSection}>
            {   videos ? (
                <Row>
                    {videos}
                </Row>
                ) : (
                    <Spinner />
                )
            }
        </Container>
    );
}

export default Video;