const router= require('express').Router()
const Post = require("../models/post")

router.get("/",(req,res)=>{
      res.json("Hello")
})


module.exports = router