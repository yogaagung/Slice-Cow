import React from 'react';

import {SubHeading, MenuItem} from '../../components';
import {data} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__paddding' id='list'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Special Hari Ini'/>
      <h1 className='headtext__cormorant'>List</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_slice flex__center'>
        <p className='app__specialMenu-menu_heading'>Macam Slice</p>
        <div className='app__specialMenu-menu_items'>
          {data.slice.map((sl, index) => (
            <MenuItem key={sl.title + index} title={sl.title} price={sl.price} tags={sl.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_marinasi flex__center'>
        <p className='app__specialMenu-menu_heading'>Macam Marinasi</p>
        <div className='app__specialMenu-menu_items'>
          {data.marinasi.map((mar, index) => (
            <MenuItem key={mar.title + index} title={mar.title} price={mar.price} tags={mar.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '10px', textAlign: 'center'}}>
      <p className='p__opensans'><strong>Note : </strong>Harga Sewaktu - waktu dapat berubah</p>
      <button type='button' className='custom__button'><a href="https://drive.google.com/file/d/1xKBF3OjuXGvg6aRRyNj-ZTaLX4mYh1rD/view">Lebih Lanjut</a></button> 
      <br /><button type='button' className='custom__button' style={{marginTop: '15px'}}><a href="#kontak">Kontak</a></button> 
    </div>
  </div>
);

export default SpecialMenu;
