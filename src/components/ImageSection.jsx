import React from 'react';
import { Link } from 'react-router-dom';
import about from '../img/about.png';

function ImageSection() {
  return (
    <div className='ImageSection'>
      <div className='img'>
        <img src={about} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          Yo soy<span> Devloper</span>
        </h4>
        <p className='about-text'>
          Actualmente estoy cumpliando labores de SQL DateBase en la empresa
          AARI para un proyecto de la Municipalidad de Córdoba
        </p>
        <div className='about-details'>
          <div className='left-section'>
            <p>Nombre Completo</p>
            <p>Edad</p>
            <p>Nacionalidad</p>
            <p>Lenguajes</p>
            <p>Dirección</p>
          </div>
          <div className='right-section'>
            <p>: Agustín Caldart</p>
            <p>: 26</p>
            <p>: Argentina</p>
            <p>: Español, Ingles(basico)</p>
            <p>: Bv Chacabuco 656 1a</p>
          </div>
        </div>
        <Link
          to={{
            pathname:
              'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies',
          }}
          target='_blank'
        >
          <button className='btn'>Descargar Cv</button>
        </Link>
      </div>
    </div>
  );
}

export default ImageSection;
