import React, { useEffect, useState } from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-scroll/modules';
import ResponsiveLinkMenu from './ResponsiveLinkMenu';
import BroncoSecLogo from '../images/BroncoSec_Logo_Red.png';

export default function ResponsiveNavbar() {
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
      <div id="navbar-content-responsive">
        <Link duration={0} delay={0} offset={-height} to="home" spy smooth hashSpy>
          <img src={BroncoSecLogo} alt="logo" height={50} width={50} />
        </Link>
        <ResponsiveLinkMenu height={height} />
      </div>
    </nav>
  );
}
