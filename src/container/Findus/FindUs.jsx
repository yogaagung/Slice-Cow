import React from 'react';

import {SubHeading} from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='kontak'>
    <div className='app__wrapper_info'>
      <SubHeading title='Kontak'/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Dimana kami?</h1>
      <div className='app__wrapper-content'>
        <button type='button' className='custom__button' style={{margin: '2rem'}}><a href="https://www.google.com/maps/place/7%C2%B000'14.6%22S+110%C2%B026'34.8%22E/@-7.0040482,110.4430079,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xcc939883963c7909!8m2!3d-7.0040482!4d110.4430079">Gmaps</a></button>
        <button type='button' className='custom__button' style={{margin: '2rem'}}><a href="https://www.instagram.com/slicecowsemarang/">Instagram</a></button>
        <button type='button' className='custom__button' style={{margin: '2rem'}}><a href="https://wa.wizard.id/e5a75c">WhatsApp</a></button>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem'}}>Buka Setiap Hari</p>
        <p className='p__opensans' style={{color: '#dcca87', margin: '2rem'}}>Dari Jam : 07.00 WIB - 20.00 WIB</p>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem'}}> Silahkan review Kami di sini :</p>
        <button type='button' className='custom__button' style={{margin: '2rem'}}><a href="https://g.page/r/CdkAW4bIkTyCEA0/review">Google Review</a></button>
        <p className='p__opensans' style={{color: '#dcca87', margin: '2rem'}}> Karena Review Anda Sangat Berharga Untuk Terus Memajukan Usaha Kami dan Terima Kasih Telah Meluangkan Waktu untuk Mereview Usaha Kami</p>
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="kontak" />
    </div>
  </div>
);

export default FindUs;
