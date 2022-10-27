import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import useGetDiscount from '../../hooks/useGetDiscount';

const ProductDetails = ({ product, products }) => {
  // To change images
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  // Handle if no product
  if(!product) {
    return <div className="product-detail-container">
      <h5>No product found with that name!</h5>
    </div>
  }
  
  // Destruct product properties
  const { image, name, details, price, discount: disc } = product;

  const { priceAfterDiscount, discount } = useGetDiscount(disc, price);
  let newPrice;
  // If there is discount we show disc and new price
  !discount? newPrice = <>{priceAfterDiscount}</> : newPrice = (
        <>
      <span className="discount-percentage"> -{disc}%</span>
      <span className="new-price">{priceAfterDiscount} DT</span> <br />
      Price: <span className="line-through">{price} DT</span>
    </>
  )


  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(Array.isArray(image) ? (image && image[index]): image)}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {Array.isArray(image) ? image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
              />
            )): null}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          {/* <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div> */}
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">{newPrice}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  console.log(slug);
  const query = `*[_type in ["product", "banner"] && slug.current match '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails