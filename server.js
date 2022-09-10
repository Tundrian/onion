const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const adminRoutes = require('./routes/admin')
const apiRoutes = require('./routes/api')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

// app.use(function (req, res, next) {
//   res.setHeader(
//     'Content-Security-Policy-Report-Only',
//     "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css; frame-src 'self'"
//   )
//   next()
// })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))


// Sessions
app.use(
    session({
      secret: 'onions are for ogres',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/admin', adminRoutes)
app.use('/api', apiRoutes)
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})    