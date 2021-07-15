import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillSection';
import ServicesSection from '../components/ServicesSection';
import design from '../img/design.svg';
import datebase from '../img/database.svg';

function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={'Sobre mí'} span={'Sobre mí'} />
      <ImageSection />
      <Title title={'Habilidades'} span={'Habilidades'} />
      <div className='skils-container'>
        <SkillSection skill={'Javascript'} progress={'50%'} width={'50%'} />
        <SkillSection skill={'React'} progress={'60%'} width={'60%'} />
        <SkillSection skill={'Hook'} progress={'50%'} width={'50%'} />
        <SkillSection skill={'AWS'} progress={'60%'} width={'60%'} />
        <SkillSection skill={'PostgreSQL'} progress={'80%'} width={'80%'} />
        <SkillSection skill={'Node JS'} progress={'40%'} width={'40%'} />
        <SkillSection skill={'.NET'} progress={'40%'} width={'40%'} />
        <SkillSection skill={'SASS'} progress={'60%'} width={'60%'} />
        <SkillSection skill={'Redux'} progress={'40%'} width={'80%'} />
        <SkillSection skill={'CSS'} progress={'60%'} width={'60%'} />
        <SkillSection skill={'GitHub'} progress={'60%'} width={'60%'} />
      </div>
      <Title title={'Servicios'} span={'Servicios'} />
      <div className='services-container'>
        <ServicesSection
          image={design}
          title={'Web Design'}
          text={
            'Desarrollo frontend de páginas web mayormente utilizando React + Sass'
          }
        />
        <ServicesSection
          image={datebase}
          title={'Data Base'}
          text={
            'Manejo de grandes estructuras de datos con conomientos en funciones y vistas'
          }
        />
        {/*  <ServicesSection
          image={design}
          title={'Web Design'}
          text={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, provident?'
          }
        /> */}
      </div>
    </div>
  );
}

export default AboutPage;
