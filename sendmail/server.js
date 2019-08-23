const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3005;
app.get('/',(req,res)=>{
  res.send('hello');
});

// app.use(bodyparser.Urlencoded({extended:false}));
app.use(bodyparser.json());


app.get('/item',(req,res)=>{
  res.send('get hello');
});

// app.get('/',function(req,res){
//   res.send('hello');
// });


// app.post('/send',(req,res)=>{
//   const output = `<p>you have a new contact request</p>
//   <h3>contact Details</h3>
//   <ul><li>name:${req.body.name}</li>
//   <li>company:${req.body.company}</li>
//   <li>email:${req.body.email}</li>
//   <li>phone:${req.body.phone}</li>}
//   </ul>
//   <h3>message</h3>
//   <p>{req.body.message}</p>`;
  // let testAccount = await nodemailer.createTestAccount();

     // create reusable transporter object using the default SMTP transport
     // let transporter = nodemailer.createTransport({
     //     host: 'smtp.02balajicse.email',
     //     port: 587,
     //     secure: false, // true for 465, false for other ports
     //     auth: {
     //         user: '02balajicse@gmail.com', // generated ethereal user
     //         pass: '9942140586' // generated ethereal password
     //     },
     //     tls:{
     //       rejectUnauthorized:false
     //     }
     // });


     // send mail with defined transport object
//      let mailOptions ={
//          from: '"nodemailer contact" <02balajicse@gmail.com>', // sender address
//          to: 'balajimb@paypakka.com', // list of receivers
//          subject: 'Hello ✔', // Subject line
//          text: 'Hello world?', // plain text body
//          html: '<b>Hello world?</b>' // html body
//      };
// transporter.sendMail(mailOptions,(err,info)=>{
//   if(err){
//    console.log(err);
//   }
//   console.log('message sent:%s',info.messageId);
//   console.log('preview url:%s',nodemailer.getTestMessageUrl(info));
// });
//
// });

// app.post('/send',(req,res)=>{
//   const output = `<p>you have a new contact request</p>
//   <h3>contact Details</h3>
//   <ul><li>name:${req.body.name}</li>
//   <li>company:${req.body.company}</li>
//   <li>email:${req.body.email}</li>
//   <li>phone:${req.body.phone}</li>}
//   </ul>
//   <h3>message</h3>
//   <p>messae:${req.body.message}</p>`;
// console.log(output);

// nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             api_user:'02balajicse@gmail.com', // generated ethereal user
//             api_pass: '9942140586'  // generated ethereal password
//         },
//         tls:{
//           rejectUnauthorized:false
//         }
//     });
// });

// var transporter = nodemailer.createTransport({
//           // host: 'smtp.ethereal.email',
//           // port: 587,
//           // secure: false,
//     service: 'gmail',
//     auth: {
//               user:'02balajicse@gmail.com', // generated ethereal user
//               pass: '9942140586'  // generated ethereal password
//            }
//
// });

// let mailOptions ={
//          from: '"nodemailer contact" <02balajicse@gmail.com>', // sender address
//          to: 'balajimb@paypakka.com', // list of receivers
//          subject: 'Hello ✔', // Subject line
//          text: 'Hello world?', // plain text body
//          html: '<b>Hello world?</b>' // html body
//      };
// transporter.sendMail(mailOptions,(err,info)=>{
//   if(err){
//    console.log(err);
//   }
//   console.log(info);
//   // console.log('message sent: %s',info.messageId);
//   // console.log('preview url: %s',nodemailer.getTestMessageUrl(info));
// });
//
// });


 app.post('/send',(req,res)=>{
  const output = `<p>you have a new contact request</p>
  <h3>contact Details</h3>
  <ul><li>name:${req.body.name}</li>
  <li>company:${req.body.company}</li>
  <li>email:${req.body.email}</li>
  <li>phone:${req.body.phone}</li>}
  </ul>
  <h3>message</h3>
  <p>messsage:${req.body.message}</p>`;
  console.log(output);

  let transporter = nodemailer.createTransport({
  service: 'gmail',//smtp.gmail.com  //in place of service use host...
  secure: false,//true
  port: 465,//465
  auth: {
    user: '02balajicse@gmail.com',
    pass: '9942140586'
  }, tls: {
    rejectUnauthorized: false
  }
});
let mailOptions = {
        from: "nodemailer contact <02balajicse@gmail.com>",
        to: 'nlsn.raj95@gmail.com',
        subject: "Mail Test",
        text: "Hello",
        html: output
    }
    transporter.sendMail(mailOptions)
        .then(function (email) {
            res.status(200).json({ success: true, msg: 'Mail sent' });
        }).catch(function (exception) {
            res.status(200).json({ success: false, msg: exception });
        });

});

app.listen(port,()=>{
  console.log('server connect on port 3005');
});
