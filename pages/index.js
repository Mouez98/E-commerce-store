import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, CategoriesAside, CategoriesNav } from '../components';

const Home = ({ products, bannerData, categories }) => (
  <div className='container'>
    <div className='main-view'>
    <CategoriesAside categories={categories}/>
    <HeroBanner heroBanner={bannerData.length && bannerData}  />
    </div>
    <CategoriesNav categories={categories}/>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoriesQuery = '*[_type == "categories"]'
  const categories = await client.fetch(categoriesQuery)

  return {
    props: { products, bannerData, categories}
  }
}

export default Home;
