import React from 'react';
import Profiles from '../components/Profiles';
import TechLogos from './TechLogos';
import Projects from './Projects';

export default function Home() {
  return (
    <div>  
      <Profiles />
      <TechLogos/>
      <Projects/>
    </div>
  );
}
