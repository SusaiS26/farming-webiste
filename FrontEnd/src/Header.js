import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import piglog1 from "./pigphotos/piglog1.jpeg";
import "./Header.css";
import { cartContext } from './App';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(cartContext);  // Ensure proper destructuring and usage

  const homeOnclickValue = (e) => {
    e.preventDefault();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="transparent-hide">
      <nav>
        <img src={piglog1} alt="Logo" />
        <input type='checkbox' id='check' />
        <label htmlFor="check">
          <i><FontAwesomeIcon icon={faBars} id='btn' /></i>
          <i><FontAwesomeIcon icon={faXmark} id='cancel' /></i>
        </label>
        <ul className="">
          <li><Link to='/' className="link-style" onClick={homeOnclickValue}>Home</Link></li>
          <li><Link to='/Aboutpage' className="link-style">About Us</Link></li>
          <li><Link to='/Gallery' className="link-style">Gallery</Link></li>
          <li><Link to='/shop' className="link-style">Shop</Link></li>
          <li><Link to='/Contact' className="link-style">Contact Us</Link></li>
          <div className="button-sec">
            <li className="button-style"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <li className="button-style ms-4 link-style"><Link to="/SViewcart" className="link-style"><span className='cart-count'>{cart.length}</span><FontAwesomeIcon icon={faCartShopping} /></Link></li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
