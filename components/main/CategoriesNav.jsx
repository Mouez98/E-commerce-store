import React from 'react'
import Image from 'next/image';

import { urlFor } from '../../lib/client';
import Link from 'next/link';

const CategoriesNav = ({categories}) => {
  return (
    <nav >
        <ul className='products-container categories-nav'>
            {categories?.map(category => 
            <Link href={`/search/${category.slug.current}`} key={category._id}>
            <li  className='card-product'>
                <img src={urlFor(category.image)} alt={category.category} height={120} width={120}/>
                <h5>{category.category}</h5>
            </li>
            </Link>)
            }
        </ul>
    </nav>
  )
}

export default CategoriesNav