import React from 'react';
import Title from '../components/Title';
import allCert from '../components/allcert';

function CertsPage() {
  return (
    <div>
      <div className='c-title'>
        <Title title={'Certificados'} span={'Certificados'} />
      </div>
      <div className='CertsPage'>
        {allCert.map((cert) => {
          return (
            <div className='cert' key={cert.id}>
              <div className='cert-content'>
                <img src={cert.image} alt='' />
                <a href={cert.link} className='cert-link'>
                  {cert.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CertsPage;
