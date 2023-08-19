import React, { useEffect } from 'react';
import {  deleteproduit, getProduit, reset } from '../redux/slice/produitAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddProduit from './AddProduit';
import UpdateProduit from './UpdateProduit';
import '../styles/produitAdmin.css'
const ProduitAdmin = () => {
  const dispatch = useDispatch();
  const  {copyData} = useSelector(state => state.produitReducer);
  const {updated}= useSelector(state=>state.produitReducer)
  useEffect(() => {
    dispatch(getProduit());
    dispatch(reset())
   },[updated]);
  const DELETE =()=>{
    dispatch(deleteproduit());
   }
  return (
    
    <div className='produitCard' >
        <AddProduit/>

      <div className='produitCard'>
      {copyData&& copyData.map(el => <>
    <Card className='card' key={el._id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imgProduit} />
      <Card.Img variant="top" src={el._id} />

      <Card.Body>
        <Card.Title>{el.nameProduit}</Card.Title>
        
        <Card.Text>
          {el.infoProduit}
        </Card.Text>
        <Card.Text>
          {el.priceProduit}
        </Card.Text>
        
          <div className='btn'>
          < UpdateProduit  el={el}   /> 
           <Button className="btnDelete" variant="danger" onClick={DELETE}>delete</Button>
          </div>
      </Card.Body>
    </Card>
  </>)}
      </div>
    </div>
  );
};
export default ProduitAdmin;
