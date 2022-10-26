const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome to learning is easy server');
})

app.listen(port, () => {
    console.log(`server is running ${port}`)
})


