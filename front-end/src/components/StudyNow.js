import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function StudyNow (props) {
  let answerDiv, studyDiv, questionDiv
  const { props: data, curTime } = props
  const [items, setItems] = useState(data)
  const [showQuestion, setShowQuestion] = useState(false)
  const [showStudy, setStudy] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  const { id: deckName } = useParams()

  useEffect(() => {
    const array = items.reduce((acc, cv) => {
      if (curTime >= Number(cv.timestamp)) {
        acc.push(cv)
      }
      return acc
    }, [])

    setItems(array)
  }, [])

  async function modifyUrl (url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
  }

  function handleStudy () {
    setStudy(false)
    setShowQuestion(true)
  }

  function handleQuestion () {
    setShowQuestion(false)
    setShowAnswer(true)
  }

  function handleEasyAnswer (id) {
    const timeStamp = Date.now() + (1 * 60 * 60 * 1000)
    modifyUrl('http://localhost:3000/updateTimeStamp',
      { id, timeStamp }
    )
    setItems(items.slice(1))
    setShowQuestion(true)
    setShowAnswer(false)
  }

  function handleAgainAnswer (id) {
    setItems([...items.slice(1), items[0]])
    setShowQuestion(true)
    setShowAnswer(false)
  }

  function handleGoodAnswer (id) {
    const timeStamp = Date.now() + (15 * 60 * 1000)
    modifyUrl('http://localhost:3000/updateTimeStamp',
      { id, timeStamp }
    )
    setItems(items.slice(1))
    setShowQuestion(true)
    setShowAnswer(false)
  }

  if (showStudy) {
    studyDiv = (
      <div className='study-box'>
        <table className='study-table'>
          <tr>
            <th className='deck-name'>{deckName.toUpperCase()}</th>
          </tr>
          <tr>
            <td>Total</td>
            <td>{items.length}</td>
          </tr>
        </table>
        <button onClick={() => handleStudy()}>Study Now</button>
      </div>)
  }

  if (showQuestion && items.length) {
    questionDiv = (
      <div>
        <h3>{items[0].question}</h3>
        <button onClick={() => handleQuestion()} className='study-btn'>Show Answer</button>
      </div>
    )
  }

  if (showAnswer && items.length) {
    answerDiv = (
      <div>
        <h3>{items[0].answer}</h3>
        <div className='answer-btns'>
          <label>&lt; 1 min</label>
          <label>&lt; 15 min</label>
          <label>1 day</label>
          <button onClick={() => handleAgainAnswer(items[0].id)}>Again</button>
          <button onClick={() => handleEasyAnswer(items[0].id)}>Easy</button>
          <button onClick={() => handleGoodAnswer(items[0].id)}>Good</button>
        </div>

      </div>
    )
  }

  return (
    <div>
      {studyDiv || answerDiv || questionDiv}
      {
        !items.length &&
          <h1>Congratulations ! You have finished this deck for now</h1>
      }
    </div>
  )
}

export default StudyNow
