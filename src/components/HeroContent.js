import React from 'react'
import WhiteButton from './Buttons/WhiteButton'
import LightButton from './Buttons/LightButton'

function HeroContent() {
  return (
    <div className='Hero-content max-container py-12 mb-40'>
        <h1 className="hero-title text-White(text) text-3xl text-center pb-3">A modern publishing platform</h1>
        <p className="hero-description text-White(text) text-center text-lg pb-10">
            Grow your audience and build your online brand
        </p>

        <div className="buttons flex items-center justify-center gap-6 pb-36">
            <WhiteButton background="bg-white" title="Start for Free" />
            <LightButton background="bg-none" title="Learn More"/>
      </div>
    </div>
  )
}

export default HeroContent