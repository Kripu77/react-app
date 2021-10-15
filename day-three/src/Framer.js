import React from 'react'
import {motion } from 'framer-motion'
const Framer = () => {
    return (
        <div>
             <div className="example-container">
         <motion.div
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
  />  
      </div>
     
        </div>
    )
}

export default Framer
