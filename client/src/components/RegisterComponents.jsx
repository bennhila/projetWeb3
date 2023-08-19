import { React, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/registerComponents.css";
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../redux/slice/authSlice'
import  {toast}  from 'react-toastify'
const RegisterComponents = () => {
  const [userData,setUser]=useState({})
  console.log(userData);
  const {user,error,success}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const signup=(e)=>{
      e.preventDefault()
      dispatch(register(userData)) 
  }
  useEffect(()=>{
    if(error){
      toast.error(error.message)
      dispatch(reset()) 
  }
    if(user){
      navigate('/')||   toast.success('user created')
    }
},[user,error] )
  return (
    <div>
         <Form className='form'>
         <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="text" placeholder="name" onChange={(e)=>{
            setUser({...userData, name:e.target.value})
        }}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter email"onChange={(e)=>{
            setUser({...userData, email:e.target.value})
        }}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{
            setUser({...userData, password:e.target.value})
        }}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password confirm" onChange={(e)=>{
            setUser({...userData, confirmPassword:e.target.value})
        }} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="number" placeholder="telephone number"  onChange={(e)=>{
            setUser({...userData, telephoneNumber:e.target.value})
        }}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={signup}>
      register
    </Button>
  </Form>
  </div>
  )
}
export default RegisterComponents