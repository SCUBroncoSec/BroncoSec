import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/BoardMember.css';
import BoardMemberModal from './BoardMemberModal';

interface Props {
  imageSrc: any;
  title: string;
  name: string;
  children: string;
}

export default function BoardMember(props: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);

  return (
    <>
      <div className="board-member-minimized" onClick={handleShow} role="button" tabIndex={0} onKeyPress={() => {}}>
        <img className="board-member-image" src={props.imageSrc} alt="Avatar" />
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
      </div>

      <Modal show={showModal} onHide={handleHide} className="board-member-mo">
        <BoardMemberModal imageSrc={props.imageSrc} name={props.name} title={props.title} handleHide={handleHide}>
          {props.children}
        </BoardMemberModal>
      </Modal>
    </>
  );
}
