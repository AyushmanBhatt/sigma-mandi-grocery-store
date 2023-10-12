import React, { useState, useRef } from "react";
import "../css/Cards.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import cartContext from "./cartContext";
import { useContext } from "react";
export default function Card(props) {
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
        const products = { ...props };
        addItem(products);
    };

    return (
        <div key={id} className="cards" >
            <img style={{borderRadius:"10px",height:"220px",width:"100%"}} src={img} alt="Nike-Shoe" className="sneaaker-img" />
            <h1 style={{ color: "white" }} className="title" >
                <Link to={`/product/${id}`} className="product-link">
                    {title}
                </Link>
            </h1>
            <p >
                {subtitle}
            </p>
            <p style={{ fontSize: "1.3rem", color: "white" }} >
                {price} Rs
            </p>
            <div className="card__counter">
                <button className="card__btn" onClick={decrementCounter}>-</button>
                <div className="card__counter-score">{counter}</div>
                <button className="card__btn card__btn-plus" onClick={incrementCounter}>+</button>
            </div>
            <div />
            <div className="button-box" >
                <button className="purchase" onClick={handleAddToCart}>
                    Purchase
                </button>
            </div>
        </div>
    );
}