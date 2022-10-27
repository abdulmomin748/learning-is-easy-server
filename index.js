const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors())

const course = require('./data/courses.json');
const courseDeatails = require('./data/course_details.json');
app.get('/courses', (req, res) => {
    res.send(course)
})

app.get('/courses/:id', (req, res) => {
    
    const id = req.params.id;

    const courseUnique = courseDeatails.find(courseUnique => courseUnique.id === id);
    res.send(courseUnique);
    console.log(req.params.id);
    
})    

app.get('/', (req, res) => {
    res.send('Welcome to learning is easy server');
})


app.listen(port, () => {
    console.log(`learning is easy server running ${port}`)
})


