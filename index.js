const express = require('express')
const app =  express()
const cors = require('cors')
const routes = require('./routes/routes')
const mongoose = require('mongoose')

const port = 3001

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})