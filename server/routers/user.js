const router= require('express').Router()
const User = require("../models/user")
const bcrypt = require("bcrypt")

const saltRounds = 10


router.post("/token",async(req,res)=>{
      // const user = db.find((user) => user.name.toLowerCase() === req.body.name.toLowerCase());
      
      const user = await User.findOne({name:req.body.name})
      
      if(user){
            bcrypt.compare(req.body.pass, user.pass, function(err, result) {
                  if (result) {

                        bcrypt.hash(user.id, saltRounds, function(err, hash) {
                              User.findOneAndUpdate({name:req.body.name},{token:hash},err=>{
                                    if(!err){
                                          res.json({auth:true,token:hash})
                                    }
                                    else{
                                          res.json({auth:false})
                                    }
                              })
                        })

                        

                  }
                  else {
                        res.json({auth:false})
                  }
            });
      }
      else{
            res.json({auth:false})
      }
})

router.post("/auth",async(req,res)=>{

      const user = await User.findOne({token:req.body.token})

      if(user){
            res.json({auth:true,name:user.name})
      }
      else{
            res.json({auth:false})
      }
})

// router.post("/test",(req,res)=>{

//       bcrypt.hash("123", saltRounds, function(err, hash) {
//             const user = new User({
//               name:"admin",
//               pass:hash,
//               token:""
//             })
//             user.save().then((data)=>res.json(data))
//       })

// })



module.exports = router