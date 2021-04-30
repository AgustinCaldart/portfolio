import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillSection';

function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={'Sobre mí'} span={'Sobre mí'} />
      <ImageSection />
      <Title title={'Habilidades'} span={'Habilidades'} />
      <div className='skils-container'>
        <SkillSection skill={'Javascript'} progress={'50%'} width={'50%'} />
        <SkillSection skill={'PostgreSQL'} progress={'80%'} width={'80%'} />
        <SkillSection skill={'CSS'} progress={'60%'} width={'60%'} />
        <SkillSection skill={'React'} progress={'40%'} width={'40%'} />
        <SkillSection skill={'GitHub'} progress={'60%'} width={'60%'} />
      </div>
    </div>
  );
}

export default AboutPage;
