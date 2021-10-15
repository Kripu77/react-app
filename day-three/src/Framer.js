import React from 'react'
import {motion } from 'framer-motion'
const Framer = () => {
    return (
        <div>
            //once we import motion it takes object
         <motion.div className='example-container'
    animate={{ x: 900,
    opacity:1 }}
    transition={{ duration: 3 }}
    
  />  
    
     
        </div>
    )
}

export default Framer
