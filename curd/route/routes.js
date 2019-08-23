// var express = require('express');
// var router = express.Router();
// const item = require('../models/shopping');
//
//
// router.get('/first',(req,res,next) =>{
//   res.send('get router test');
// });
//
// router.get('/items',(req,res,next)=>{
//   item.find(function(err,data){
//     if(err){
//       res.json(err);
//     }
//     else{
//       res.json(data);
//     }
//   })
// });
//
//
// router.post('/item',(req,res,next)=>{
//   let newItem = new item({
//     itemname : req.body.itemname
//   });
//   newItem.save((err,item)=>{
//     if(err){
//       res.json(err);
//     }
//     else{
//       res.json(item);
//     }
//   });
// });
//
//
// router.put('/item/:id',(req,res,next) => {
//   item.findOneAndUpdate({_id:req.params.id},{$set:{itemname:req.body.itemname}},function(err,result){
//     if(err){
//       res.json(err);
//     }else{
//       res.json(result);
//     }
//   });
// });
//
// router.delete('/item/:id',(req,res,next) =>{
//   item.findOneAndRemove({_id:req.params.id},function(err,result){
//     if(err){
//       res.json(err);
//     }
//     else{
//       res.json(result);
//     }
//   });
// });
//
//
// module.exports = router;




const express = require('express');
const router = express.Router();
const item = require('../models/shopping');
//
//  var express = require('express');
// var router = express.Router();
// const item = require('../models/shopping');


router.get('/first',function(req,res){
  res.send('helooooooo');
});


router.get('/items',function(req,res,next){
  item.find(function(err,result){
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  });
});


router.post('/item',function(req,res,next){
  let newItem = new item({
    itemname :req.body.itemname
  });
  newItem.save((err,result)=>{
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});


router.put('/item/:id',function(req,res,next){
  item.findOneAndUpdate({_id:req.params.id},{$set:{itemname:req.body.itemname}},function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});

router.delete('/item/:id',function(req,res,next){
  item.findOneAndRemove({_id:req.params.id},function(err,result){
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  });
});

// module.exports = router
module.exports = router;
