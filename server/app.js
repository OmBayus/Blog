const express = require("express")
const fileUpload = require("express-fileupload")
const app = express()

const config = require("./utils/config")
const logger = require("./utils/logger")

const postRouter = require("./routers/post")
const userRouter = require("./routers/user")

const middleware = require("./utils/middleware")

app.use('/uploads', express.static('uploads'))

const cors = require('cors')

app.use(fileUpload())

app.use(cors())

app.use(express.json())

// app.use(express.static('build'))

app.use("/api/post",postRouter)
app.use("/api/user",userRouter)

app.use(middleware.unknownEndpoint)


app.use(middleware.errorHandler)

const PORT = config.PORT

app.listen(PORT, () => {
      logger.info(`Server running on port ${config.PORT}`)
})