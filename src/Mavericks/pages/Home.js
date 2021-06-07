import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
import Coordinators from "../components/Coordinators";
import Wave from "../components/common/Effects/Wave";
import About from "../components/About";
import HeaderImage from "./images/header-fg.png";

function Home(props) {
  const sectionColour = "#73cdff";

  return (
    <React.Fragment>
      {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
      <Header
        id="header"
        data={{
          name: "MAVERICKS",
          altName: "Machine Learning Club of IIITG",
          link: "/mavericks/projects",
          linkText: "Our Projects",
          image: HeaderImage,
          // bg: BackgroundImage
        }}
      />
      <About id="about" />
      <Events id="events" small href="/mavericks/events" />
      <Gallery id="gallery" href="/mavericks/gallery" />
      <Wave type="hex" color={sectionColour} />
      <Coordinators
        id="coordinators"
        withHeading
        style={{
          backgroundColor: sectionColour,
        }}
      />
      <Contact
        id="contact"
        withMap={false}
        style={{
          backgroundColor: sectionColour,
        }}
      />
    </React.Fragment>
  );
}

export default Home;
