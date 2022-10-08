import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';

const Product = ({ product: { image, name, slug, price, discount: disc } }) => {
  // get the price after discount
  let discount = !disc ? false : price - ((disc / 100) * price).toFixed();

  // show price value depends if discount
  let priceAfterDisc;
  if (disc) {
    priceAfterDisc = (
      <>
        <span className="new-price">{discount} DT</span> 
        <span className="line-through">{price} DT</span> 
      </>
    );
  } else {
    priceAfterDisc = <>{price} DT</>;
  }

  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {discount && <span className="discount">{disc}%</span>}
          <img
            src={urlFor(image && image[0])}
            // width={150}
            // height={150}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{priceAfterDisc}</p>
        </div>
      </Link>
    </>
  );
};

export default Product;
