import React, { useEffect, useState } from 'react';
import style from './About.module.css';
import AboutIntro from '../AboutIntro/AboutIntro';
import Footer from '../Footer/Footer';
export default function About() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      
    }, [])
    
  return <>
  <div>
      <AboutIntro />
      <Footer />
    </div>
  
  </>
    
  
}
