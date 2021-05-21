import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Link from '../common/Link';
import Grid from './Grid';
//Firebase
import firebase from '../../firebase';

class Events extends React.Component {
    constructor(props) {
        super(props);
        //Holds all the data fetched from the Database
        this.state = null;
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('events').where('name', '==', 'avant').get().then(snapshot => {
            const content = snapshot.docs[0] && snapshot.docs[0].data().list;

            if (content) {
                let events = content.map(event => (
                    {
                        title: event.name,
                        image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                        description: "Introduction"
                    }
                ));

                if (this.props.small) {
                    events = events.slice(0, events.length >= 6 ? 6 : events.length);
                }

                this.setState({
                    events: events
                });
            }
        });
    }

    render() {
        return (
            <Section id={this.props.id} style={this.props.style}>
                <SectionHeader>Events</SectionHeader>
                <Grid data={this.state && this.state.events} />
                {   (this.props.small && !this.props.big) &&
                    (<Link href={this.props.href} small>Load More</Link>)
                }
            </Section>
        );
    }
}

export default Events;