import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import QuickLink from './QuickLink';
import SlackIcon from '../images/SlackLogoNoBG.png';
import '../styles/GetInvolved.css';

export default function GetInvolved() {
  return (
    <Element name="get-involved">
      <div id="get-involved-wrapper">
        <h1>Get Involved</h1>
        <Container>
          <Row>
            <Col sm={6} className="get-involved-col">
              <QuickLink href="https://forms.gle/kk6AEfMapfp5Udgi8" title="Mailing list" icon={<FontAwesomeIcon icon={faEnvelope} size="5x" />}>
                <p>
                  Join our mailing list
                </p>
              </QuickLink>
            </Col>
            <Col sm={6} className="get-involved-col">
              <QuickLink href="https://scuacm.slack.com/" title="Join our slack" img={SlackIcon}>
                <p>
                  Join us on slack! Make sure to join #bronco-sec
                </p>
              </QuickLink>
            </Col>
          </Row>
        </Container>
      </div>
    </Element>
  );
}
