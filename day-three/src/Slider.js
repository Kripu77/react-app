import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import gates from "./Images/billgates.jpg"
import zuker from "./Images/elonmusk.jfif"
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);
 
const Slider = () => {
    return <AutoplaySlider     play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}>
    <div>
        <img src={gates}/>
    </div>
    <div> <img src={'https://tse1.mm.bing.net/th?id=OIP.RiuE4kmcPGEHhmO7HNy0bwHaDt&pid=Api&P=0&w=381&h=191'}/></div>
    <div style={{backgroundColor:"orange"}}>3</div>
    <div style={{backgroundColor:"lightgreen"}}>4</div>
  </AutoplaySlider>
}

export default Slider
