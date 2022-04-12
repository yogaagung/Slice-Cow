import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <div className='footer__copyright'>
      <p className='p__opensans' style={{color: '#dcca87'}}> © {(new Date().getFullYear())} Slice Cow Semarang</p>
      <p className='p__opensans' style={{color: '#dcca87'}}>All Right Reserved</p>
    </div>
  </div>
);

export default Footer;
