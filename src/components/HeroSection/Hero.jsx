import React from 'react'
import LeftSideBar from '../LeftSide/LeftSideBar'
import "./Hero.scss"
import Question from '../MiddleSection/Question/Question'
import Answer from '../MiddleSection/Answer/Answer'
import Rightside from '../RightSide/Rightside'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className="left-sidebar">
        <LeftSideBar/>
      </div>
      <div className="quest-ans-rightSidebar">
        <div className="quest-ans">
          <Question/>
          <br />
          <Answer/>
        </div>
        <div className="right-sidebar">
          <Rightside/>
        </div>
      </div>
      </div>
  )
}

export default HeroSection