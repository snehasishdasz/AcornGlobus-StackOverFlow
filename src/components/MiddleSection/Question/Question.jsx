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
  const [voteCount, setVoteCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuestion();
  }, []); 

  const fetchQuestion = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch(
        'https://api.stackexchange.com/2.3/posts?order=desc&sort=activity&site=stackoverflow&filter=!*Mg4Pjfe.L-lW1pv'
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setQuestionData(data.items[0]);
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

  const handleNextQuestion = () => {
    fetchQuestion();
  };

  return (
    <div className="questions-section">
      <div className="questions-container">
      <button onClick={handleNextQuestion} disabled={loading}>
      {loading ? 'Loading...' : 'Next Question'}
      </button>
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