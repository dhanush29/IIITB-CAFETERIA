const express=require('express');
const router=express.Router();

//Item model
const Item = require('../../models/item');

//@route GET api/items
//@desc  GET all Items
//@access public
router.get('/',(req,res) => {
    Item.find()
      .sort({date:-1})
      .then(items  => res.json(items))
});

//@route POST api/items
//@desc  Create a post
//@access public
router.post('/',(req,res) => {
  const newItem=new Item({
    name:req.body.name
  });
  newItem.save().then(item => res.json(item));
});


module.exports=router;