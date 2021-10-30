import React from 'react'
import {motion } from 'framer-motion'
import LazyLoad from 'react-lazy-load';

const LazyLoading = () => {
    return (
        <div className='filler'>

            <LazyLoad  height={1000} offsetVertical={100}>
<motion.div className='motion-filler'
 animate={{ x: 20,
    opacity:1 }}
    initial={{
        opacity: 0.2
    }}
    transition={{ type:"spring" ,
    stifness: 0, duration: 3 }}
>
<div className='parent'>
    <div className='first-child'> 
    <h1> Dear user I'm a framer</h1>
    <img className="demo-img"src={'https://particularaudience.com/static/a272a2fd6d349297d24ff2b816cd9139/e04ce/e09aaf1c-53fe-48f7-8d8b-8397d1820c73_PA%2BRetail%2BAI.png'}/>
    </div>

    <div className='second-child'  >
 <h1> I'm the second child Component</h1>
    <img className="demo-img"src={'https://particularaudience.com/static/cebf62198a4742e25913d31c692c6790/e04ce/6f1a76dc-bead-45d2-989e-71895c0ac17d_PA%2BPlatform%2BDiscs.png'}/>
    </div>
    </div>
</motion.div>




            </LazyLoad>
            
        </div>
    )
}

export default LazyLoading
