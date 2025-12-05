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

      <div className='main skills'>
        <ul class='technologies'>
          <p>Technologies</p>
          <li id='list-item'>React</li>
          <li id='list-item'>JavaScript (ES6)</li>
          <li id='list-item'>HTML / CSS</li>
          <li id='list-item'>Vite</li>
          <li id='list-item'>Git & GitHub</li>
        </ul>

        <ul class='soft-skills'>
          <p>Soft Skills</p>
          <li id='list-item'>Attention to detail</li>
          <li id='list-item'>Clear communication</li>
          <li id='list-item'>Fast learning</li>
          <li id='list-item'>UI sense / good design eye</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
