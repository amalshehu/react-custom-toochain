import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import showdown from 'showdown'
import ContentEditable from 'react-contenteditable'
import 'regenerator-runtime/runtime'

function App () {
  const [cards, setCard] = useState([])
  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState('')
  // const contentEditable = React.createRef()

  // const textarea = {
  //   padding: '20px 100px 20px 100px',
  //   margin: '0px'
  // }

  const handleQuestion = e => {
  //  console.log('onChange Event')
    setQuestion(e.target.innerText)
  }

  const handleAnswer = e => setAnswer(e.target.innerText)

  useEffect(() => {
    async function getCards () {
      const response = await fetch('http://localhost:3000/card')
      const data = await response.json()
      console.log(data)
    }
    getCards()
  }, [])

  async function addToDb (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await response.json()
  }

  function handleSubmit (e) {
    e.preventDefault()
    const card = {
      question: question,
      answer: answer
    }
    addToDb('http://localhost:3000/card', card)
    setCard([card, ...cards])
    // setMark(card.ques)
    setAnswer('')
    setQuestion('')
  }

  function handleMarkUpQues () {
  //  console.log('Question', question)
    const converter = new showdown.Converter()
    const html = converter.makeHtml(question)
    // console.log(html)
    return html
  }

  function handleMarkUpAns () {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(answer)
    return html
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='field'>
          <ContentEditable
            html={handleMarkUpQues()}
            // innerRef={contentEditable}
            // innerHTML of the editable div
            disabled={false} // use true to disable editing
            onKeyUp={e => handleQuestion(e)}
            className='question'
            data-placeholder='Enter the Question'
          />

          <ContentEditable
            // innerRef={contentEditable}
            // innerHTML of the editable div
            html={handleMarkUpAns()}
            disabled={false} // use true to disable editing
            onKeyUp={e => handleAnswer(e)}
            className='answer'
            data-placeholder='Enter the Answer'
          />
        </div>
        <div className='has-text-centered'>
          <button className='button is-success is-rounded is-center'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default App
