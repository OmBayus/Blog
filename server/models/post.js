const mongoose = require('mongoose')
const config = require("../utils/config")
const logger = require("../utils/logger")

const url = config.MONGODB_URI

logger.info('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
      logger.info('connected to MongoDB')
  })
  .catch((error) => {
      logger.error('error connecting to MongoDB:', error.message)
  })

const postSchema = new mongoose.Schema({
      title: {
            type:String,
            required:true
      },
      topic:{
            type:String,
            required:true
      },
      imgUrl:{
            type:String,
            required:false
      },
      date:{
            type:Date,
            required:false
      },
      details:{
            type:Array,
            required:true
      },
      author:{
            name:{
                  type:String,
                  required:true
            },
            details:{
                  type:String,
                  required:true
            }
      },
      comments:[
            {
                  name:{
                        type:String,
                        required:false
                  },
                  date:{
                        type:Date,
                        required:false
                  },
                  details:{
                        type:String,
                        required:false
                  },
            }
      ]
})

postSchema.set('toJSON', {
      transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
      }
    })

module.exports = mongoose.model('Post', postSchema)