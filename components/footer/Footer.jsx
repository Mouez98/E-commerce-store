import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import logo from '../../assets/IMG_20221006_144938_405-removebg-preview (1).png'

const Footer = () => {
  return (
    <div className="footer-container">
       <div className="logo nav-item">
          <Link href="/">
            <img src={logo.src} alt="logo Name" />
          </Link>
        </div>
      <p>{new Date().getFullYear()} My Bayneb Store</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer