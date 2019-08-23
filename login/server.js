const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const config = require('./config/database');

mongoose.connect(config.database,{useNewUrlParser: true});


mongoose.connection.on('connected',() =>{
  console.log('connect to database'+config.database);
});

mongoose.connection.on('error',() =>{
  console.log('connect to database'+err);
})

var app = express();

var user = require('./routes/user');

// mongoose.connect('mongodb://localhost:27017/login',{useNewUrlParser:true}).then(res)=>{
//   console.log("success");
// }

// mongoose.connect("mongodb://localhost:27017/login" , { useNewUrlParser: true }).then(
//   (res) => {
//    console.log("Connected to Database Successfully.")
//   }
// ).catch(() => {
//   console.log("Conntection to database failed.");
// });

const port = 8080;

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {

    done(null, user.id);

});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);

    });
});

require('./config/passport')(passport);

app.use('/api',user);

app.get('/',function(req,res){
  res.send("hello world");
});

app.listen(port,() => {
  console.log("server has been connected at port at 8080");
});
