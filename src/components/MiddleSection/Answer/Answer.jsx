import React from 'react'
import "./Answer.scss"
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const Answer = () => {
  return (
    <div className='answers-section'>
      <div className="answers-container">
        <div className="ans-nav">
          <p> 20 Answers </p>
          <div className="nav">
            <div id='active'> <p> Votes </p> <span>  </span> </div>
            <p> Oldest </p>
            <p> Active </p>
          </div>
        </div>

        <div className="ans-author-details">
          <div className="auth-det">
            <div>
              <p> Author:  </p>
              <p id='name'> javed (308) </p>
            </div>
            <p> Answered: Dec 9 '19 at 8:20 </p>
          </div>
          <div className="btn">
            <p id='minus'> <FaMinus /> </p>
            <p id='num'> 25 </p>
            <p id='plus'> <FiPlus /> </p>
          </div>
        </div>


        <div className="answer-desc">
          <p> For more simplicity, I want to add the vs code settings path in addition to Ricardo's answer. you can get it like this: </p>
          <p> File -{">"} Preferences -{">"} Settings and in the search bar write "automation". </p>
          <p> After that, by looking your operating system enter "edit in settings.json". </p>
          <p> Finally, add the following b/n the braces:  </p>
        </div>
      </div>
    </div>
  )
}

export default Answer