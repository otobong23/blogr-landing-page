import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import menuBtn from '../../images/icon-hamburger.svg'
import closBtn from '../../images/icon-close.svg'
import Navlinks from './Navlinks'
import WhiteButton from '../Buttons/WhiteButton'
import Button from '../Buttons/Button'

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleValue: false
    }
    this.toggleFunc = this.toggleFunc.bind(this);
    this.removeToggle = this.removeToggle.bind(this);
  }

  toggleFunc(){
    if(this.state.toggleValue){
      this.setState({
        toggleValue: false
      })
    } else{
      this.setState({
        toggleValue: true
      })
    }
  }

  removeToggle(){
    this.setState({
      toggleValue: false
    })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.removeToggle);
  }

  render() {

    return (
      <div className='navbar flex justify-between lg:justify-start items-center max-container py-10 gap-24 relative'>
        <div className="logo">
          <img src={logo} alt="logo" className='block max-w-full object-cover'/>
        </div>
  
        <Navlinks height={this.state.toggleValue ? 'max-h-[1000px]' : 'max-h-0'} />
          
        <div className="buttons justify-self-end ml-auto hidden lg:flex">
          <Button  background="bg-none" title="Login" />
          <WhiteButton background="bg-white" title="Sign Up" />
        </div>
        <div className="toggleBtn lg:hidden" onClick={this.toggleFunc}>
          <img src={menuBtn} alt="menu-btn" className='block max-w-full object-cover'/>
          <img src={closBtn} alt="menu-btn" className='hidden max-w-full object-cover'/>
        </div>
      </div>
    )
  }
}

export default Navbar


