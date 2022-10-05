import React from 'react';
import Link from 'next/link';
import testGif from '../../assets/test.webp'

const ComingSoonBar = () => {
  return (
    <article className="offers-banner-wrapper">
      <div className="offers-banner">
        <Link href="/">
          <img src={testGif.src} alt="Offer"  />
        </Link>
      </div>
    </article>
  );
};

export default ComingSoonBar;
