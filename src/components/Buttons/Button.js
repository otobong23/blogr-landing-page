import React from 'react'

function Button(props) {
  return (
    <>
    <button className={`rounded-full border border-transparent ${props.background} w-32 h-11 inline-flex items-center justify-center text-white text-lg font-semibold`}>{props.title}</button>
    </>
  )
}

export default Button