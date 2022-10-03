import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import QuickLink from './QuickLink';
import '../styles/QuickLinksPage.css';
import WorkshopImg from '../images/BroncoSec_Logo_Red.png';

export default function QuickLinksPage() {
  return (
    <Element name="quick-links">
      <div id="quicklink-wrapper">
        <h1>Quick Links</h1>
        {/*
        if we have to add more links, put it in here.
        <Container>
          <Row>
            <Col sm={6} className="quick-link-col">
              <QuickLink href="https://workshop.broncosec.com" title="Workshop Site" img={WorkshopImg}>
                <p>
                  Practice the skills we went over in our workshops!
                </p>
              </QuickLink>
            </Col>
          </Row>
        </Container>
        */}
        <QuickLink href="https://workshop.broncosec.com" title="Workshop Site" img={WorkshopImg}>
          <p>
            Practice the skills we went over in our workshops!
          </p>
        </QuickLink>
      </div>
    </Element>
  );
}
