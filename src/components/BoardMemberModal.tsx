import React from 'react';
import '../styles/BoardMember.css';

interface Props {
  imageSrc: any;
  name: string;
  title: string;
  children: string;
  handleHide: any;
}

export default function BoardMemberModal(props: Props) {
  return (
    <div className="board-member-maximized">
      <div className="modal-close" onClick={props.handleHide} role="button" onKeyPress={() => {}} tabIndex={0}> × </div>
      <img className="board-member-image" src={props.imageSrc} alt="Avatar" />
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <p className="bio">
        {props.children}
      </p>
    </div>
  );
}
