// var http = require('http');
const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const Nexmo = require('nexmo');
const socketio = require('socket.io');
// var io = require('socket.io').listen(server);
const app = express();
// var server = http.createServer(app);

// var io = require('socket.io').listen(server);

//init app


//init nexmo
const nexmo = new Nexmo({
  apiKey:'8d8f95df',
  apiSecret:'e23okesOvR1H7iuQ'
});

//template engine setup
app.set('view engine','html');
app.engine('html',ejs.renderFile);


//public folder
app.use(express.static(__dirname + '/public'));


//body parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/',(req,res) => {
  res.render('index');
});

//catch frm submit
app.post('/',(req,res) => {
  // res.send(req.body);
  // console.log(req.body);
  const number = req.body.number;
  const text = req.body.text;
  // nexmo.message.sendSms(
  //   'NEXMO', number,text,{type:'unicode'},
  //   (err,responseData) => {
  //     if(err){
  //       console.log(err);
  //     }else{
  //       console.dir(responseData);
  //     }
  //   }
  // );
  nexmo.message.sendSms(
  'NEXMO', number,text,{type:'unicode'},
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
});
//define port
const port =  3200;


//start server

const server = app.listen(port,() =>  console.log(`server started on port ${port}`));
