const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'spacerep',
  password: 'nandini123',
  port: 5432
})

const getCards = (req,res) => {
  pool.query('SELECT * FROM cards ORDER BY id ASC', (error, result) => {
    if (error) console.log("Error while tetching data")
    res.json(result.rows)
  }
  )
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
      getCards
  }