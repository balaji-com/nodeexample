var express = require('express');
var router = express.Router();
const item = require('../model/shoppingitem');

// router.get('/first',(req,res,next) =>{
//   res.send('get router test');
// });
//
// router.post('/pdf',(req,res,next)=>{
//   // res.send('pdf');
//   const fname = req.body.fname;
//   const lname = req.body.lname;
//   var documentdef={
//     content:[
//       'first paragraphe',
//       'dsfjgdshfshdfg'
//     ]
//   };
//   const pdfDoc = pdfmake.createpdf(documentdef);
//   pdfDoc.getBase64((data)=>{
//     res.writeHead(200,{
//       'content-Type':'application/pdf',
//       'content-Disposition':'attachment;filename="filename.pdf"'
//     });
//     const download = Buffer.from(data.toString('utf-8'),'base64');
//     res.end(download);
//   });
// });

router.get('/items',(req,res,next)=>{
  item.find(function(err,data){
    if(err){
      res.json(err);
    }
    else{
      res.json(data);
    }
  })
});


router.post('/item',(req,res,next)=>{
  let newshoppingitem = new item({
    itemname:  req.body.itemname
  });
  newshoppingitem.save((err,item)=>{
    if(err){
      res.json(err);
    }
    else{
      res.json({msg:'item has been add Successfully'});
    }
  });
});


router.put('/item/:id',(req,res,next)=>{
  item.findOneAndUpdate({_id: req.params.id},{
    $set:{itemname:req.body.itemname}
  },
function(err,result){
  if(err){
    res.json(err);
  }
  else{
    res.json(result);
  }
});
});

router.delete('/item/:id',(req,res,next)=>{
  item.deleteOne({_id:req.params.id},function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});




module.exports = router;
