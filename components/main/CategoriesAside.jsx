import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import useWindowSize from '../../hooks/useWindowSize';


const CategoriesAside = ({categories}) => {
  const size = useWindowSize()
  // if (size.width < 700) return <></>
  return (
    <aside className="categories">
      <h5>Our Categories </h5>
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

