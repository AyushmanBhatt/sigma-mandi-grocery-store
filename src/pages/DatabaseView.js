import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Cards';
import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';
import '../css/dbview.css';
import { useAuthContext } from "../hooks/useAuthContext";

const ProductList = () => {
    /*const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(`http://localhost:4000/api/shops`);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [query]);*/
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/products/allproducts');

                if (response.ok) {
                    const json = await response.json();
                    setProducts(json);
                } else {
                    // error
                    console.error('Failed to fetch products:', response.statusText);
                }
            } catch (error) {
                // n/w
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [query]);
    return (
        <div>
            <Navbar />
            <BottomNavbar />
            <div className='marketplace-container'>
                <input
                    className="search"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <h1 className='dbviewh1'>Market Place</h1>
                <div className="grid-container">
                    {products.filter(user => user.title.includes(query)).map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;