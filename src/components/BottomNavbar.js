import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../css/Bottomnav.css'
import { FaTag } from "react-icons/fa";
const BottomNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <nav className='bottom-nav-container'>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink className="Parent" to="/contact">Fresh-Vegetables
                            <ul className="Child">
                                <li>Potato , Onions & Tomatoes </li>
                                <li>Cucumbers & Capcsicum</li>
                                <li>Leafy Vegetables</li>
                                <li>Root Vegetables</li>
                                <li>Beans , Brinjals & Okra</li>
                                <li>Cabbage & Cauliflowers</li>
                                <li>Guard , Pumpkin & Drumstick</li>
                                <li>Speciality</li>
                            </ul>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink className="Parent" to="/contact">Herbs & Seasoning
                            <ul className="Child">
                                <li>Lemon , Ginger & Garlic</li>
                                <li>Indian & Exotic Herbs</li>
                            </ul>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="Parent" to='/logout'>Fresh-Fruit

                            <ul className="Child">
                                <li>Banana , Sapota and Papaya</li>
                                <li>Kiwi , Melon & Citrus Fruits</li>
                                <li>Apples & Pomegrantes</li>
                                <li>Seasonal Fruits</li>
                                <li>Mangoes</li>
                                <li>Fruit Baskets</li>
                            </ul>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="Parent" to='/logout'>Organic Fruits & Vegetables

                            <ul className="Child">
                                <li>Organic Fruits</li>
                                <li>Organic Vegetables</li>
                            </ul>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="Parent" to='/logout'>Cuts & Sprouts

                            <ul className="Child">
                                <li>Cut fruit , tender Coconut</li>
                                <li>Cut and peeled veggies</li>
                                <li>Fresh Salad and Sprouts</li>
                                <li>Receipe Packs</li>
                            </ul>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="Parent" to='/logout'>Exotic Fruits & Veggies

                            <ul className="Child">
                                <li>Exotic Fruits</li>
                                <li>Exotic Veggies</li>
                            </ul>

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default BottomNavbar
