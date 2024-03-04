import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const DeleteUser = (props) => {
  return (
    <>
    <Modal show={props.showModal} onHide={() => {props.closeDeleteModalHandler();}} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {props.closeDeleteModalHandler();}}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {props.confirmDeleteHandler()}}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default DeleteUser;
