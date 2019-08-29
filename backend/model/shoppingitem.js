const mongoose = require('mongoose');
const Shoppingitemschema = mongoose.Schema({
  itemname:{
    type:String,
    required:true
  }
});

const item = module.exports = mongoose.model('item',Shoppingitemschema);
