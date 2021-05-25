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
          <span> Agustín Caldart</span>
        </h1>
        <p className='h-sub-text'>
          Tengo 26 años y actualmente me encuentro haciendo proyectos personales
          mayormente de <span>Web Developer</span>
        </p>
        <div className='icons'>
          {/* <Link className='icon-holder' to>
            <FontAwesomeIcon icon={faFacebook} className='icon fb' />
          </Link> */}
          <Link
            className='icon-holder'
            to={{
              pathname: 'https://github.com/AgustinCaldart',
            }}
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </Link>
          <Link
            className='icon-holder'
            to={{
              pathname: 'https://www.linkedin.com/in/acaldart/',
            }}
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedin} className='icon lk' />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
