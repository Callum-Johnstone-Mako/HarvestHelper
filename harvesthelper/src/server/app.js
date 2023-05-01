const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Connected to the in-memory SQLite database.')
})

db.serialize(() => {
  db.run(
    'CREATE TABLE vegetables (id INTEGER PRIMARY KEY, name TEXT, growthTime INTEGER, plantingSeason TEXT)'
  )

  let stmt = db.prepare(
    'INSERT INTO vegetables (name, growthTime, plantingSeason) VALUES (?, ?, ?)'
  )
  const vegetables = [
    ['Carrot', 70, 'Spring,Fall'],
    ['Tomato', 80, 'Spring'],
    ['Cabbage', 90, 'Spring,Fall'],
    ['Spinach', 45, 'Spring,Fall'],
    ['Broccoli', 100, 'Spring,Fall'],
  ]

  for (const veg of vegetables) {
    stmt.run(veg, (err) => {
      if (err) {
        console.error(err.message)
      }
    })
  }
  stmt.finalize()
})

app.get('/vegetables', (req, res) => {
  db.all('SELECT * FROM vegetables', [], (err, rows) => {
    if (err) {
      throw err
    }
    res.json(rows)
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
