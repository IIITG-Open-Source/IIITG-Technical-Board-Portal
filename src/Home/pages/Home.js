import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Clubs from '../components/Clubs';
import Contact from '../components/Contact';
import PresentCouncil from '../components/Present-Council';
//Images
import Image from './images/header.svg';
import './home.module.css';

function Home() {
    return (
        <React.Fragment>
            <Header data={{
                name: "Technical Board", 
                altName: 'Indian Institute of Information Technology Guwahati',
                link: "/#clubs",
                linkText: "Our Clubs",
                image: Image,
            }}/>
            <About id="about" />
            <Clubs id="clubs" />
            <PresentCouncil />
            <Contact id="contact" WithMap/>
        </React.Fragment>
    );
}

export default Home;