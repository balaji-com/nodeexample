var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
// var http = require('http');
var app = express();

const route = require('./route/routes.js');
const routes = require('./route/pdffile.js');
//connecting mongodb
// mongoose.connect('mongoDB://localhost:27017/shoppinglist');
mongoose.connect("mongodb://localhost:27017/shoppinglist" , { useNewUrlParser: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Conntection to database failed.");
});
mongoose.set('useFindAndModify', false);
//on connection

mongoose.connection.on('conneted',() => {
  console.log('mongoDB connection at the port 27017');
});


//on connection console.error

mongoose.connection.on ('error',(err)=>{
  console.log(err);
});

const port = 3000;
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/pdffile',routes);
app.use('/api',route);
// app.use('/pdf', require('../public/index.js'));

app.get('/',(req,res)=>{
  res.sendfile('index.html');
});


app.listen(port,()=>{
  console.log('server has been connect at port' +port);
})
