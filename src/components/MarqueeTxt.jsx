import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeTxt = () => {
  return (
    <div className='marqueeTxt' style={{background:'linear-gradient(0deg,#ff0040,#0088ff)'}}>
        <Marquee direction={'left'}>
            <span className='marquee1' style={{ marginRight: '2rem', whiteSpace: 'nowrap' }}>
                <i>Rock Paper Scissors</i>
            </span>
            <span className='marquee1' style={{ marginRight: '2rem', whiteSpace: 'nowrap' }}>
                <i>Rock Paper Scissors</i>
            </span>
        </Marquee>
            
        <Marquee direction={'right'}>
            <span className='marquee2' style={{ marginRight: '2rem', whiteSpace: 'nowrap' }}>
                <i>Rock Paper Scissors</i>
            </span>
            <span className='marquee2' style={{ marginRight: '2rem', whiteSpace: 'nowrap' }}>
                <i>Rock Paper Scissors</i>
            </span>
        </Marquee>
    </div>
  )
}

export default MarqueeTxt