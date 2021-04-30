import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='HomePage'>
      <header className='hero'>
        <h1 className='hero-text'>
          Hola, Yo soy
          <span> Agustin Caldart</span>
        </h1>
        <p className='h-sub-text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          laborum minima earum unde in aut impedit similique consectetur
          doloribus, quod nobis quisquam nostrum, beatae quidem dignissimos. Qui
          iste et ratione!
        </p>
        <div className='icons'>
          <Link className='icon-holder' to>
            <FontAwesomeIcon icon={faFacebook} className='icon fb' />
          </Link>
          <Link className='icon-holder' to>
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </Link>
          <Link className='icon-holder' to>
            <FontAwesomeIcon icon={faLinkedin} className='icon lk' />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
