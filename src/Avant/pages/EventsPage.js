import React from 'react';
import Section from '../components/common/Section';
import SectionHeader from '../components/common/SectionHeader';
import Calendar from '../components/common/Calendar';
import UpcomingEvents from '../components/UpcomingEvents';
import PastEvents from '../components/PastEvents';

class EventsPage extends React.Component {
    render() {
        //TODO: Implement Calendar
        return (
            <React.Fragment>
                <Section>
                    <SectionHeader>Upcoming Events</SectionHeader>
                    <Calendar />
                    <UpcomingEvents />
                </Section>
                <Section>
                    <SectionHeader>Past Events</SectionHeader>
                    <PastEvents />
                </Section>
            </React.Fragment>
        );
    }
}

export default EventsPage;