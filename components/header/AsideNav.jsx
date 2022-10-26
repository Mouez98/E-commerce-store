import React from 'react';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';

import styles from '../../styles/AsideNav.module.css'

import logo from '../../assets/IMG_20221006_144938_405-removebg-preview (1).png';

const AsideNav = ({closeSideBar, showAside}) => {
  const { categories } = useStateContext();
  return (
    <>
    <aside className={`${styles.aside} ${showAside ? styles.showAside : null}`}>
      <div className={styles.logo} >
       <IoMdClose  onClick={closeSideBar}/>
        <Link href="/">
          <img src={logo.src} alt="logo Name" onClick={closeSideBar}/>
        </Link>
      </div>
      <hr />
      <div>
        <h5>Our Categories </h5>
      <ul>
        {categories?.map((category) => (
          <li key={category._id} onClick={closeSideBar}>
            <Link href={`/search/${category.slug.current}`}>
              <p className={styles.categoryLink}>
                <span>{category.category}</span> <AiOutlineRight />
              </p>
            </Link>
          </li>
        ))}
      </ul>

      </div>
    </aside>
    <div className={`${styles.backdrop} ${showAside ? styles.showBackdrop: null}`} onClick={closeSideBar}>

    </div>
    </>
  );
};

export default AsideNav;
