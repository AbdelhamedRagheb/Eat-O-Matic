import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import Rating from '../Rating/Rating';
import SpecialDishes from "../SpecialDishes/SpecialDishes";
import ActionButtons from '../ActionButtons/ActionButtons';



export default function Home() {
  const handleAskAI = () => {
    console.log('Ask AI clicked');
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      
    }, [])}
    
  return <>
    
      <SpecialDishes />
      
      <div className="px-4 py-10 flex items-start justify-between">
        
        <div className="flex space-x-8">
          <Rating stars={5} reviews={1788} />
          <ActionButtons onAsk={handleAskAI} />
        </div>

       
      </div>


     
   


      
  

  </>
    
  
}
