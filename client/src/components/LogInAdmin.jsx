import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  { useEffect, useState } from 'react'
import   {login, reset } from '../redux/slice/adminAuthSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import  {toast}  from 'react-toastify'
const LogInAdmin = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {admin,error,success}=useSelector(state=>state.authAdmin)
  const signin=(e)=>{
    e.preventDefault()
    dispatch(login(adminInfo))
  }
  const [adminInfo,setadminInfo]=useState()
  useEffect(()=>{
    if(error){
      toast.error(error.msg)
      dispatch(reset())
  }
    if(success){
        navigate('/adminHome')  ||   toast.success('admin connected') 
    }
  },[success,admin,error])
  return (
    <div>
      {}
                 <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{
            setadminInfo({...adminInfo, email:e.target.value})
        }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>{
            setadminInfo({...adminInfo, password:e.target.value})
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" onClick={signin}>
        login
      </Button>
    </Form>
    </div>
  )
}
export default LogInAdmin