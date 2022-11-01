import React, { useState, memo } from 'react';
import Link from 'next/link';

import { AiOutlineShopping } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Cart } from '..';
import { useStateContext } from '../../context/StateContext';
import AsideNav from './AsideNav';
import SearchBox from './SearchBox';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [showAside, setShowAside] = useState(false);
  const { showCart, setShowCart, totalQuantities, cartItems } = useStateContext();

  const showAsideHandler = () => setShowAside((show) => !show);
  const showCartHandler = () => setShowCart(true)

  return (
    <div className="navbar-container ">
      <AsideNav closeSideBar={showAsideHandler} showAside={showAside} />
      <div className="container">
        <div className="logo nav-item">
          <button className="menu-btn" onClick={showAsideHandler}>
            <BiMenu width={100} height={100} />
          </button>
          <Link href="/">
            <img src={logo.src} alt="logo Name" />
          </Link>
        </div>
        <SearchBox />
        <button
          type="button"
          className="cart-icon nav-item"
          onClick={showCartHandler}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{cartItems?.length ? cartItems.length : 0}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default memo(Navbar);
