import React, { useEffect, useState } from 'react'
import './Rightside.scss'

const LinkedQues = () => {
    const [linkedQuestions, setLinkedQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow&key=7MiRd6oixzz5sRtQP3X5hQ(('
            );
            const data = await response.json();
            setLinkedQuestions(data.items);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='linked-ques-sec'>
        <div className="linked-ques-container">

            <div className="linked-heading">
                <p> Linked </p>
            </div>
            <div className="linked-ques-sect">
                {
                    linkedQuestions.slice(0 , 5).map((question, index) => (
                        <div className="linked-ques">
                        <div className={`linked-ques ${index === 3 ? 'active' : 'no'}`}> <p> 2 </p> </div>
                        <div className="ques">
                                <p> {question.title} </p>    
                        </div>
                    </div>
                    )
                )}
            </div> 
            
        </div>
    </div>
  )
}

export default LinkedQues