import React from 'react';
import Profiles from './Profiles';
import TechLogos from './TechLogos';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>  
      <Profiles />
      <TechLogos/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
