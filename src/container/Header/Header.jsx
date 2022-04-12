import React from 'react';

import './Header.css';

import {images} from '../../constants';
import {SubHeading} from '../../components';
const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Selamat Datang di'/>
      <h1 className='app__header-h1'>Slice Cow Semarang</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
        Bingung Mau Cari Daging Slice Yang Enak Di Mana? Kami Menjual Berbagai Macam Daging Slice yang Halal. Mari Mampir Bestiee!!
      </p>
      <button type='button' className='custom__button'><a href="#about">Siapa Kami?</a></button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header-img" />
    </div>

  </div>
);

export default Header;
