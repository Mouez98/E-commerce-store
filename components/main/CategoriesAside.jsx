import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';


const CategoriesAside = ({categories}) => {
  return (
    <aside className="categories">
      <ul>
        {categories?.map((category) => (
          <li key={category._id}>
            <Link href={`/search/${category.slug.current}`}>
              <p className="category-link">
                <span>{category.category}</span> <AiOutlineRight />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoriesAside;

