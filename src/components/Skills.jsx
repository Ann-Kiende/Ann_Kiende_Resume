import React from 'react';
import './About.css';
import { Link, Links } from 'react-router-dom';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='menu'>
        <div className='logo'>Ann Kiende</div>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/skills' class='a-active'>
            Skills
          </Link>
        </div>
      </div>

      <div className='main'>SKILLS</div>
    </div>
  );
};

export default Skills;
