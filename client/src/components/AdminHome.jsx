import React from 'react'
import NavBarAamin from './NavBarAamin'
import {  useSelector } from 'react-redux'
import ProduitAdmin from './ProduitAdmin'
import AddProduit from './AddProduit'
function AdminHome() {
  const {admin}=useSelector(state=>state.authAdmin)
  return (
    <div>
      {admin ?
        <div>
        
          <NavBarAamin/>
          <ProduitAdmin/>
         
        </div>
       :<h1>secret page</h1 > }
    </div>
  )
}
export default AdminHome