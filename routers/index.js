const accountRouter= require("./account.router")
const postRouter= require("./post.router")
const fileRouter= require('./file.router')
const categories = require('./category.router')
const products = require('./product.router')
const aeaccount = require('./aeaccount.router')

const errorHandle= require("../middlewares/errorHandle")
module.exports= (app)=>{
  app.use("/accounts", accountRouter)
  app.use("/posts", postRouter)
  app.use("/files", fileRouter)
  app.use("/categories", categories)
  app.use("/products", products)
  app.use("/aeaccount", aeaccount)
  app.use("/*", async(req, res, next)=>{
    res.render("error", {error: "Trang này không tồn tại..."})
  })

  app.use(errorHandle)
}


