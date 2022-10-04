import React from 'react';
import { Element } from 'react-scroll';
import '../styles/LandingView.css';

export default function LandingView() {
  return (
    <Element name="home">
      <div id="landing-wrapper">
        <h1 id="main-text">BroncoSec</h1>
        <div id="description">
          <h2>Santa Clara’s cybersecurity club</h2>
        </div>
        <div id="about-us">
          <h2>We are a community of individuals passionate about all things security</h2>
        </div>
      </div>
    </Element>
  );
}
