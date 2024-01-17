import React, { useEffect, useState } from 'react';
import './Answer.scss';
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import parse from 'html-react-parser';

const Answers = () => {
  const [answerData, setAnswerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.stackexchange.com/2.3/answers?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNdWme&key=7MiRd6oixzz5sRtQP3X5hQ(('
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setAnswerData(data.items[0]);
        }
      } catch (error) {
        console.error('Error fetching answer data:', error);
      }
    };

    fetchData();
  }, []);

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
        {answerData && (
          <div className="ans-author-details">
            <div className="auth-det">
              <div>
                <p> Author: </p>
                <p id='name'>{answerData.owner.display_name} ({answerData.owner.reputation})</p>
              </div>
              <p> Answered: {new Date(answerData.creation_date * 1000).toLocaleString()}</p>
            </div>
            <div className="btn">
              <p id='minus'> <FaMinus /> </p>
              <p id='num'> {answerData.score} </p>
              <p id='plus'> <FiPlus /> </p>
            </div>
          </div>
        )}

        {answerData && (
          <div className="answer-desc">
            {answerData.body && (
              <p>{parse(answerData.body)}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Answers;