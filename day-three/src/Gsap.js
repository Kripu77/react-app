import React,{ useEffect, useRef } from 'react';
import {gsap} from "gsap";
import"./Style.css"

const Gsap = () => {
     const boxRef = useRef();
  
  useEffect(() => {
   
   setInterval(()=>{
         gsap.to(boxRef.current, {
      rotation: "+=360"
    });
   }, 2000)
  
  });

  return (
    <div className="App">
      <div className="box" ref={boxRef}>Hello my name is Kripu</div>
    </div>
  );
}


export default Gsap
