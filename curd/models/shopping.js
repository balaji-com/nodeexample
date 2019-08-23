// const mongoose = require('mongoose');
// const schemaItem = mongoose.Schema({
//   itemname : {type:String, require:true},
//   itemquantity : {type:String, require:true}
// });
//
//
// const demoItem = module.exports = mongoose.model('demoItem',schemaItem);


const mongoose = require('mongoose');
const Shoppingitemschema = mongoose.Schema({
  itemname:{
    type:String,
    required:true
  }
});

const item = module.exports = mongoose.model('item',Shoppingitemschema);
