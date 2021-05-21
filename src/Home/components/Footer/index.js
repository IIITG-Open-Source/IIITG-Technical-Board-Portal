import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { FaFacebookSquare as Facebook, FaInstagram as Instagram, FaGithub as GitHub } from "react-icons/fa";
import { NavHashLink as Link } from 'react-router-hash-link';
import Styles from './footer.module.css';

function FooterHeadings(props) {
  return (
    <h3 className={Styles.heading}>{props.children}</h3>
  );
}

function FooterItem(props) {
  if (props.to) {
    return (
      <Button className={Styles.link} as={Link} to={props.to}>{props.children}</Button>
    );
  }
  else if (props.special) {
    return (
      <Button className={`${Styles.link} ${Styles.specialLink}`} href={props.href}>{props.children}</Button>
    );
  }
  else if (props.href) {
    return (
      <Button target="_blank" className={Styles.link} href={props.href}>{props.children}</Button>
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
              <FooterItem to="/past-council">Past Council</FooterItem>
              <FooterItem href="https://github.com/mynameisankit/technicalBoard/wiki">Documentation</FooterItem>
            </ButtonGroup>
          </Col>

          <Col sm={12} md={4} className={Styles.col}>
            <FooterHeadings>Technical Clubs</FooterHeadings>
            <ButtonGroup vertical>
              <FooterItem to="/avant">Avant - Programming Club</FooterItem>
              <FooterItem to="/mavericks">Mavericks - The Machine Learning Society</FooterItem>
              <FooterItem to="/robotics">Robotics Club</FooterItem>
              <FooterItem to="/gdsc">Google Developer Student Club</FooterItem>
            </ButtonGroup>
          </Col>

          <Col sm={12} md={4} className={Styles.col}>
            <FooterHeadings>Miscellaneous</FooterHeadings>
            <ButtonGroup vertical>
              <FooterItem to="/team">Meet The Development Team</FooterItem>
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
