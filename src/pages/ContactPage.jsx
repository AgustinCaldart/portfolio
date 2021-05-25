import React from 'react';
import Title from '../components/Title';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactPage() {
  return (
    <div>
      <div className='title'>
        <Title title={'Contacto'} span={'Contacto'} />
      </div>
      <div className='ContactPage'>
        <div className='map-sect'>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6064823932566!2d-64.18585128430786!3d-31.424966481401377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28fd752b9bb%3A0x9a3573847717f998!2sBv.%20Chacabuco%20656%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1619839196132!5m2!1ses-419!2sar'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
        <div className='contact-sect'>
          <ContactItem
            icon={phone}
            text1={'+54 2944 353838'}
            title={'Télefono'}
          />
          <ContactItem
            icon={email}
            text1={'caldart123@gmail.com'}
            title={'Email'}
          />
          <ContactItem
            icon={location}
            text1={'Bv Chacabuco 656'}
            title={'Dirección'}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
