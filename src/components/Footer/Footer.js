// Functional Component with Anonymous Function
import React from 'react';
import Menu from '../Menu/Menu';

const Footer = function(){
  return(
    <footer className='text-center'>
      <hr />
      <Menu />
      <p>Copyright 2022 | Arun</p>
    </footer>
  )
}

export default Footer;