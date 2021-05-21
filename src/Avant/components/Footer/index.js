import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { FaFacebookSquare as Facebook, FaInstagram as Instagram, FaGithub as GitHub, FaYoutube as YouTube, FaDiscord as Discord } from "react-icons/fa";
import { Link } from "react-router-dom";
import Styles from './footer.module.css';

function FooterHeadings(props) {
  return (
    <h3 className={Styles.heading}>{props.children}</h3>
  );
}

function FooterItem(props) {
  if (props.special) {
    if (props.to) {
      return (
        <Button className={`${Styles.link} ${Styles.specialLink}`} as={Link} to={props.to}>{props.children}</Button>
      );
    }
    else {
      return (
        <Button className={`${Styles.link} ${Styles.specialLink}`} href={props.href}>{props.children}</Button>
      );
    }
  }
  else if (props.to) {
    return (
      <Button className={Styles.link} as={Link} to={props.to}>{props.children}</Button>
    );
  }
  else if (props.href) {
    return (
      <Button className={Styles.link} href={props.href}>{props.children}</Button>
    );
  }
}

function Footer(props) {
  return (
    <section className={Styles.footer}>
      <Container fluid>

        <Row className={Styles.row}>
          <Col sm={12} md={4} className={Styles.col}>
            <FooterHeadings>Other Pages</FooterHeadings>
            <ButtonGroup vertical>
              <FooterItem to="/avant/events">Events</FooterItem>
              <FooterItem to="/avant/gallery">Gallery</FooterItem>
              <FooterItem to="/avant/past-coordinators">Past Coordinators</FooterItem>
              <FooterItem to="/avant/resources">Resources</FooterItem>
              <FooterItem to="/">Technical Board</FooterItem>
            </ButtonGroup>
          </Col>

          <Col sm={12} md={4} className={Styles.col}>
            <FooterHeadings>Other Technical Clubs</FooterHeadings>
            <ButtonGroup vertical>
              <FooterItem to="/mavericks">Mavericks - The Machine Learning Society</FooterItem>
              <FooterItem to="/robotics">Robotics Club</FooterItem>
              <FooterItem to="/gdsc">Google Developer Student Club</FooterItem>
            </ButtonGroup>
          </Col>

          <Col sm={12} md={4} className={Styles.col}>
            <FooterHeadings>Miscellaneous</FooterHeadings>
            <ButtonGroup vertical>
              <FooterItem to="/avant/team">Meet The Development Team</FooterItem>
            </ButtonGroup>
          </Col>
        </Row>

        <Row sm={1} className={Styles.row}>
          <Col>
            <FooterHeadings>Social Media Handles</FooterHeadings>
            <FooterItem href="#">
              <Facebook className={Styles.icon} />
            </FooterItem>
            <FooterItem href="#">
              <Instagram className={Styles.icon} />
            </FooterItem>
            <FooterItem href="#">
              <GitHub className={Styles.icon} />
            </FooterItem>
            <FooterItem href="#">
              <YouTube className={Styles.icon} />
            </FooterItem>
            <FooterItem href="#">
              <Discord className={Styles.icon} />
            </FooterItem>
          </Col>
        </Row>

        <Row sm={1} className={Styles.row}>
          <Col>
            <FooterItem special to="/">Technical Board</FooterItem>
          </Col>
        </Row>

        <Row sm={1} className={Styles.row}>
          <Col>
            <FooterItem special href="http://www.iiitg.ac.in/">Indian Institute of Information Technology Guwahati</FooterItem>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Footer;
