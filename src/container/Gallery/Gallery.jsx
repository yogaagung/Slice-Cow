import React from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

import {SubHeading} from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImg =[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, 
  images.gallery06, images.gallery07, images.gallery08, images.gallery09, images.gallery10];

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft +=300;
    }
  }

  return (
    <div className='app__gallery flex__center' id='galeri'>
      <div className='app__gallery-content'>
        <SubHeading title='Galeri' />
        <h1 className='headtext__cormorant'>Galeri Foto</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Gambar yang kami ambil adalah foto asli</p>
        <button type='button' className='custom__button'><a href="#list">List Harga</a></button> 
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImg.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="Galeri_Foto" />
                <div className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <FaArrowCircleLeft className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <FaArrowCircleRight className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );

}

export default Gallery;
