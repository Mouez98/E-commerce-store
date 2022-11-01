import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

import Link from 'next/link';

const OrderForm = () => {
  const { totalPrice, cartItems } = useStateContext();
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const inputsCopy = { ...inputs };
    inputsCopy[e.target.name] = e.target.value;
    setInputs(inputsCopy);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const filterItems = cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));
    console.log({
      items: filterItems,
      client: inputs,
      total: totalPrice,
    });
    setTimeout(() => {
      // toast.loading('Ordering...')
      toast.success('Ordered succesfully');
      setInputs({
        fullName: '',
        email: '',
        address: '',
        phone: '',
        city: ''
      });
    }, 1000);
  };
  return (
    <div className="order ">
      <div className="order-products">
        <h3>Order from My Zayneb</h3>
        <h4 className="total-price">{totalPrice} DT</h4>
        <div className="order-product__container">
          {cartItems?.length
            ? cartItems.map((item) => {
                return (
                  <div className='order-product-details' key={item._id}>
                    <div className="product-img">
                      <img
                        src={urlFor(item._type === 'banner'? item.image: item.image[0])}
                        alt="product"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="about-product">
                      <h5 className="md-text">{item.name}</h5>
                      <div className="quantity">
                        <p className="light-dark-blue">
                          Quantity: &nbsp;
                          <span className="dark-blue">{item.quantity}</span>
                        </p>
                      </div>
                    </div>
                    <div className="order-product__price">
                      <div className="total-product-pice">
                        {item.quantity * item.price} DT
                      </div>
                      {item.quantity > 1 ? (
                        <div className="product-pice light-dark-blue">
                          {item.price} DT each
                        </div>
                      ) : null}
                    </div>
                  </ div>
                );
              })
            : null}

          <p className="subtotal md-text">
            Subtotal: <span>{totalPrice} DT</span>
          </p>
          <p className="delivery light-dark-blue md-text">
            Delivery: <span>7 DT</span>{' '}
          </p>
          <p className="total md-text">
            Total due: <span>{totalPrice + 7} DT</span>{' '}
          </p>
        </div>
      </div>
      <form className="order-form" onSubmit={handleSubmitOrder}>
        <h3>Fill the form</h3>
        <div className="input-container">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="fullName"
            placeholder="Enter your full name please"
            required
            minLength={4}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your-email@example.com"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Add Your Phone Number"
            minLength={8}
            maxLength={12}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Add Your Address"
            required
            minLength={5}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Add Your City"
            required
            minLength={5}
            onChange={handleInputChange}
          />
        </div>
        <Link href={'success'}>
          <button type="submit">Order Now</button>
        </Link>
      </form>
    </div>
  );
};

export default OrderForm;
