import React from 'react'

function WhiteButton(props) {
  return (
    <>
    <button className={`rounded-full border border-transparent ${props.background} hover:bg-opacity-70 hover:backdrop-opacity-75  w-32 h-11 inline-flex items-center justify-center text-lg text-Light-red(CTA-text) hover:text-White(text) cursor-pointer font-semibold transition-all duration-300 active:opacity-50`}>{props.title}</button>
    </>
  )
}

export default WhiteButton
