import React from 'react'
import LeftSideBar from '../LeftSide/LeftSideBar'
import "./Hero.scss"
import Question from '../MiddleSection/Question/Question'
import Answer from '../MiddleSection/Answer/Answer'

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
      </div>
      </div>
  )
}

export default HeroSection