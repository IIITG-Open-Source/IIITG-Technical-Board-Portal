import React from 'react';
import Section from '../common/Section';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import AboutImage from './images/people.svg';
import Styles from './about.module.css';
//firebase
import firebase from '../../firebase';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('about').get().then(snapshot => {
            this.setState(state => ({
                content: snapshot.docs[0] ? snapshot.docs[0].data()['content'] : null,
            }));
        });
    }

    render() {
        return (
            <Section id={this.props.id}>
                <Container fluid className={Styles.about}>
                    {
                        <Row>
                            <Col md={6}>
                                <Image src={AboutImage} className={Styles.image} />
                            </Col>
                            <Col className={Styles.content}>
                                <h1 className={Styles.title}>About Us</h1>
                                <p className={Styles.description}>
                                    {this.state.content ? this.state.content : (
                                        <Skeleton count={10} />
                                    )}
                                </p>
                            </Col>
                        </Row>
                    }
                </Container>
            </Section>
        );
    }
}

export default About;