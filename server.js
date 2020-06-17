const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const SELECT_ALL_LOGIN = "SELECT * FROM jquiz_google_login"
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lbc1skygrin',
  database: 'nodejs',
  charset : 'utf8mb4'
})

connection.connect(err => {
  if(err) {
    return err
  }
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('Go to /login for login data')
})

app.get('/login_data', (req, res) => {
  connection.query(SELECT_ALL_LOGIN, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  })
})

app.get('/register', (req, res) => {
  const {googleId, name, email} = req.query
  const REGISTER_QUERY = `INSERT INTO jquiz_google_login(google_id, name, email, created) VALUES('${googleId}', '${name}' , '${email}', 1)`
  connection.query(REGISTER_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send('Successfully registered user')
    }
  })
})

app.get('/video_vocab', (req, res) => {
  const {googleId, vidId, word, furi, meaning} = req.query
  const VIDEO_VOCAB_QUERY =
    `INSERT INTO jquiz_video_vocab(google_id, video_id, word, furi, meaning) VALUES('${googleId}', '${vidId}' , '${word}', '${furi}', '${meaning}')`
  connection.query(VIDEO_VOCAB_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send('Successfully added video vocab')
    }
  })
 })

 app.get('/review', (req, res) => {
   const {googleId, deck, word, furi, meaning} = req.query
   const REVIEW_QUERY =
     `INSERT INTO jquiz_review(google_id, deck, word, furi, meaning) VALUES('${googleId}', '${deck}' , '${word}', '${furi}', '${meaning}')`
   connection.query(REVIEW_QUERY, (err, results) => {
     if (err) {
       return res.send(err)
     }
     else {
       return res.send('Successfully added vocab to review')
     }
   })
  })


app.listen(4000, () => {
  console.log('Server on port 4000 working')
})
