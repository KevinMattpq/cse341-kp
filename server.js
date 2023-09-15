var express = require('express');
var app = express();

app.use('/', require('./Routes')); 

app.listen(3000, () => {
    console.log('Server is running on 3000');
})