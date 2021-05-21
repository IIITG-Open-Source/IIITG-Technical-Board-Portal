import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import Coordinators from '../components/Coordinators';
import Contact from '../components/Contact';
import Wave from '../components/common/Effects/Wave';
/* Page Specific Images */
import BackgroundImage from './images/backgroundImage.svg';
import HeaderImage from './images/headerImage.svg';

function Home(props) {
    const sectionColour = "#73cdff";

    return ( 
        <React.Fragment>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Header id="header" data={{
                name: "< Avant", 
                altName: 'alt = "Programming Club" />',
                link: "/avant/projects",
                linkText: "Our Projects",
                image: HeaderImage,
                bg: BackgroundImage
            }} />
            <About id="about" />
            <Events id="events" small href="/avant/events" />
            <Gallery id="gallery" small href="/avant/gallery" />
            <Wave type="hex" color={sectionColour}/>
            <Coordinators id="coordinators" withHeading style = {{
                backgroundColor: sectionColour,
            }} />
            <Contact id="contact" withMap={false} style = {{
                backgroundColor: sectionColour,
            }} />
        </React.Fragment>
    );
}

export default Home;