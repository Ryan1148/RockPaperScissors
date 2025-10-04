import React from 'react'
import { motion } from 'framer-motion'


const HandBtn = (props) => {
  return (
    <motion.div
    onClick={props.onClick}
    whileTap={{
      scale:0.9
    }}
    whileHover={{
      scale:1.1
    }}
    className='ShowHand bg-white/40 backdrop-blur-xs w-[350px] h-[350px] rounded-full flex justify-center items-center cursor-pointer'
    style={{
      rotate:props.rotate,
      width:props.width || 350,
      height:props.height || 350,
      }}>
        <img src={props.img} alt="" width={props.imgWidth} draggable={false} className='invert-[100%]'/>
    </motion.div>
  )
}

export default HandBtn