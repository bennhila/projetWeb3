import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsHouseDoorFill, } from "react-icons/bs";
import   {logout } from '../redux/slice/adminAuthSlice'
import {  useDispatch,useSelector, } from 'react-redux'
import { useState } from 'react';
import { searchProduct } from '../redux/slice/produitAuthSlice';

function NavBarAamin() {
  const  {data} = useSelector(state => state.produitReducer);
  const [state, setState] = useState();
 
  
  
  const dispatch= useDispatch()
  const logoff = (e)=>{
    e.preventDefault()
    dispatch(logout())
  }
  const searsh =(e)=>{
    dispatch(searchProduct(state))
    
      }
  return (
    <div> 
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="/adminHome">ecommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
      >
      <Nav.Link href="/adminHome">Home   <BsHouseDoorFill/> </Nav.Link>
              <button className='logoutBtn' onClick={logoff} >logout</button>   
      </Nav>
      <Form className="d-flex">
      <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={(e)=>{
       /*  setState({...state, nameProduit:e.target.value}) */
        dispatch(searchProduct({nameProduit:e.target.value}))
    }}
      />
      <Button onClick={searsh}  variant="outline-success">Search</Button>
      </Form>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
  )
}
export default NavBarAamin

