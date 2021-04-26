const router= require('express').Router()
const Post = require("../models/post")
const fs = require('fs')

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
            author:{name:"OmBayus",details:"Harika Yazılımcı"}
      })
      post.save().then(item=>{
            if(req.files !== null){
                  const file = req.files.file
                  file.mv(`${__dirname}/../uploads/${item.id}.png`,err=>{
                        if(err){
                              res.json({error:"Resim Yüklenemedi"})
                        }
                        else{
                              Post.findOneAndUpdate({_id:item.id},{imgUrl:("http://localhost:4000/uploads/"+item.id+".png")}, { new: true })
                              .then(data => {
                                    res.json(data)
                              })
                              .catch(err => res.json({error:err.message}))

                        }
                  }) 
            }
            else{
                  res.json(item)
            }
      })
      .catch(err=>{
            res.json({error:err.message})
      })

      
})

router.put("/",(req,res)=>{

      if(req.files !== null){
            const file = req.files.file
            file.mv(`${__dirname}/../uploads/${req.body.id}.png`,err=>{
                  if(err){
                        res.json({error:"Resim Yüklenemedi"})
                  }
                  else{
                        Post.findOneAndUpdate({_id:req.body.id},{...req.body,imgUrl:("http://localhost:4000/uploads/"+req.body.id+".png")}, { new: true })
                        .then(data => {
                              res.json(data)
                        })
                        .catch(err => res.json({error:err.message}))

                  }
            }) 
      }
      else{
            Post.findOneAndUpdate({_id:req.body.id},{...req.body},{new:true})
                        .then(updatedPost=>{
                              res.json(updatedPost)
                        })
                        .catch(err=> res.json({error:err.message}))
      }
      
})

router.delete("/:id",(req,res)=>{
      var path = `${__dirname}/../uploads/${req.params.id}.png`
      Post.findOneAndDelete({_id:req.params.id})
            .then(item=>{
                  try {
                        fs.unlinkSync(path) 
                  } catch (error) {
                        res.json(item)
                  }
                  
                  res.json(item)
            })
            .catch(err=>res.json({error:err.message}))
})


module.exports = router