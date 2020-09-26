var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('i know how to open  a node ')
  })
  
  app.listen(3000,()=>console.log('listing the port 3000'))