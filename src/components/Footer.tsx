import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer id="footer">
      <div id="reach-us">
        <h4>Reach us at</h4>
        <h6>santaclara.broncosec@gmail.com</h6>
      </div>
      <div id="socials-wrapper">
        <h5>Connect with us</h5>
        <div id="socials-links">
          <a href="https://www.instagram.com/scubroncosec/" id="instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com/SCUBroncoSec" id="github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
