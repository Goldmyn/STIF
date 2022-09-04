import React from 'react'

const Button = ({ styles }) => { 

  return (

  <button type="button" 
          className={`py-3 px-6 bg-blue-gradient 
                      font-poppins font-medium text-[22px] 
                      text-primary outline-none rounded-b-lg
                      ${styles} `}>
    Get Started
  </button>

  )
}


export default Button