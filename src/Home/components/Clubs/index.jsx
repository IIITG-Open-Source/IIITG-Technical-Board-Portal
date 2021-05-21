import React from 'react';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import { Container, Row } from 'react-bootstrap';
import Item from './item';
//Images
import GoogleDeveloperStudentClubs from './images/google_developer_student_club.svg';
import MachineLearningClub from './images/machine_learning.svg';
import ProgrammingClub from './images/programming_club.svg';
import RoboticsClub from './images/robotics_club.svg';
//firebase
import firebase from '../../firebase';

class Clubs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avant: null,
            gdsc: null,
            mavericks: null,
            robotics: null
        };
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection("club-description").get().then(snapshot => {
            const data = snapshot.docs[0] ? snapshot.docs[0].data() : null;
            this.setState({
                avant: data ? data.avant.content : null,
                gdsc: data ? data.gdsc.content : null,
                mavericks: data ? data.mavericks.content : null,
                robotics: data ? data.robotics.content : null,
            });
        });
    }

    render() {
        return (
            <Section id={this.props.id}>
                <SectionHeader>Our Clubs</SectionHeader>
                <Container fluid>
                    <Row>
                        <Item>
                            {
                                {
                                    src: ProgrammingClub,
                                    title: "Programming Club",
                                    description: this.state.avant,
                                    link: "/avant"
                                }
                            }
                        </Item>
                        <Item>
                            {{
                                src: MachineLearningClub,
                                title: "Mavericks The Machine Learning Society",
                                description: this.state.mavericks,
                                link: "/mavericks"
                            }}
                        </Item>
                        <Item>
                            {{
                                src: RoboticsClub,
                                title: "Robotics Club",
                                description: this.state.robotics,
                                link: "/robotics"
                            }}
                        </Item>
                        <Item>
                            {{
                                src: GoogleDeveloperStudentClubs,
                                title: "Google Developer Students Club",
                                description: this.state.gdsc,
                                link: "/gdsc"
                            }}
                        </Item>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default Clubs;