const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
const ItemSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=Item=mongoose.model('item',ItemSchema);