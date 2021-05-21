import React from 'react';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Videos from './Videos';
import List from './List';
import Spinner from '../common/Effects/Spinner';
import Styles from './resources.module.css';
//Firebase
import firebase from '../../firebase';

function SubHeading(props) {
    return (
        <h3 className={Styles.subHeading}>{props.children}</h3>
    );
}

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('resources').where('name', '==', 'avant').get().then(snapshot => {            
            const data = snapshot.docs[0].data();

            this.setState({
                archives: data.archives,
                videos: data.videos
            });
        });
    }

    render() {
        return (
            <Section>
                <SectionHeader>Resources</SectionHeader>
                {
                    this.state ? (
                        <React.Fragment>
                            { this.state.archives &&
                                (
                                    <React.Fragment>
                                        <SubHeading>Documents</SubHeading>
                                        <List data={this.state && this.state.archives} />
                                    </React.Fragment>
                                )
                            }
                            { this.state.videos &&
                                (
                                    <React.Fragment>
                                        <SubHeading>Videos</SubHeading>
                                        <Videos data={this.state && this.state.videos} />
                                    </React.Fragment>
                                )
                            }
                            { this.state.blogs &&
                                (
                                    <React.Fragment>
                                        <SubHeading>Blogs</SubHeading>
                                    </React.Fragment>
                                )
                            }
                        </React.Fragment>
                    ) : (
                        <Spinner />
                    )
                }
            </Section>
        );
    }
}

export default Resources;