import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import '../css/ProductCarousel.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const [productData, setProductData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // Fetch product data from your backend API
    fetch('http://localhost:4000/api/products/allproducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the product data state with the fetched data
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className="product-carousel-container">
      <div className="product-carousel">
        <Slider {...settings}>
          {productData.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;