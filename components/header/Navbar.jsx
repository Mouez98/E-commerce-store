import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from '..';
import { useStateContext} from '../../context/StateContext';
import SearchBox from './SearchBox';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container ">
      <div className="container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>
      <SearchBox />
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
    </div>
  )
}

export default Navbar