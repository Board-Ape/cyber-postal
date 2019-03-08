const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({hi: "okay"})
});

app.listen(4200)