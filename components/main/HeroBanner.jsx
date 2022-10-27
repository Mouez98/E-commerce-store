import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import 'animate.css';

import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const [index, setIndex] = useState(0);

  const toggleBanners = () => {
    const randomNumber = (Math.random() * HeroBanner.length).toFixed()
    setIndex(randomNumber)
  }
useEffect(()=>{
  const interval = setInterval(()=> {
    toggleBanners()
  }, 4000)

  return () => clearInterval(interval)
},[index])

  if (!heroBanner)
    return (
      <div className="hero-banner-container">
        <h3>no banners</h3>
      </div>
    );

  const { smallText, midText, largeText1, image, product, buttonText, desc, slug } =
    heroBanner[index];
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${slug.current}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className="btns-slides">
        {heroBanner.length &&
          heroBanner.map((banner, i) => (
            <span
              key={banner._id}
              onClick={() => setIndex(i)}
              className={index === i ? 'active' : ''}
            ></span>
          ))}
      </div>
    </div>
  );
};

export default HeroBanner;
