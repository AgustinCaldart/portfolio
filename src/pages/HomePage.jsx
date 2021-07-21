import React from 'react';
import { Helmet } from 'react-helmet';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import img from '../img/portImages/React.png';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@devCaldo' />
        <meta name='twitter:creator' content='@devCaldo' />
        <meta name='twitter:title' content='Portfolio' />
        <meta name='twitter:description' content='Portfolio' />
        <meta name='twitter:image' content={img} />
        <meta property='og:title' content='Portfolio' />
        <meta property='og:description' content='Portfolio' />
        <meta property='og:image' content={img} />
        <meta
          property='og:url'
          content='https://agustincaldart.github.io/portfolio/'
        />
        <meta property='og:site_name' content='Portfolio' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='article' />
        <meta property='fb:app_id' content='ID_APP_FACEBOOK' />
      </Helmet>
      <div className='HomePage'>
        <header className='hero'>
          <h1 className='hero-text'>
            Hola, Yo soy
            <span> Agustín Caldart</span>
          </h1>
          <p className='h-sub-text'>
            Tengo 26 años y actualmente me encuentro haciendo proyectos
            personales mayormente de <span>Web Developer</span>
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
    </>
  );
}

export default HomePage;
