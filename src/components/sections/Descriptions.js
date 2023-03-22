import React from 'react'
import illustrationDesktop from '../../images/illustration-editor-desktop.svg'
import illustrationMobile from '../../images/illustration-editor-mobile.svg'

function Descriptions() {
  return (
    <div className='overflow-x-hidden mb-72 lg:mb-0'>
        <h1 className="hero-title text-Very-dark-blue(headings) text-2xl lg:text-3xl text-center pb-3 font-semibold">Designed for the future</h1>
        <div className="section-box flex items-center flex-col-reverse lg:flex-row">
            <div className="item w-11/12 mx-auto lg:pl-[10vw] flex-1">
                <h2 className='text-Very-dark-blue(headings) text-2xl text-center lg:text-left max-w-[80%] lg:max-w-full mx-auto lg:mx-0 lg:text-xl font-semibold mb-5 mt-6'>Introducing an extensible editor</h2>

                <p className='max-w-[520px] text-Very-dark-grayish-blue(body-copy) mb-6 lg:mb-24 text-center mx-auto lg:mx-0 lg:text-left leading-relaxed'>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                change the looks of a blog.
                </p>

                <h2 className='text-Very-dark-blue(headings) text-2xl text-center lg:text-left max-w-[80%] lg:max-w-full mx-auto lg:mx-0 lg:text-xl font-semibold mb-5'>Robust content management</h2>

                <p className='max-w-[520px] text-Very-dark-grayish-blue(body-copy) text-center lg:text-left mx-auto lg:mx-0 leading-relaxed'>
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </p>
            </div>
            <div className="item flex-1">
                <div className="section-image lg:w-[800px] lg:-mr-[20vw] xl:-mr-[40vw]">
                    <img src={illustrationDesktop} alt="" className='hidden lg:block w-full object-cover'/>
                    <img src={illustrationMobile} alt="" className='lg:hidden w-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Descriptions