import React from 'react';
import Product from '../main/Product';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'

const SearchResult = ({ products, category, searchQuery }) => {

  let content;
  if(products?.length){
    content = products.map((product) => (
      <Product key={product._id} product={product} />
    ))
  } else if(products.length === 0) {
    content = <>{category ? <p className='error-text'> <MdOutlineProductionQuantityLimits/>  No Products in this category yet!</p> : <p>No matched search</p>}</>
  } else if(!products) {
    content = <p className='error-text'>404, content not found!</p>
  }

  return (
    <section>
      <div className="container search-result">
        <h3>Results of: <span>{category? category.category : searchQuery }</span></h3>
        <div className="products-container">
          {content}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
