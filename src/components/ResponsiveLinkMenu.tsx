import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll/modules';
import NavLinkText from './NavLinkText';
import '../styles/ResponsiveLinkMenu.css';

interface Props {
  height: number;
}

export default function ResponsiveLinkMenu(props: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  // https://stackoverflow.com/a/42234988/5732782
  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }

    // bind event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      // unbind event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [wrapperRef]);

  if (expanded) {
    return (
      <div id="nav-links" ref={wrapperRef}>
        <Link duration={0} delay={0} offset={-props.height} to="board" spy smooth hashSpy>
          <NavLinkText>Board</NavLinkText>
        </Link>
        <Link to="events" delay={0} duration={0} offset={-props.height} spy smooth hashSpy>
          <NavLinkText>Events</NavLinkText>
        </Link>
        <Link to="quick-links" delay={0} duration={0} offset={-props.height} spy smooth hashSpy>
          <NavLinkText>Quick Links</NavLinkText>
        </Link>
        <Link to="get-involved" delay={0} duration={0} offset={-props.height} spy smooth hashSpy>
          <NavLinkText>Get Involved</NavLinkText>
        </Link>
      </div>
    );
  }
  return (
    <button id="open-nav-links" onClick={() => setExpanded(true)} type="button">
      <FontAwesomeIcon icon={faBars} size="2x" />
    </button>
  );
}
