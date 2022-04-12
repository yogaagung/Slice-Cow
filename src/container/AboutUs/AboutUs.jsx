import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.scs} alt="SCS" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Siapa Kami?</h1>
        <img src={images.bbq} alt="about-bbq" className='spoon__img' />
        <p className='p__opensans' style={{color: '#bbffea'}}>
          Mengenai Kami Dan Komitmen Kami Dalam Melakukan Penjualan Di Slice Cow Semarang : <br/>
          1. Produk Yang Kami Tawarkan Terjamin Halal.<br/>
          2. Produk Yang Kami Tawarkan Terjamin Berkualitas Dengan Harga Terjangkau.<br/>
          3. Kepuasan Konsumen Yang Paling Utama.<br/>
          4. Kebersihan Selalu Terjaga.<br/>
          5. Protokol Kesehatan Tetap Dijalankan.
        </p>
        <button type='button' className='custom__button'><a href="#galeri">Galeri</a></button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Sejarah Kami</h1>
        <img src={images.bbq} alt="about-bbq" className='spoon__img' />
        <p className='p__opensans' style={{color: '#bbffea'}}>
          Pada Awal Tahun 2021 Kami Mencoba Untuk Membuka Sebuah Usaha Di Mana Kami Menyediakan Daging Slice Yang Berkualitas Dan Halal Tapi Dengan Harga Yang Terjangkau. Kami Melakukan Beberapa Riset Kepada Daging Yang Akan Kami Jual Yaitu Perbedaan Daging Lokal Dengan Daging Import. Ternyata Kedua Daging Tersebut Memiliki Karakteristik Yang Berbeda.
          Akhirnya Pada 2021 Akhir Kami Memutuskan Untuk Membuka Sebuah Usaha Yaitu Daging Slice Dengan Mengambil Daging Import Sebagai Produk Yang Kami Tawarkan. Kami Lalui Bermacam - Macam Rintangan Dengan Itu Kami Mampu Seperti Sekarang Ini. Dimana Pengalaman Adalah Pembelajaran Yang Berharga Bagi Kami.
          Terima Kasih Support Dan Antusias Kepada Pada Para Pelanggan Slice Cow Semarang.
        </p>
        <button type='button' className='custom__button'><a href="#galeri">Galeri</a></button>
      </div>

    </div>

  </div>
);

export default AboutUs;
