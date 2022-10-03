import React, { ReactNode } from 'react';
import '../styles/QuickLink.css';

interface Props {
  href: string;
  title: string;
  // eslint-disable-next-line react/require-default-props
  img?: any;
  // eslint-disable-next-line react/require-default-props
  icon?: ReactNode;
  children: any;
}

export default function QuickLink(props: Props) {
  const pic = (props.img) ? <img src={props.img} alt="Avatar" className="quick-link-img" /> : props.icon;

  return (
    <a className="quick-link" href={props.href}>
      <div className="quick-link-div">
        {pic}
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </a>
  );
}
