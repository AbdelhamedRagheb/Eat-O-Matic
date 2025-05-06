import { useEffect, useState } from 'react';
import Header from "./components/Header/Header";

import { Outlet } from "react-router-dom";

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';




function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    
  }, [])
  

  return <>
   
   <div className="min-h-screen bg-[#fff7f0] p-6 font-sans flex flex-col">
      <Header />
      <main className="my-1 flex-1">
        <Outlet />
      </main>
      
    </div>

    </>
  
}

export default App
