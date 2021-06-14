import React from "react";
import SectionHeader from "../common/SectionHeader";
import Section from "../common/Section";
import Grid from "./Grid";
import Spinner from "../common/Effects/Spinner";
//Firebase
import firebase from "../../../Avant/firebase";

class Coordinators extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("coordinators")
      .where("name", "==", "avant")
      .get()
      .then((snapshot) => {
        const content = snapshot.docs[0].data().list;
        const coordinators = content.map((coordinator) => ({
          image:
            "https://media.istockphoto.com/vectors/programmers-coding-and-correct-errors-in-project-vector-id947664372?k=6&m=947664372&s=612x612&w=0&h=EPTY8KIx9-v22fTXabH70LtrgZZq4shTi11buDVOs_I=",
          name: coordinator.name,
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elementum odio, in tristique ante. Ut accumsan fringilla velit quis porta. Sed tellus nibh, dictum vel consectetur sit amet, tempus maximus ex. Pellentesque sit amet libero tristique, consequat mauris eu, posuere neque. Curabitur dapibus dolor nisi, sed tempus diam euismod et.",
        }));

        this.setState({
          list: coordinators,
        });
      });
  }

  render() {
    return (
      <Section id={this.props.id} style={this.props.style}>
        {this.props.withHeading && <SectionHeader>Coordinators</SectionHeader>}
        {this.state ? <Grid data={this.state.list} /> : <Spinner />}
      </Section>
    );
  }
}

export default Coordinators;
