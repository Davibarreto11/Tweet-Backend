const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb+srv://admin:rFbjTUSFA6t8SOil@backend.5p1c0ch.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});


app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    req.io = io
    
    return next()
})

app.use(require('./routes'))
    
    
server.listen(3000, () => {
console.log('Server started on port 3000')
})