import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonFill, BsPersonFillAdd,BsHouseDoorFill,BsCartPlusFill } from "react-icons/bs";
import {  useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slice/authSlice';
const NavBarSite = () => {
  const {user}=useSelector(state=>state.auth)
const dispatch= useDispatch()
const logoff = (e)=>{
  e.preventDefault()
  dispatch(logout())
}
  return (
    <div>    
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home   <BsHouseDoorFill/> </Nav.Link>
            {!user ?  
              <><Nav.Link href="/logIn">logIn   <BsPersonFill/> </Nav.Link> 
              
              <Nav.Link href="/register">register   <BsPersonFillAdd/> </Nav.Link> </>
             :          <button className='logoutBtn' onClick={logoff}>logout</button>}  
            <Nav.Link href="/pannier">pannier   <BsCartPlusFill/> </Nav.Link>            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default NavBarSite