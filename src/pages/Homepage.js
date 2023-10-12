import ProductCarousel from '../components/ProductCarousel';
import React, { useState, useEffect } from 'react'
import BottomNavbar from '../components/BottomNavbar'
import Footer from '../components/Footer'
import img from '../images/Whitebasket.png'
import { exo } from '../Project'
import '../css/Homepage.css'
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <BottomNavbar />
      <div className="groceries-home">
        <div className="landing1">
          <div className="body1">
            <div className="title1">
              <b className="lets-now-shop-for-container1">
                <p className="lets-now-shop1">Let’s now shop</p>
                <p className="lets-now-shop1">For daily food</p>
                <p className="lets-now-shop1">& necessities.</p>
              </b>
              <div className="freshness-and-speed1">
                Freshness and Speed at your Fingertips: Get groceries delivered in
                30 Minutes with our website or mobile app.
              </div>
              <button className="button1">
                <span className="button-content"><b>Order Now</b></span>
              </button>
            </div>
          </div>
          <img className="landing-icon" alt="" src={img} />
        </div>
      </div>
      <div className='title2'>
        <p className="lets-now-shop1" style={{ fontSize: "3rem" }}>Best Sellers</p>
      </div>
      <div className="product-card-container">
        <ProductCarousel />
      </div>
      <Footer />
    </div >
  );
};

export default Homepage;