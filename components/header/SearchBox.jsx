import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';

import { client } from '../../lib/client';

const SearchBox = () => {
  const [searchParams, setSearchParams] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await client.fetch("*[_type == 'product']{name,_id, slug}");
    setProducts(response);
  }, []);

  const searchHandler = (e) => {
    console.log(e.target.value);
    setSearchParams(e.target.value);
  };

  const filterProducts = products.filter((product) =>
    product.name.toUpperCase().includes(searchParams?.toUpperCase())
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-form">
      <div className="search-input">
        <input
          autoComplete="off"
          type="text"
          value={searchParams}
          placeholder="Search for products"
          name="text"
          onChange={searchHandler}
        />
      </div>
      <Link href={`/search/${searchParams}`}>
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </Link>

      {filterProducts && (
        <div className="results">
          <ul>
            {searchParams?.trim().length
              ? filterProducts.map((product) => (
                <Link href={`/product/${product.slug.current}`} key={product._id} >
                  <li onClick={()=> setSearchParams('')}>{product.name}</li>

                </Link>
                ))
              : null}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchBox;
