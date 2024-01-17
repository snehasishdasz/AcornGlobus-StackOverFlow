import React, { useEffect, useState } from 'react'
import "./Answer.scss"
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import parse from 'html-react-parser';

const Answer = () => {
  const [answerData, setAnswerData] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAnswer();
  }, []); 

  const fetchAnswer = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch(
        'https://api.stackexchange.com/2.3/answers?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNdWme'
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setAnswerData(data.items[0]);
        if (data.items[0].score) {
          setVoteCount(data.items[0].score);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextAnswer = () => {
    fetchAnswer();
  };



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
              <p id='name'> {answerData.owner.display_name} </p>
            </div>
            <p> Answered: {new Date(answerData.creation_date * 1000).toLocaleDateString()} </p>
          </div>
          <div className="btn">
            <p id='minus'> <FaMinus /> </p>
            <p id='num'> 25 </p>
            <p id='plus'> <FiPlus /> </p>
          </div>
        </div>

        {answerData && (
          <div className="answer-desc">
          <p>{parse(answerData.body)}</p>
        </div>
        )}
      </div>
    </div>
  )
}

export default Answer