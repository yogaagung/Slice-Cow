import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.slice} alt="app-logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">Siapa Kami?</a></li>
      <li className='p__opensans'><a href="#galeri">Galeri</a></li>
      <li className='p__opensans'><a href="#list">List</a></li>
      <li className='p__opensans'><a href="#kontak">Dimana Kami?</a></li>
    </ul>

    <div className='app__navbar-smallscreen'>
      <FaBars color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
      
      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">Siapa Kami?</a></li>
            <li className='p__opensans'><a href="#galeri">Galeri</a></li>
            <li className='p__opensans'><a href="#list">List</a></li>
            <li className='p__opensans'><a href="#kontak">Dimana Kami?</a></li>
          </ul>
        </div>
      )}

    </div>
  </nav>
  )
}

export default Navbar;
