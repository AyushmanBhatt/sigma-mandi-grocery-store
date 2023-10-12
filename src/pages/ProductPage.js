/*import 'tailwindcss/tailwind.css';
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import productData from '../cards/productData';
import cartContext from '../components/cartContext';

const ProductPage = () => {
  const { productId } = useParams();
  const product = productData[productId];
  const { cartItems, addItem, incrementItem, decrementItem } = useContext(cartContext);
  const [images, setImages] = useState({
    img1: product.img1,
    img2: product.img2,
    img3: product.img3,
    img4: product.img4,
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(product.quantity);

  return (
    <div className='flex flex-col lg:flex-row gap-16 items-center'>
      <div className='flex flex-col gap-6 lg:w-2/4'>
        <img src={activeImg} alt={product.title} className='w-full h-full aspect-square object-cover rounded-xl' />
        <div className='flex justify-between h-24'>
          {Object.keys(images).map((imgKey) => (
            <u
              key={imgKey}
              src={images[imgKey]}
              alt={`Image ${imgKey}`}
              className='w-24 h-24 rounded-md cursor-pointer'
              onClick={() => setActiveImage(images[imgKey])}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <span className='text-violet-600 font-semibold'>{product.title}</span>
          <h1 className='text-3xl font-bold'>{product.subtitle}</h1>
        </div>
        <p className='text-gray-700'>
          {product.description}
        </p>
        <h6 className='text-2xl font-semibold'>₹ {product.price.toFixed(2)}</h6>
        <div className='flex items-center gap-12'>
          <div className='flex items-center'>
            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => decrementItem(productId)}>−</button>
            <span className='py-4 px-6 rounded-lg'>{amount}</span>
            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => incrementItem(productId)}>+</button>
          </div>

          <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl' onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;*/
import 'tailwindcss/tailwind.css';
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cartContext from '../components/cartContext';

const ProductPage = () => {
  const { productId } = useParams();
  const { cartItems, addItem, incrementItem, decrementItem } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products/allproducts');

        if (response.ok) {
          const productData = await response.json();
          setProducts(productData);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Find the product with the matching productId
    const selectedProduct = products.find((product) => product.id === parseInt(productId, 10));
    setActiveProduct(selectedProduct);
  }, [productId, products]);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleAddToCart = () => {
    if (activeProduct) {
      const productToAdd = { ...activeProduct, quantity: amount };
      addItem(productToAdd);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row gap-16 items-center'>
      <div className='flex flex-col gap-6 lg:w-2/4'>
        {activeProduct && (
          <img
            src={activeProduct.img}
            alt={activeProduct.title}
            className='w-full h-full aspect-square object-cover rounded-xl cursor-pointer'
          />
        )}
      </div>
      <div className='flex flex-col gap-4 lg:w-2/4'>
        {activeProduct && (
          <div>
            <div>
              <span className='text-violet-600 font-semibold'>{activeProduct.title}</span>
              <h1 className='text-3xl font-bold'>{activeProduct.subtitle}</h1>
            </div>
            <p className='text-gray-700'>{activeProduct.description}</p>
            <h6 className='text-2xl font-semibold'>₹ {activeProduct.price.toFixed(2)}</h6>
            <div className='flex items-center gap-12'>
              <div className='flex items-center'>
                <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={handleDecrement}>-</button>
                <span className='py-4 px-6 rounded-lg'>{amount}</span>
                <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={handleIncrement}>+</button>
              </div>
              <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl' onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;