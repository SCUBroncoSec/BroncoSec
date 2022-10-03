import React from 'react';
import '../styles/EventType.css';

interface Props {
  imageSrc: any;
  title: string;
  children: any;
}

export default function EventType(props: Props) {
  return (
    <div className="event-type">
      <div className="event-img-wrapper">
        <img className="event-type-img" src={props.imageSrc} alt="Avatar" />
      </div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
