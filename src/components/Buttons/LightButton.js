import React from 'react'

function LightButton(props) {
  return (
    <>
    <button className={`rounded-full border border-white ${props.background} bg-opacity-50 w-32 h-11 inline-flex items-center justify-center text-lg ${props.textColor ? props.textColor : 'text-White(text)'} cursor-pointer font-semibold transition-all duration-300 active:opacity-50`}>{props.title}</button>
    </>
  )
}

export default LightButton