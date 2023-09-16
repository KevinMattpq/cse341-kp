var express = require('express');
var app = express();
const port = process.env.port || 3000

app.use('/', require('./Routes')); 

app.listen(3000, () => {
    console.log(`Server is running on ${port}`);
})