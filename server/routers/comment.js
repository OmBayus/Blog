const router= require('express').Router()
const Post = require("../models/post")

router.get("/",(req,res)=>{
      Post.find({},(err,item)=>{
            if(!err){
                  res.json(item)
            }
      })
})

router.post("/:id",(req,res)=>{
      const param = req.params.id
      // console.log(param)
      // console.log(req.body)
      const today = new Date()
      Post.findByIdAndUpdate({_id:param},
            { "$push": {"comments":{ "details":req.body.comment,"name":req.body.name,"email":req.body.email,"date":today } }},
            { "new": true, "upsert": true },
            function (err, data) {
                if (err) {
                      console.log(err)
                  }
                else{
                  res.json(data);
                }
            }
        );
})


module.exports = router