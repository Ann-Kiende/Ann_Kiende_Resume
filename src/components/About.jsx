import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationSharp, IoLogoLinkedin } from 'react-icons/io5';
import { BsGithub, BsFileEarmarkPdfFill } from 'react-icons/bs';
import { Link, Links } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className='about-me'>
        I’m Ann Kiende — a frontend developer based in Nairobi. I enjoy building
        clean, simple digital experiences with React, JavaScript, and modern UI
        design. I focus on writing minimal, readable code and creating elegant
        user interfaces.
      </div>
      <div className='contact'>
        <div id='location'>
          <IoLocationSharp />
          Nairobi, Kenya
        </div>
        <div id='email'>
          <HiOutlineMail />
          annkiende30@gmail.com
        </div>
        <div id='github'>
          <BsGithub />
          Ann Kiende
        </div>
        <div id='linkedin'>
          <IoLogoLinkedin />
          Ann Kiende
        </div>
        <div id='resume-pdf'>
          <BsFileEarmarkPdfFill />
          My PDF Resume
        </div>
      </div>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default About;
