const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const SELECT_ALL_LOGIN = "SELECT * FROM jquiz_google_login"
const connection = mysql.createPool({
  host: '18.191.224.222',
  user: 'ec2User',
  password: 'Lbc1skygrin!',
  database: 'nodejs',
  charset : 'utf8mb4'
})

connection.getConnection(err => {
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
  const {googleId, vidId, kanji, hiragana, english} = req.query
  const VIDEO_VOCAB_QUERY =
    `INSERT INTO jquiz_video_vocab(google_id, video_id, kanji, hiragana, english) VALUES('${googleId}', '${vidId}' , '${kanji}', '${hiragana}', '${english}')`
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
   const {googleId, deck, kanji, hiragana, english} = req.query
   const REVIEW_QUERY =
     `INSERT INTO jquiz_review(google_id, deck, kanji, hiragana, english) VALUES('${googleId}', '${deck}' , '${kanji}', '${hiragana}', '${english}')`
   connection.query(REVIEW_QUERY, (err, results) => {
     if (err) {
       return res.send(err)
     }
     else {
       return res.send('Successfully added vocab to review')
     }
   })
  })

  app.get('/progress', (req, res) => {
    const {googleId, deck, kanji} = req.query
    const PROGRESS_QUERY =
      `INSERT INTO jquiz_progress(google_id, deck, kanji) VALUES('${googleId}', '${deck}' , '${kanji}')`
    connection.query(PROGRESS_QUERY, (err, results) => {
      if (err) {
        return res.send(err)
      }
      else {
        return res.send('Successfully added vocab to progress')
      }
    })
   })

   app.get('/view_progress', (req, res) => {
     const {googleId, deck} = req.query
     const VIEW_PROGRESS_QUERY =
       `SELECT * FROM jquiz_progress WHERE google_id=${googleId} and deck=${deck}`
     connection.query(VIEW_PROGRESS_QUERY, (err, results) => {
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

    app.get('/load_deck', (req, res) => {
      const {deck} = req.query
      const LOAD_DECK_QUERY =
        `SELECT * FROM jquiz_${deck}`
      connection.query(LOAD_DECK_QUERY, (err, results) => {
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


app.listen(8080, "172.31.39.187")
