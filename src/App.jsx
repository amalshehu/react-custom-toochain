import React, { useState } from 'react';
import 'bulma/css/bulma.css'
import MarkDown from './MarkDown';

function App() {
  const [cards, setCard] = useState([])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [markDown, setMark] = useState('')

  const textarea = {
      padding:'20px 100px 20px 100px',
      margin: '0px'
  } 

  const container = {
      marginTop: '60px',
      display: 'grid',
      gridGap: '30px',
      justifyContent: 'center'
  }


  const handleQuestion = event => setQuestion(event.target.value)
  
  const handleAnswer = event => setAnswer(event.target.value)

  function handleSubmit(event) {
      event.preventDefault()
      const card = {
          id:Date.now(),
          ques: question,
          ans:  answer
      }
      setCard([card, ...cards])
      setMark(card.ques)
      setAnswer('')
      setQuestion('')
  }

  return (
      <div>
      <form onSubmit={() => handleSubmit(event)}>
          <div className="field" style={container}>
              <div className="control">
                   <textarea className="textarea is-danger has-fixed-size"
                    placeholder="Enter the Question"
                    value={question}
                     onChange={() => handleQuestion(event)}
                     style ={textarea}
                    ></textarea>
              </div>
               <div className="control">
                  <textarea className="textarea is-focused has-fixed-size" 
                   placeholder="Enter the Answer"
                   value={answer} onChange={() => handleAnswer(event) }
                   style={textarea}
                   ></textarea>
               </div>
          </div>
          <div className="has-text-centered">
              <button className="button is-success is-rounded is-center" >Save</button>
          </div>
      </form>
     <MarkDown props={markDown} />
</div>
  )
}

export default App;
