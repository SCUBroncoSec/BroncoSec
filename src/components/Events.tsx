import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import '../styles/Events.css';
import EventType from './EventType';
import FlagImg from '../images/combined_flags.png';
import WorkshopImg from '../images/OSINT-workshop.jpeg';
import SpeakerImg from '../images/BroncoSec_Speaker.jpeg';

export default function Events() {
  return (
    <Element name="events">
      <div id="events-wrapper">
        <h1>Events</h1>
        <br />
        <div id="event-types-wrapper">
          <Container>
            <Row>
              <Col sm={4}>
                <EventType imageSrc={FlagImg} title="Capture The Flag">
                  <p>
                    Learn valuable security skills while solving fun challenges!
                  </p>
                </EventType>
              </Col>
              <Col sm={4}>
                <EventType imageSrc={WorkshopImg} title="Workshops">
                  <p>
                    Learn about concepts in security, and apply your knowledge with carefully crafted challenges!
                  </p>
                </EventType>
              </Col>
              <Col sm={4}>
                <EventType imageSrc={SpeakerImg} title="Speakers">
                  <p>
                    Learn about security from people who have worked in the industry!
                  </p>
                </EventType>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Element>
  );
}
