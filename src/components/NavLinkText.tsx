import React from 'react';
import '../styles/NavLinkText.css';

interface Props {
  children: string;
}

export default function NavLinkText(props: Props) {
  return (
    <p className="nav-link-text">{props.children}</p>
  );
}
