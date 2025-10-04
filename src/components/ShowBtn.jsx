import React from 'react'

const ShowBtn = (props) => {
  return (
    <div
    onClick={props.onClick}
    className='ShowBtn ShowHand bg-[#fff] w-[350px] h-[350px] rounded-full flex justify-center items-center cursor-pointer'
    >
        <img src={props.img} alt="" style={{rotate:props.rotate}}/>
    </div>
  )
}

export default ShowBtn