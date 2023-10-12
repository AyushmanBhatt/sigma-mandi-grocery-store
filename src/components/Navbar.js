import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../images/logo.png';
import { FaShoppingBasket } from "react-icons/fa";
import cartContext from './cartContext';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = ({ userType }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems, toggleCart } = useContext(cartContext);
    const cartQuantity = cartItems.length;
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    console.log("user:", user);
    return (
        <nav className='upper-nav'>
            <Link to="/homepage" className="title">
                <img alt='' id="logo" src={logo} />
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to='/shoppingcart'>
                        <div
                            title="Cart"
                            className="cart_icon"
                            onClick={() => toggleCart(true)}
                        >
                            <FaShoppingBasket style={{ marginTop: "5px" }} />
                            {cartQuantity >= 1 && (
                                <span className="badge">{cartQuantity}</span>
                            )}
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/aboutpage"><b>About</b></NavLink>
                </li>
                <li>
                    <NavLink to='/dbviewpage'><b>Market</b></NavLink>
                </li>
                <li>
                    <NavLink to="/contactpage"><b>Contact</b></NavLink>
                </li>
                <li>
                    <NavLink to="/AdminPage"><b>Dashboard</b></NavLink>
                </li>
                {user && user.userType === 'vendor' && (
                    <li>
                        <NavLink to='/productform'><b>Enter-data</b></NavLink>
                    </li>
                )}
                <li>
                    <NavLink>
                        {user && (
                            <div>
                                <button onClick={handleClick}>Logout</button>
                            </div>
                        )}
                        {!user && (
                            <div>
                                <Link to='/'>Login</Link>
                                <Link to='/signin'>Sign Up</Link>
                            </div>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;