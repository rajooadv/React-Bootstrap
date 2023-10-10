import React from 'react'

const Crad = (props) => {
  return (
    <div className='text-center w-100 my-5 bg-dark p-3 rounded-5'>
        <p className='text-white'>{props.ahmad}</p>
        <h1 style={{color:props.textColor}}>{props.waleed}</h1>
        <img src={props.img} alt="" />
      
    </div>
  )
}

export default Crad
