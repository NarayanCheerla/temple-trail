const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello welcome to node js through express !!!');
});

app.listen('3000', () => console.log('Listening on 3000 port !!'));