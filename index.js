const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))

const router = require('./routes/router')

const expressLayouts = require('express-ejs-layouts')

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.use(express.static('public'))

app.use(expressLayouts)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/ola`)
})