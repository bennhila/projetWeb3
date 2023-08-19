import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch,  } from 'react-redux'
import { addProduit } from '../redux/slice/produitAuthSlice';

const AddProduit = () => {
  const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      const [newProduit,setnewProduit]=useState()
    
    const addProduitFunction =(e)=>{
      
      e.preventDefault();
      dispatch(addProduit(newProduit));
      // console.log(newProduit);
      setShow(false)
    }
  return (
    <div>
          <Button variant="primary" onClick={handleShow}>
        add Produit
      </Button>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" placeholder="nameProduit"  onChange={(e)=>{
            setnewProduit({...newProduit, nameProduit:e.target.value}) }}/>
        <Form.Control type="text" placeholder="infoProduit" onChange={(e)=>{
            setnewProduit({...newProduit, infoProduit:e.target.value}) }} />
        <Form.Control type="text" placeholder="imgProduit"  onChange={(e)=>{
            setnewProduit({...newProduit, imgProduit:e.target.value}) }}/>
        <Form.Control type="nember" placeholder="priceProduit" onChange={(e)=>{
            setnewProduit({...newProduit, priceProduit:e.target.value}) }}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduitFunction}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
  )
}

export default AddProduit