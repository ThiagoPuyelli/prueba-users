const express = require('express')
const { connect } = require('mongoose')
const userRoutes = require('./routes/user.routes')

const app = express()

app.set('port', 8000)

connect('mongodb://localhost:27017/prueba_users', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err) => {
  if (!err) {
    console.log('Database connected')
  } else {
    console.log('Error to database: ' + err)
  }
})

app.use(userRoutes)

app.listen(app.get('port'), () => console.log('Server on port ' + 8000))