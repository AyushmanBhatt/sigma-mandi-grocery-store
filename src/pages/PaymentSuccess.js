import React from 'react'
import img from '../images/check_mark.png'
import '../css/Success.css'
import { Link } from 'react-router-dom'
const PaymentSuccess = () => {
    return (
        <div className='success'>
            <div className='Success-container'>
                <div className='success-1'>
                    <img src={img} alt="#"></img>
                </div>
                <div className='success-2'>
                    <h1>Order Successful !</h1>
                    <p>Thank you for ordering !</p>
                    <button><Link to='/homepage'>Continue Shopping</Link></button>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess;