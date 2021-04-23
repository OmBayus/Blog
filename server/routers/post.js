const router= require('express').Router()
const Post = require("../models/post")

router.get("/",(req,res)=>{
      Post.find({},(err,item)=>{
            if(!err){
                  res.json(item)
            }
      })
})

router.get("/:id",(req,res)=>{
      Post.find({_id:req.params.id},(err,item)=>{
            if(!err){
                  return res.json(item)
            }
            res.json(false)
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

router.put("/",(req,res)=>{

      Post.findOne({_id:req.body.id},(err,item)=>{
            if(!err){
                  var post = item
                  post.title = req.body.title
                  post.topic = req.body.topic
                  post.details = req.body.details
                  

                  Post.findOneAndUpdate({_id:req.body.id},post,{new:true})
                        .then(updatedPost=>{
                              res.json(updatedPost)
                        })
                        .catch(err=> res.json({error:err.message}))
            }
            else{
                  res.json({error:err.message})
            }
      })
})

router.delete("/",(req,res)=>{
      Post.findOneAndDelete({_id:req.body.id})
            .then(item=>{
                  res.json(item)
            })
            .catch(err=>res.json({error:err.message}))
})


module.exports = router