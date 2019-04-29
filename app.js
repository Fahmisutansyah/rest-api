require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./routes/api'))

app.listen(port, ()=>{
console.log(`server is running at port ${port}`)
})