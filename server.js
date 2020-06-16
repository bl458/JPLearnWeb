const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const SELECT_ALL_LOGIN = "SELECT * FROM nodejs_google_login"
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lbc1skygrin',
  database: 'nodejs'
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
  const REGISTER_QUERY = `INSERT INTO nodejs_google_login(google_id, name, email, created) VALUES('${googleId}', '${name}' , '${email}', 1)`
  connection.query(REGISTER_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send('Successfully registered user')
    }
  })
})

app.listen(4000, () => {
  console.log('Server on port 4000 working')
})
