require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const getCards = (req,res) => {
  pool.query('SELECT * FROM cards ORDER BY id ASC', (error, result) => {
    if (error) console.log("Error while fetching data")
    res.json(result.rows)
  }
  )
}

const updateDate = (req, res) => {
  const id = parseInt(req.body.id)
  const displayDate = req.body.displayDate
  const date = req.body.date
  pool.query('UPDATE todo SET displayDate = $1, date = $2 WHERE id = $3', [displayDate, date, id], (error, result) => {
    if (error) throw error
    res.status(200).send('User modified date')
  })
}

const updateTimeStamp = (req,res) => {
  const id = req.body.id
  const timeStamp = req.body.timeStamp
  pool.query('UPDATE cards SET timestamp=$1 WHERE id=$2',[timeStamp, id],(error,result) => {
    if(error) console.log('Error while updating timeStamp')
    res.send('Updated timeStamp successfully')
  })
} 

const addCard = (req, res) => {
    const { deck,question, answer } = req.body
    pool.query('INSERT INTO cards (deck, question, answer) VALUES ($1,$2,$3) RETURNING id', [deck, question, answer ], (error, result) => {
      if (error) console.log('Error while adding card')
      res.send(result.rows)
    })
  }

  module.exports = {
      addCard,
      getCards,
      updateTimeStamp
  }