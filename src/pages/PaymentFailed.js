import React from 'react'
import img from '../images/failed-icon-7.png'
import '../css/Failed.css'
import { Link } from 'react-router-dom'
const PaymentFailed = () => {
    return (
        <div className='success'>
            <div className='Success-container'>
                <div className='success-1'>
                    <img src={img} alt="#"></img>
                </div>
                <div className='success-2'>
                    <h1>Sorry , Payment Failed !</h1>
                    <p>Please try again....</p>
                    <button><Link to='/homepage'>Return back to homepage</Link></button>
                </div>
            </div>
        </div>
    )
}

export default PaymentFailed;