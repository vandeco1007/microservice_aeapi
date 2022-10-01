const express = require('express')
const router = express.Router()
const typeRole = require('../constants/typeRole')
const {
    getAllproducts,
    createProduct,
    editProduct,
    deleteProduct
} = require('../controllers/product.controller')
const asyncHandle= require("../middlewares/async.middleware")
const authMiddleware= require("../middlewares/auth.middleware")
const roleMiddleware= require("../middlewares/role.middleware")


router
.route('/')
.get(
    asyncHandle(authMiddleware),
    roleMiddleware([typeRole.ADMIN, typeRole.USER]),
    asyncHandle(getAllproducts)
)
.post(
    asyncHandle(authMiddleware),
    roleMiddleware([typeRole.ADMIN, typeRole.USER]),
    asyncHandle(createProduct)
)
.patch(
    asyncHandle(authMiddleware),
    roleMiddleware([typeRole.ADMIN, typeRole.USER]),
    asyncHandle(editProduct)
)
.delete(
    asyncHandle(authMiddleware),
    roleMiddleware([typeRole.ADMIN, typeRole.USER]),
    asyncHandle(deleteProduct)
)

module.exports = router