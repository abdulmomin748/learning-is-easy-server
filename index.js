const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors())

const course = require('./data/courses.json');
app.get('/courses', (req, res) => {
    res.send(course)
})

app.get('/', (req, res) => {
    res.send('Welcome to learning is easy server');
})


app.listen(port, () => {
    console.log(`learning is easy server running ${port}`)
})


