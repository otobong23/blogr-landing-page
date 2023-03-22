import React from 'react'
import Navbar from './components/Navbar/Navbar';
import HeroContent from './components/HeroContent';
import Descriptions from './components/sections/Descriptions';
import StateOfArt from './components/sections/StateOfArt';
import Details from './components/sections/Details';
import Footer from './components/sections/Footer';


function App() {
  return (
    <div className="App">
      <div className="first-section bg-pattern-intro-mobile lg:bg-pattern-intro-desktop h-full text-base rounded-bl-[100px]">
        <Navbar />
        <HeroContent />
      </div>
      <Descriptions />
      <StateOfArt />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
