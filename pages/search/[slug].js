import React from 'react';
import { SearchResult } from '../../components';
import { client } from '../../lib/client';

const Results = ({ products, category, searchQuery }) => {
  let resultContent;
  // To handle searchs
  if (!category && searchQuery)
    resultContent = (
      <SearchResult products={products} searchQuery={searchQuery} />
    );
  // Filter by category
  if (category && products)
    resultContent = <SearchResult products={products} category={category} />;
  return resultContent;
};

export default Results;

export const getStaticPaths = async () => {
  const query = `*[_type == "categories"] {
    slug {
      current
    }
  }
  `;

  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};


export const getStaticProps = async ({params: { slug }}) => {
  const searchQuery = slug;
  
  // Get categories if query matches
  const queryCategory = `*[slug.current == '${searchQuery}' ]{
    _id, category
  }`;
  const category = await client.fetch(queryCategory);

  // Query depends its a search or a select category
  let userQuery;
  if (category.length === 0) {
    userQuery = `*[_type == 'product' && name match '${searchQuery}*']`;
  } else if (category) {
    userQuery = `*[references("${category[0]._id}")]`;
  }

 // Products will come from search or select depends the previous condition
  const products = await client.fetch(userQuery);

 // Return props conditionally 
  let props;
  if (category.length) {
    props = {
      category: category[0],
      products,
    };
  } else {
    props = {
      products,
      searchQuery,
    };
  }

  return {
    props,
  };
};
