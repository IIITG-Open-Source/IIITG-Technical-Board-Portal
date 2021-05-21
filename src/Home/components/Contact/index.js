import React from 'react';
import Section from '../common/Section';
import { Container, Row, Col, Form, Button, Alert, Image } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';
import Map from '../common/Map';
import Styles from './contact.module.css';
//Images
import ChatImage from './images/chat.svg';
//Firebase
// import firebase from '../../firebase';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            showAlert: false
        }

        // this.pushData = this.pushData.bind(this);
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);

    }

    getSubset(obj) {
        const { name, email, subject, message } = obj;
        return { name, email, subject, message };
    }

    // async pushData() {
    //     const db = firebase.firestore();
    //     let obj = this.state;
    //     let dataObj = this.getSubset(obj);

    //     if (!this.validateEmail(obj.email)) {
    //         this.setState({ showAlert: true });
    //     }
    //     else {
    //         this.setState({
    //             showAlert: false,
    //             name: "",
    //             email: "",
    //             subject: "",
    //             message: ""
    //         });
    //     }
    // }

    render() {
        const emailAlert = <Alert variant="danger">Wrong Email! Please enter correct email</Alert>;

        const FormComponent = (
            <React.Fragment>
                <SectionHeader>Contact Us</SectionHeader>
                <Form>
                    <Form.Control className={`${Styles.input} ${Styles.small}`} type="text" placeholder="Name" value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} />
                    <Form.Control className={`${Styles.input} ${Styles.small}`} type="email" placeholder="Your E-Mail" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    {/* Email Validation Alert */}
                    {this.state.showAlert && emailAlert}
                    <Form.Control className={`${Styles.input} ${Styles.small}`} type="text" placeholder="Subject" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} />
                    <Form.Control className={`${Styles.input} ${Styles.big}`} as="textarea" rows={5} placeholder="Message" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} />
                    <Button className={Styles.button}>Submit</Button>
                </Form>
            </React.Fragment>
        );

        const MapComponent = (
            <React.Fragment>
                <SectionHeader>Find Us Here</SectionHeader>
                <Map className={Styles.map} />
            </React.Fragment>
        );

        return (
            <Section id={this.props.id} style={this.props.style}>
                <Container fluid>
                    <Row>
                        {!this.props.WithMap && (
                                <Col className={Styles.ImageContainer}>
                                    <Image src={ChatImage} alt="Message" className={Styles.image} />
                                </Col>
                            )
                        }
                        <Col className={Styles.form} md={6}>
                            {FormComponent}
                        </Col>
                        {this.props.WithMap && (
                                <Col className={Styles.mapContainer}>
                                    {MapComponent}
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </Section>);
    }
}
export default Contact;