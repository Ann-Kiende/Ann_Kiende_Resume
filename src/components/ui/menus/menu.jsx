import React, { useState } from 'react';
import './menu.css';

const menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/about' className='a-active'>
        About
      </Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/skills'>Skills</Link>
    </div>
  );
};

export default menu;
