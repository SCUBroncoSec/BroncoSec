import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll/modules';
import ClassNames from 'classnames';
import NavLinkText from './NavLinkText';
import '../styles/NavBar.css';
import BroncoSecLogo from '../images/BroncoSec_Logo_Red.png';

export default function NavBar() {
  const [isTransparent, setTransparent] = useState<boolean>(true);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };
    document.addEventListener('scroll', handleScroll);

    // @ts-ignore
    setHeight(document.getElementById('navbar').clientHeight);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = ClassNames({
    transparent: isTransparent,
    opaque: !isTransparent,
  });

  return (
    <nav className={navbarClass} id="navbar">
      <div id="navbar-content">
        <Link
          duration={0}
          delay={0}
          offset={-height}
          to="home"
          spy
          smooth
          hashSpy
        >
          <img src={BroncoSecLogo} alt="logo" height={50} width={50} />
        </Link>
        <Link
          duration={0}
          delay={0}
          offset={-height}
          to="board"
          spy
          smooth
          hashSpy
        >
          <NavLinkText>Board</NavLinkText>
        </Link>
        <Link to="events" delay={0} duration={0} offset={-height} spy smooth hashSpy>
          <NavLinkText>Events</NavLinkText>
        </Link>
        <Link to="quick-links" delay={0} duration={0} offset={-height} spy smooth hashSpy>
          <NavLinkText>Quick Links</NavLinkText>
        </Link>
        <Link to="get-involved" delay={0} duration={0} offset={-height} spy smooth hashSpy>
          <NavLinkText>Get Involved</NavLinkText>
        </Link>
      </div>
    </nav>
  );
}
