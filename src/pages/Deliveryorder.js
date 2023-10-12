import React from 'react'
import AdminSidebar from "../components/AdminSidebar";
import "../css/deliveryorder.css";
import Table from '../components/table'


const Deliveryorder = () => {
  return (
    <div className='deliveryorder'>
      <AdminSidebar/>
      <div className='deliverydetails'>
        <h1>Delivery Details</h1>
        <div className='listcontainer'>
          <div className='listtitle'>Latest Order and Delivery
          <br/><br/>
          <Table/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deliveryorder
