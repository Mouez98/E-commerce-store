import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';

import { client } from '../../lib/client';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await client.fetch("*[_type == 'product']{name,_id, slug}");
    setProducts(response);
  }, []);

  const searchHandler = (e) => {
    setSearchParams(e.target.value);
  };

  const filterProducts = products.filter((product) =>{
    if(searchParams.trim().length > 0) return product.name.toUpperCase().includes(searchParams?.toUpperCase())
  }
   
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!searchParams.trim().length) return
    setSearchParams('')
  };

  return (
    <form className="search-form nav-item" onSubmit={onSubmitHandler}>
    
        <input
          autoComplete="off"
          type="text"
          value={searchParams}
          placeholder="Search for products"
          name="searchInput"
          id='searchInput'
          onChange={searchHandler}
        />
        <label htmlFor="searchInput">
          <BiSearchAlt2 />
        </label>
    
      <Link href={`/search/${searchParams}`}>
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </Link>

      {filterProducts && filterProducts.length  ? (
        <div className="results">
          <ul>
            { filterProducts.map((product) => (
                <Link href={`/product/${product.slug.current}`} key={product._id} >
                  <li onClick={()=> setSearchParams('')}>{product.name}</li>

                </Link>
                ))
              }
          </ul>
        </div>
      ): null}
    </form>
  );
};

export default SearchBox;
