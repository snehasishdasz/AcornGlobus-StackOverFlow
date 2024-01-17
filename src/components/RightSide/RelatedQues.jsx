import React, { useEffect, useState } from 'react'

const RelatedQues = () => {
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
                <p> Related </p>
            </div>

            <div className="linked-ques-sect">
            {
                linkedQuestions.slice(0,9).map((question,index) => (
                  <div className="linked-ques">
                    <div className={`linked-ques ${index === 1 || index === 4 || index === 5 || index === 7 ? 'active' : 'no'}`}> <p> 2 </p> </div>
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

export default RelatedQues