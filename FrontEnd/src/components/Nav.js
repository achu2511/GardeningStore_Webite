import { Link } from 'react-router-dom';
import logo from '../images/coca-leaves.png';
import cart from '../images/grocery-store.png';
import profile from '../images/man.png';
import {useSelector} from 'react-redux';
import React, { useState } from "react";

export default function Navbar() {

  const user =useSelector(state => state.user.value)
  return (
    <>
      <div className='nav-cont'>
        <div className='logo-head'>
          <img className='logo-img' src={logo}/ >
          <div className='logo-name nv' >Green Seed</div>
        </div>
        <Link to="/home" className='link'><div className='nav-home nv'>Home</div></Link>
        <Link to="/Sell" className='link'><div className='nav-guide nv'>Sell Your Products</div></Link>
        <Link to="/review" className='link'><div className='nav-abt nv'>Review</div></Link>
        <Link to="/" className='link'><div className='nav-login nv'>LogOut</div></Link>
        <img className='nav-profile-logo' src={profile}/>
        <h3 className='nav-profile-name'>{user.name}</h3>
        <Link to="/mycart"><div className='nav-cart'>
          <img className='nav-cart-logo' src={cart}/>
          <p className='nav-cart-txt'>My Cart</p>
        </div></Link>
      </div>
    </>
  );
}
