import React, { Component } from 'react'
import Logo from '../../images/logo.svg'
import links from '../Navbar/links';

export class Footer extends Component {
  render() {
    return (
      <div className='bg-Very-dark-black-blue(footer-background) pb-5 pt-20 md:pb-7 lg:pb-10 rounded-tr-[100px]'>
        <div className="content max-container flex flex-col lg:flex-row items-center md:items-start lg:items-start gap-10">
            <div className="logo flex-1">
                <img src={Logo} alt="" className='max-w-full object-cover'/>
            </div>

            <nav className='flex-[4] w-full'>
                <ul className='nav-bar flex md:grid lg:flex gap-9 flex-col lg:flex-row grid-cols-2 w-full'>
                {
                    links.map((link) => (
                        <li className="list-item relative group flex-1" key={link.id}>
                            <div className="title flex items-center justify-center md:justify-start text-White(text) cursor-pointer font-semibold pb-5">{link.title}</div>
                            <div className="link-container relative transition-all duration-300">
                            <ul className="sublinks py-3 lg:py-5">
                                {
                                    link.sublinks.map((item) => (
                                        <li className="sublink mb-3 lg:mb-6 text-center md:text-left hover:opacity-40 active:opacity-70 transition-all duration-300" key={item.id}>
                                        <a href={item.subHref} className="nav-link text-White(text)">{item.subLink}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </nav>
        </div>
      </div>
    )
  }
}

export default Footer