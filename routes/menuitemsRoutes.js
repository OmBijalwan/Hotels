const express = require('express');
const router = express.Router();

const MenuItems = require('../Models/MenuItems')


router.post('/',async (req, res)=>{
    try{
      const Menu= req.body ;
  
      const MItem= new MenuItems(Menu);
  
      const response = await MItem.save();
      console.log('data saved');
      res.status(200).json(response);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server error'});
    }
  })

  router.get('/',async (req,res) =>{
    try{
  
      const data = await MenuItems.find();
      console.log('data save')
      res.status(200).json(data)
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server error'});
    }
  })
  

  module.exports= router;