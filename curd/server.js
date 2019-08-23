// var express = require('express');
// var bodyparser = require('body-parser');
// var mongoose = require('mongoose');
// var cors = require('cors');
//
// var app = express();
// const user = require('./routes/route.js');
// const port = 3000;
//
// mongoose.connect('mongodb://localhost:27017/demoItem',{useNewUrlParser:true}).then((res)=>{
//   console.log("success");
// })
// .catch(()=>{
//   console.log("falied");
// });
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
//
// app.use(cors(''));
// app.use(bodyparser.json());
//
// app.use('/api',user);
// app.get('/',function(req,res){
//   res.send('hello world');
// });
//
// app.listen(port,()=> {
//   console.log('server port run on'+port );
// });


var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
// var http = require('http');
var app = express();

const route = require('./route/routes.js');
//connecting mongodb
// mongoose.connect('mongoDB://localhost:27017/shoppinglist');
mongoose.connect("mongodb://localhost:27017/demoitem" , { useNewUrlParser: true }).then(
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

const port = 3001;
app.use(cors());

app.use(bodyparser.json());

app.use('/api',route);

app.get('/',(req,res)=>{
  res.send('sever create');
});
app.listen(port,()=>{
  console.log('server has been connect at port' +port);
})
