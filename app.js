const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
// const {connect} = require('./routes/tasks')
require('dotenv').config()

//middleware
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(express.static("./public"));

// app.get('/api/v1/tasks', tasks)

const port = 80;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) { console.log(error) }
}

start()

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}....`)
// })