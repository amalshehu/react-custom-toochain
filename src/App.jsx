import React, { useState } from 'react'
import 'bulma/css/bulma.css'
import showdown from 'showdown'
import ContentEditable from 'react-contenteditable'

function App () {
  const [cards, setCard] = useState([])
  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState('')
  // const contentEditable = React.createRef()

  const textarea = {
    padding: '20px 100px 20px 100px',
    margin: '0px'
  }

  const questionBox = {
    border: '1px solid black',
    padding: '20px'
  }

  const container = {
    marginTop: '60px',
    display: 'grid',
    gridGap: '30px',
    justifyContent: 'center'
  }

  const handleQuestion = e => {
    console.log('onChange Event')
    setQuestion(e.target.innerText) 
  }

  const handleAnswer = e => setAnswer(e.target.value)

  function handleSubmit (e) {
    e.preventDefault()
    const card = {
      id: Date.now(),
      ques: question,
      ans: answer
    }
    setCard([card, ...cards])
    setMark(card.ques)
    setAnswer('')
    setQuestion('')
  }

  function createMarkUp () {
    console.log('Question', question)
    const converter = new showdown.Converter()
    const html = converter.makeHtml(question)
    console.log(html)
    return html
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='field' style={container}>
        <ContentEditable
         style={questionBox}
              // innerRef={contentEditable}
              html={createMarkUp()} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onKeyUp={e => handleQuestion(e)} // handle innerHTML change
            />

          <div className='control'>
            <textarea
              className='textarea is-focused has-fixed-size'
              placeholder='Enter the Answer'
              value={answer} onChange={e => handleAnswer(e)}
              style={textarea}
            />
          </div>
        </div>
        <div className='has-text-centered'>
          <button className='button is-success is-rounded is-center'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default App
