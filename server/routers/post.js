const router= require('express').Router()
const Post = require("../models/post")

router.get("/",(req,res)=>{
      Post.find({},(err,item)=>{
            if(!err){
                  res.json(item)
            }
      })
})

router.post("/",(req,res)=>{
      const post = new Post({
            title:req.body.title,
            topic:req.body.topic,
            imgUrl:"http://localhost:4000/uploads/default.webp",
            date:new Date(),
            details:req.body.details,
            author:req.body.author
      })
      post.save().then(item=>{
            res.json(item)
      })
      .catch(err=>{
            res.json({error:err.message})
      })
})


module.exports = router