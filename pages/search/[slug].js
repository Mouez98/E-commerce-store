import React from 'react';
import { SearchResult } from '../../components';
import { client } from '../../lib/client';

const Results = ({ products, category, searchQuery }) => {
  let resultContent;
  if (!category && searchQuery)
    resultContent = (
      <SearchResult products={products} searchQuery={searchQuery} />
    );
  if (category && products)
    resultContent = <SearchResult products={products} category={category} />;
  return resultContent;
};

export default Results;

export const getServerSideProps = async (context) => {
  const searchQuery = context.query.slug;
  
  // Get categories if query matches
  const queryCategory = `*[slug.current == '${searchQuery}' ]{
    _id, category
  }`;
  const category = await client.fetch(queryCategory);

  // Query depends its a search or a select category
  let query;
  if (category.length === 0) {
    query = `*[_type == 'product' && name match '${searchQuery}*']`;
  } else if (category) {
    query = `*[references("${category[0]._id}")]`;
  }

 // Products will come from search or select depends the previous condition
  const products = await client.fetch(query);

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
