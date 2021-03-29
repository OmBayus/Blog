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
            required:true
      },
      date:{
            type:Date,
            required:true
      },
      details:{
            type:Array,
            required:true
      },
      author:{
            type:Object,
            required:true
      },
      comments:{
            type:Array,
            required:true
      }
})

module.exports = mongoose.model('Post', postSchema)