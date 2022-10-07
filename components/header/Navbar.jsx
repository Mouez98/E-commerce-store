import React, { useState } from 'react';
import Link from 'next/link';

import { AiOutlineShopping } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Cart } from '..';
import { useStateContext } from '../../context/StateContext';
import AsideNav from './AsideNav';
import SearchBox from './SearchBox';
import logo from '../../assets/IMG_20221006_144938_405-removebg-preview (1).png';

const Navbar = () => {
  const [showAside, setShowAside] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const showAsideHandler = () => setShowAside((show) => !show);

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
