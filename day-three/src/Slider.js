import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import gates from "./Images/billgates.jpg"
import zuker from "./Images/elonmusk.jfif"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
 
const Slider = () => {
    return<AwesomeSlider animation="cubeAnimation">
    <div>
        <img src={gates}/>
    </div>
    <div> <img src={'https://tse1.mm.bing.net/th?id=OIP.RiuE4kmcPGEHhmO7HNy0bwHaDt&pid=Api&P=0&w=381&h=191'}/></div>
    <div style={{backgroundColor:"orange"}}>3</div>
    <div style={{backgroundColor:"lightgreen"}}>4</div>
  </AwesomeSlider>
}

export default Slider
