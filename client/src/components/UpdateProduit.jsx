import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import { upDateProduit } from '../redux/slice/produitAuthSlice';
function UpdateProduit( {el}) {
  const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
  


         

    const [update, setupdate] = useState(el);
  
    const upDate = (e)=>{
      e.preventDefault();
  
      dispatch(upDateProduit(update));
      handleClose()
  
    }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
       upDate
      </Button>
  <Modal show={show} onHide={handleShow}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>  
          <Form.Control
          value={update.nameProduit} type="text" placeholder='produitName' onChange={(e)=>{
            setupdate({...update, nameProduit:e.target.value})
        }}
          />
<Form.Control
          value={update.imgProduit} type="text" placeholder='info el' onChange={(e)=>{
            setupdate({...update, infoProduit:e.target.value})
        }}
          />
<Form.Control
          value={update.imgProduit} type="text" placeholder='img link el' onChange={(e)=>{
            setupdate({...update, imgProduit:e.target.value})
        }}
          />
            <Form.Control
          value={update.priceProduit}  type="text" placeholder='price el' onChange={(e)=>{
            setupdate({...update, priceProduit:e.target.value})
        }}
          />
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={upDate}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>

    </div>
  )
}

export default UpdateProduit
