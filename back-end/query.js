const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'spacerep',
  password: 'nandini123',
  port: 5432
})

const getCard = (req,res) => {
  pool.query('SELECT * FROM cards ORDER BY id ASC', (error, result) => {
    if (error) console.log("Error while tetching data")
    res.json(result.rows)
  }
  )
}

const addCard = (req, res) => {
    const { question, answer } = req.body
    pool.query('INSERT INTO cards (question, answer) VALUES ($1,$2) RETURNING id', [ question, answer ], (error, result) => {
      if (error) console.log('Error while adding card')
      res.send(result.rows)
    })
  }

  module.exports = {
      addCard,
      getCard
  }