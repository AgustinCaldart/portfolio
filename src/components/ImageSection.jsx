import React from 'react';
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus ipsa minus dignissimos cupiditate magni? Illo est
        </p>
        <div className='about-details'>
          <div className='left-section'>
            <p>Nombre Completo</p>
            <p>Edad</p>
            <p>Nacionalidad</p>
            <p>Lenguajes</p>
            <p>Direccion</p>
          </div>
          <div className='right-section'>
            <p>: Agustin Caldart</p>
            <p>: 26</p>
            <p>: Argentina</p>
            <p>: Español, Ingles(basico)</p>
            <p>: Bv Chacabuco 656 1a</p>
          </div>
        </div>
        <button className='btn'>Descargar Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
