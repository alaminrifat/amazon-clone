import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div>
                <a href="/product">Product</a>
                <a href="/shopping">Shopping</a>
                <a href="/cart">Cart</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;