import React, { useEffect, useState } from 'react'
import "./Question.scss"
import authorImg from '../../../assets/author.jpg'
import saveImg from '../../../assets/save-tag.png'
import shareImg from '../../../assets/share.png'
import commentImg from '../../../assets/comment.png'
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import parse from 'html-react-parser';

const Question = () => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.stackexchange.com/2.3/posts?order=desc&sort=activity&site=stackoverflow&filter=!*Mg4Pjfe.L-lW1pv'
        );
        const data = await response.json();
        // Assuming the API response is an array of questions
        if (data.items && data.items.length > 0) {
          setQuestionData(data.items[0]); // Use the first question for demonstration
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [voteCount, setVoteCount] = useState(103);

  useEffect(() => {
    // Assuming 'questionData' has information about votes
    if (questionData && questionData.score) {
      setVoteCount(questionData.score);
    }
  }, [questionData]);

  return (
    <div className="questions-section">
      <div className="questions-container">

        <div className="questions-heading">
          <div className="question-title">
            <h3> {questionData ? questionData.title : 'Loading...'} </h3>
            <div className="numbers">
              <div className="number">
                <p id='minus'> <FaMinus /> </p>
                <p id='num'> {voteCount} </p>
                <p id='plus'> <FiPlus /> </p>
              </div>
            </div>
          </div>

          {questionData && (
          <div className="question-author-details">
            <div className="author-desc">
              <img src={authorImg} alt="authorImg" />
              <p> {questionData.owner.display_name} </p>
              <div>
                <p> {questionData.owner.reputation} </p>
              </div>
            </div>
            <div className="question-asked-time">
              <p> Asked {new Date(questionData.creation_date * 1000).toLocaleDateString()} </p>
              <span className='div-line'>  </span>
              <p> Active {new Date(questionData.last_activity_date * 1000).toLocaleDateString()} </p>
              <span className='div-line'>  </span>
              <p> Viewed {questionData.view_count} times </p>
            </div>
          </div>
          )}
        </div>

        {questionData && (
          <div className='questions-description'>
            <p> {parse(questionData.body)} </p>
          </div>
        )}

        {questionData && (
          <div className='question-footer'>
            <div className='save-ques'>
              <img src={saveImg} alt='saveImg' />
              <p> {questionData.favorite_count || 0} </p>
            </div>
            <div className='share-comment'>
              <img src={shareImg} alt='shareImg' />
              <img src={commentImg} alt='commentImg' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Question