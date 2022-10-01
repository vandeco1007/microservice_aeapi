const express= require("express")
const router= express.Router()
const axios = require("axios")
const {
    getauth
}= require("../controllers/aeaccount.controller")

const asyncHandle= require("../middlewares/async.middleware")
const authMiddleware= require("../middlewares/auth.middleware")

const roleMiddleware= require("../middlewares/role.middleware")
const typeRole= require("../constants/typeRole")
router
  .route("/")
  .post(
    asyncHandle(getauth)
  )
module.exports= router