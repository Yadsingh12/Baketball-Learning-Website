import React from 'react'
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import About from './About';
import PositionAccurate from './PositionAccurate';
import PositionAccuracy from './PositionAccuracy';
import Faster from './Faster';
import InjurySection from './InjurySection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className='HeroSection' style={{ marginTop: "80px", width: "100vw", overflowX: "hidden" }}>
      {/* <div>
        <video width="1250" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div> */}
      <div className='introSection'>
        <IntroSection/>
      </div>
      <div style={{backgroundColor:"black"}}>
        {/* <AboutSection/> */}
        <About/>
      </div>
      <div className='posture-accurate' style={{backgroundColor:"black"}}>
          <PositionAccurate/>
      </div>
      <div className='position-accuracy' style={{backgroundColor:"black"}}>
          <PositionAccuracy/>
      </div>
      <div className='fast-learning' style={{backgroundColor:"black"}}>
            <Faster/>
      </div>

      <div className='player-type'>
        {/* <Card/> */}
      </div>
      <div className='injury' style={{backgroundColor:"black"}}>
        <InjurySection/>
      </div>
      <div>
        <Footer/>
      </div>
      <div className='profile-section'>
        {/* <ProfilesContainer/> */}
      </div>
      {/* <div style={{ minHeight: "100vh" }}>
      </div> */}
      {/* <div className='LetStart'>
        <div className='E1-top'>
            <h1>Let's</h1>
        </div>
        <div className='E1-middle'></div>
        <div className='E1-bottom'>
            <h1>Start</h1>
        </div>
      </div> */}
    </div>
  )
}

export default HomePage;
