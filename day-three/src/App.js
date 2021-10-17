import React from 'react'
import LazyLoad from 'react-lazy-load';
import Framer from './Framer';
import Gsap from './Gsap';
import LazyLoading from './LazyLoading';
const App = () => {
    return (
        <div>
            <h1> lazy loading Sample</h1>
            Scroll to load images.
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={300}>
      <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={683} offsetTop={9000}>
      <img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={480} offsetLeft={150}>
      <img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad
      height={720}
      onContentVisible={() => console.log('look ma I have been lazyloaded!')}
    >
      <img src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg' />
    </LazyLoad>
    <div className="filler" />
      <Gsap/> 
         <div className="filler" />
      <Framer/>
         <div className="filler" />
      <LazyLoading/>
        </div>
    )
}

export default App
