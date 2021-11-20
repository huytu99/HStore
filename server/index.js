require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

const Auth = require('./router/auth')
app.use('/user', Auth)

const userRouter = require('./router/user')
app.use('/user', userRouter)

const post = require('./router/post')
app.use('/admin/post', post)

const productRouter = require('./router/product')
app.use('/admin', productRouter)

app.get('/wellcome', (req, res, next)=>{
    res.send('Wellcome to my server')
})




const PORT = 3000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})