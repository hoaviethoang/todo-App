const express = require('express')
const exphbs = require('express-handlebars')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

// Static Files
app.use(express.static('public'))

app.set('view engine', 'hbs')

const handlebars = exphbs.create({ extname: '.hbs' })
app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')

const routes = require('./server/routes/user')
app.use('/', routes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
