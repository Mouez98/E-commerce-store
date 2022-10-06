import React, { useState } from 'react';
import Link from 'next/link';
import useWindowSize from '../../hooks/useWindowSize';

import { AiOutlineShopping } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Cart } from '..';
import { useStateContext } from '../../context/StateContext';
import AsideNav from './AsideNav';
import SearchBox from './SearchBox';
import logo from '../../assets/IMG_20221006_144938_405-removebg-preview (1).png';

const Navbar = () => {
  const [showAside, setShowAside] = useState(false)
  const size = useWindowSize();
  const { showCart, setShowCart, totalQuantities } = useStateContext();


  const showAsideHandler = () => setShowAside(show => !show)

  return (
    <div className="navbar-container ">
      <div className="container">
        {showAside && <AsideNav />}
        {size.width < 700 && (
          <div className="menu-btn" onClick={showAsideHandler}>
            <BiMenu width={100} height={100} />
          </div>
        )}
        <div className="logo">
          <Link href="/">
            <img src={logo.src} alt="logo Name" cl />
          </Link>
        </div>
        <SearchBox />
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
