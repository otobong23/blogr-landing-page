
import React, { Component } from 'react'
import lightArrow from '../../images/icon-arrow-light.svg'
import darkArrow from '../../images/icon-arrow-dark.svg'
import links from './links';
import Button from '../Buttons/Button'
import LightButton from '../Buttons/LightButton'

class Navlinks extends Component {

  constructor(props) {
    super(props)
  
    this.state = {}

    links.forEach(link => this.state[link.id] = false);
    this.toggle = this.toggle.bind(this);
    this.closeToggle = this.closeToggle.bind(this)
  }

  toggle(id){
    const idValue = this.state[id];
    
    for(let key in this.state){
      // this.state[key] = (key == id && !idValue) ? true : false
      this.setState({
        [key]: (key == id && !idValue) ? true : false
      })
    }
  }
  closeToggle(){
    for(let key in this.state){
      this.setState({
        [key]: false
      })
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.closeToggle)
  }

  render() {
    return (
      <div className={`absolute lg:relative left-0 top-full lg:top-0 transform ${this.props.height} lg:max-h-full w-full lg:w-max overflow-hidden lg:overflow-visible transition-all duration-300`}>
        <nav className='py-7 px-5 lg:px-0 lg:py-0 bg-white lg:bg-transparent rounded-lg shadow-xl lg:shadow-none'>
            <ul className='nav-bar flex flex-col lg:flex-row gap-9'>
              {
                links.map((link) => (
                  <li className="list-item relative group" key={link.id}>
                    <div className="title flex items-center justify-center gap-2 text-xl text-Very-dark-blue(headings) font-semibold lg:text-White(text) cursor-pointer mb-3 lg:mb-0" onClick={() => this.toggle(link.id)}>{link.title}
                    <img src={lightArrow} alt="" className={`${this.state[link.id] ? '-scale-y-100 ' : 'scale-y-100 '} hidden lg:block`}/>
                    <img src={darkArrow} alt="" className={`${this.state[link.id] ? '-scale-y-100 ' : 'scale-y-100 '} block lg:hidden`} />
                    </div>
                    <div className={`link-container relative lg:absolute top-0 lg:top-full left-0 translate-y-0 lg:translate-y-1 -translate-x-0 lg:-translate-x-4 lg:w-40 ${this.state[link.id] ? 'max-h-[1000px]' : 'max-h-0'} lg:group-hover:h-max overflow-hidden bg-Grayish-blue(footer-text) lg:bg-white rounded-md shadow-none lg:shadow-lg transition-all duration-500`}>
                      <ul className="sublinks py-5 pl-4">
                        {
                          link.sublinks.map((item) => (
                            <li className="sublink mb-3 font-semibold lg:font-normal text-lg lg:text-base hover:font-bold transition-all duration-300 text-center text-Very-dark-grayish-blue(body-copy) lg:text-left" key={item.id}>
                              <a href={item.subHref} className="nav-link">{item.subLink}</a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </li>
                ))
  
              }
            </ul>
            <div className="button lg:hidden flex flex-col items-center gap-4 mt-4 pt-4 border-t">
              <LightButton background="bg-none" title="Login" textColor="text-Very-dark-blue(headings)" />
              <Button  background="bg-Light-red(CTA-text)" title="Sign Up" />
            </div>
          </nav>
      </div>
    )
  }
}

export default Navlinks


// import React from 'react'

// function Navlinks(param, state, setState) {
  

  
// }