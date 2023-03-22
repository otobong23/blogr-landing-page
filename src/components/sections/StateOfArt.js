import React, { Component } from 'react'
import phones from '../../images/illustration-phones.svg'
import circles from '../../images/bg-pattern-circles.svg'

class StateOfArt extends Component {
  render() {
    return (
      <div className='bg-gradient-nav my-10 rounded-tr-[80px] rounded-bl-[80px] relative pb-24 lg:pb-0'>
        <div className="layer-image absolute -translate-y-1/2 lg:-translate-y-[20%]">
            <img src={phones} alt="" />
        </div>
        <div className="layer overflow-hidden">
            <div className="content max-container flex lg:max-h-[350px] items-center flex-col lg:flex-row">
                <div className="content-img -ml-[27%] -mt-[50%] w-[150%]">
                    <img src={circles} alt="" />
                </div>

                <div className="content -ml-[25%] -mt-[20%] lg:-mt-0">
                    <h2 className='text-2xl text-center lg:text-left max-w-[80%] lg:max-w-full mx-auto lg:mx-0 font-semibold mb-5 text-White(text)'>State of the Art Infrastructure</h2>

                    <p className='max-w-[700px] text-center lg:text-left mx-auto lg:mx-0 leading-relaxed text-White(text)'>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default StateOfArt