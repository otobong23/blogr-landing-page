import React, { Component } from 'react'
import laptopDesktop from '../../images/illustration-laptop-desktop.svg'
import laptopMobile from '../../images/illustration-laptop-mobile.svg'


export class details extends Component {
  render() {
    return (
        <div className='overflow-x-hidden py-14'>
            {/* <h1 className="hero-title text-Very-dark-blue(headings) text-2xl lg:text-3xl text-center pb-3 font-semibold">Designed for the future</h1> */}
            <div className="section-box flex items-center flex-col lg:flex-row">
                <div className="item flex-1">
                    <div className="section-image w-full lg:w-[800px] lg:-ml-[10vw] xl:-ml-[20vw]">
                        <img src={laptopDesktop} alt="" className='hidden lg:block w-full object-cover'/>
                        <img src={laptopMobile} alt="" className='lg:hidden w-full object-cover'/>
                    </div>
                </div>
                <div className="item w-11/12 mx-auto flex-1">
                    <h2 className='text-Very-dark-blue(headings) text-2xl text-center lg:text-left max-w-[80%] lg:max-w-full mx-auto lg:mx-0 lg:text-xl font-semibold mb-5 mt-6'>Free, open, simple</h2>
    
                    <p className='max-w-[480px] text-Very-dark-grayish-blue(body-copy) mb-6 lg:mb-24 text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
    
                    <h2 className='text-Very-dark-blue(headings) text-2xl text-center lg:text-left max-w-[80%] lg:max-w-full mx-auto lg:mx-0 lg:text-xl font-semibold mb-5'>Powerful tooling</h2>
    
                    <p className='max-w-[480px] text-Very-dark-grayish-blue(body-copy) text-center lg:text-left mx-auto lg:mx-0 leading-relaxed'>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
        </div>
      )
  }
}

export default details