
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/loginComponent.css";
import  { React,useEffect, useState } from 'react'
import   {login, reset } from '../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import  {toast}  from 'react-toastify'
  const LogInComponents = () => {
  const dispatch=useDispatch()
  const {user,error}=useSelector(state=>state.auth)
  const signin=(e)=>{
    e.preventDefault()
    dispatch(login(userInfo))
  }
  const [userInfo,setUserInfo]=useState()
  const navigate=useNavigate()
  useEffect(()=>{
    if(error){
      toast.error(error.msg)
      dispatch(reset())
  }
    if(user){
        navigate('/')  ||   toast.success('user connected') 
    }
  },[user,error])
  return (
    <div>
         <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{
            setUserInfo({...userInfo, email:e.target.value})
        }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"onChange={(e)=>{
            setUserInfo({...userInfo, password:e.target.value})
        }}  />
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
export default LogInComponents