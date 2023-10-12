import React, { useState, useContext } from 'react';
import '../css/ProductCard.css';
import cartContext from './cartContext';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { id, title, subtitle, price, quantity, img } = props;
    const [counter, setCounter] = useState(quantity);
    const { addItem } = useContext(cartContext);
    const decrementCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    const incrementCounter = () => {
        setCounter(counter + 1);
    };
    const handleAddToCart = () => {
        const item = { ...props };
        addItem(item);
    };
    return (
        <div className="card">
            <div className="card__img">
                <img src={img} alt="Product" className="product-image" />
            </div>
            <div className="card__title">
                <Link to={`/product/${id}`} className="product-link">
                    {title}
                </Link>
            </div>
            <div className="card__subtitle">{subtitle}</div>
            <div className="card__wrapper">
                <div className="card__price">₹{price.toFixed(2)}</div>
                <div className="card__counter">
                    <button className="card__btn" onClick={decrementCounter}>-</button>
                    <div className="card__counter-score">{counter}</div>
                    <button className="card__btn card__btn-plus" onClick={incrementCounter}>+</button>
                </div>
            </div>
            <div className="card__button-container">
                <div className="button">
                    <div className="button-wrapper">
                        <div className='text'>
                            Add to Cart
                        </div>
                        <span className="icon">
                            <button
                                type="button"
                                className="btn"
                                onClick={handleAddToCart}
                            >
                                <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                </svg>
                            </button>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;