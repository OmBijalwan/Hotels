const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const PORT= process.env.PORT || 3000;

const bodyParser= require('body-parser')
app.use(bodyParser.json())
// const Person = require('./Models/Person')

// const MenuItems = require('./Models/MenuItems');

app.get('/',function(req,res){
  res.send('Welcome to my hotel ... How i can help u')
})

const personRoutes= require('./routes/personRoutes');
app.use('/person',personRoutes);
const menuitemsRoutes= require('./routes/menuitemsRoutes');
app.use('/menuitems',menuitemsRoutes);

app.listen(PORT,()=>{
  console.log('listening on port 3000');
})

